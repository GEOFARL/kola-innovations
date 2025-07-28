import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
import 'dotenv/config';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const baseDir = path.resolve('./src/i18n/messages');
const locales = ['de', 'fr'];

async function translateText(
  text: string,
  targetLang: string,
): Promise<string> {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `Translate the following text to ${targetLang}. Keep formatting intact.`,
      },
      { role: 'user', content: text },
    ],
  });

  return response.choices[0].message.content?.trim() || text;
}

function deepKeys(obj: any, prefix = ''): Record<string, any> {
  let result: Record<string, any> = {};
  for (const key in obj) {
    const fullPath = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      result = { ...result, ...deepKeys(obj[key], fullPath) };
    } else {
      result[fullPath] = obj[key];
    }
  }
  return result;
}

async function syncTranslations() {
  const enDir = path.join(baseDir, 'en');
  const enFiles = fs.readdirSync(enDir).filter((f) => f.endsWith('.json'));

  for (const file of enFiles) {
    const enPath = path.join(enDir, file);
    const enData = JSON.parse(fs.readFileSync(enPath, 'utf-8'));
    const enKeys = deepKeys(enData);

    for (const locale of locales) {
      const targetPath = path.join(baseDir, locale, file);
      if (!fs.existsSync(targetPath)) continue;
      const targetData = JSON.parse(fs.readFileSync(targetPath, 'utf-8'));
      const targetKeys = deepKeys(targetData);

      let updated = false;

      for (const [key, value] of Object.entries(enKeys)) {
        if (!(key in targetKeys)) {
          console.log(`Missing key ${key} in ${locale}/${file}`);
          const translated = await translateText(value as string, locale);
          const segments = key.split('.');
          let cursor = targetData;
          segments.forEach((segment, i) => {
            if (i === segments.length - 1) cursor[segment] = translated;
            else cursor[segment] = cursor[segment] || {};
            cursor = cursor[segment];
          });
          updated = true;
        }
      }

      if (updated) {
        fs.writeFileSync(
          targetPath,
          JSON.stringify(targetData, null, 2),
          'utf-8',
        );
        console.log(`Updated ${locale}/${file}`);
      }
    }
  }
}

syncTranslations().catch(console.error);

'use client';

import Card from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import SkillsField from '../../shared/skills-field';

const Skills: React.FC = () => {
  const t = useTranslations('profile');
  return (
    <section className="space-y-6">
      <h2 className="body-1 text-center text-dark-900">{t('skills.title')}</h2>
      <Card className="space-y-6">
        <SkillsField />
      </Card>
    </section>
  );
};

export default Skills;

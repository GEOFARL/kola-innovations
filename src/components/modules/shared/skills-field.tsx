import MultiSelectField from '@/components/ui/multi-select-field';
import TagChip from '@/components/ui/tag-chip';
import { skillKeys } from '@/lib/constants/profile/skills';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

const SkillsField: React.FC = () => {
  const t = useTranslations('common');
  const allSkills = useMemo(
    () =>
      skillKeys.map((key) => ({
        value: key,
        label: t(`skills.values.${key}`),
      })),
    [t],
  );
  const methods = useFormContext();
  const selectedSkills = methods.watch('skills') ?? [];
  const filteredSuggestions = allSkills.filter(
    (skill) => !selectedSkills.includes(skill.value),
  );
  const addSkill = (skillValue: string) => {
    if (!selectedSkills.includes(skillValue)) {
      methods.setValue('skills', [...selectedSkills, skillValue], {
        shouldValidate: true,
      });
    }
  };

  return (
    <>
      <MultiSelectField
        name="skills"
        label={t('skills.searchLabel')}
        options={allSkills}
        maxVisibleTags={7}
      />

      {filteredSuggestions.length > 0 && (
        <div>
          <p className="small-1 text-dark-900 mb-4">{t('skills.suggested')}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {filteredSuggestions.map((skill) => (
              <TagChip
                key={skill.value}
                label={skill.label}
                onClick={() => addSkill(skill.value)}
                variant="add"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SkillsField;

'use client';

import TagChip from '@/components/ui/tag-chip';
import { useTalentFiltersStore } from '@/lib/stores/talents/filters';
import { useTranslations } from 'next-intl';

const SkillsTab: React.FC = () => {
  const t = useTranslations('talents.skillsList');
  const { activeSkills, toggleActiveSkill } = useTalentFiltersStore();

  const skills = [
    'music',
    'musicians',
    'photographers',
    'speakers',
    'stylists',
    'videographers',
    'audio_engineers',
    'editors',
    'event_planners',
    'performer',
    'music_director',
    'sound_engineer',
    'songwriter',
  ];

  return (
    <>
      {skills.map((skill) => (
        <TagChip
          key={skill}
          label={t(skill)}
          onClick={() => toggleActiveSkill(skill)}
          variant={activeSkills.includes(skill) ? 'remove' : 'add'}
          color="red"
        />
      ))}
    </>
  );
};

export default SkillsTab;

'use client';

import { useTranslations } from 'next-intl';
import SkillsField from '../../shared/fields/skills-field';
import CommonLayout from './common-layout';

const Skills: React.FC = () => {
  const t = useTranslations('profile');

  return (
    <CommonLayout title={t('skills.title')}>
      <SkillsField />
    </CommonLayout>
  );
};

export default Skills;

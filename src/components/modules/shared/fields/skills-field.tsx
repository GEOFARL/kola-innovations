'use client';

import { skillKeys } from '@/lib/constants/profile/skills';
import MultiSelectWithSuggestions from './multiselect-with-suggestions';

const SkillsField: React.FC = () => (
  <MultiSelectWithSuggestions
    name="skills"
    labelKey="skills.searchLabel"
    suggestionTitleKey="skills.suggested"
    values={[...skillKeys]}
    translationPrefix="skills.values"
  />
);

export default SkillsField;

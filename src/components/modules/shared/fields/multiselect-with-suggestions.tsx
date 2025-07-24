'use client';

import MultiSelectField from '@/components/ui/multi-select-field';
import TagChip from '@/components/ui/tag-chip';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

type MultiSelectWithSuggestionsProps = {
  name: string;
  labelKey: string;
  suggestionTitleKey: string;
  values: string[];
  translationPrefix: string;
  maxVisibleTags?: number;
};

const MultiSelectWithSuggestions: React.FC<MultiSelectWithSuggestionsProps> = ({
  name,
  labelKey,
  suggestionTitleKey,
  values,
  translationPrefix,
  maxVisibleTags = 7,
}) => {
  const t = useTranslations('common');
  const allOptions = useMemo(
    () =>
      values.map((key) => ({
        value: key,
        label: t(`${translationPrefix}.${key}`),
      })),
    [values, translationPrefix, t],
  );

  const methods = useFormContext();
  const selected = methods.watch(name) ?? [];
  const filteredSuggestions = allOptions.filter(
    (opt) => !selected.includes(opt.value),
  );

  const addValue = (value: string) => {
    if (!selected.includes(value)) {
      methods.setValue(name, [...selected, value], { shouldValidate: true });
    }
  };

  return (
    <>
      <MultiSelectField
        name={name}
        label={t(labelKey)}
        options={allOptions}
        maxVisibleTags={maxVisibleTags}
      />

      {filteredSuggestions.length > 0 && (
        <div>
          <p className="small-1 text-dark-900 mb-4">{t(suggestionTitleKey)}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {filteredSuggestions.map((opt) => (
              <TagChip
                key={opt.value}
                label={opt.label}
                onClick={() => addValue(opt.value)}
                variant="add"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MultiSelectWithSuggestions;

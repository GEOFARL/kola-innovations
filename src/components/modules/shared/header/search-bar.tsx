'use client';

import SearchIcon from '@/assets/icons/header/search.svg';
import FormField from '@/components/ui/form-field';
import { useClickOutside } from '@/hooks/use-click-outside';
import { cn } from '@/lib/cn';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

type Props = {
  onSubmit?: (query: string) => void;
  onFocusChange?: (focused: boolean) => void;
  renderSuggestions?: (helpers: {
    query: string;
    setQuery: (q: string) => void;
    clearSuggestions: () => void;
  }) => React.ReactNode;
  filters?: React.ReactNode;
  className?: string;
  inputClassName?: string;
};

const SearchBar: React.FC<Props> = ({
  onSubmit,
  onFocusChange,
  renderSuggestions,
  filters,
  className,
  inputClassName,
}) => {
  const t = useTranslations('common.search');
  const methods = useForm<{ query: string }>({ defaultValues: { query: '' } });
  const { setValue, watch } = methods;
  const query = watch('query');

  const setQuery = (q: string) => setValue('query', q);
  const clearSuggestions = () => setQuery('');

  const [focused, setFocused] = useState(false);
  const wrapperRef = useClickOutside<HTMLDivElement>(() => {
    setFocused(false);
    onFocusChange?.(false);
  });

  useEffect(() => {
    onFocusChange?.(focused);
  }, [focused, onFocusChange]);

  const handleSubmit = (values: { query: string }) => {
    onSubmit?.(values.query);
    setFocused(false);
    onFocusChange?.(false);
  };

  return (
    <div className={cn('relative w-full max-w-md', className)} ref={wrapperRef}>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleSubmit)}
          className="relative"
          autoComplete="off"
        >
          <FormField
            name="query"
            placeholder={t('search')}
            leftIcon={<SearchIcon />}
            onFocus={() => {
              setFocused(true);
              onFocusChange?.(true);
            }}
            rightIcon={filters}
            className={cn(
              'rounded-[27px] w-full relative z-2 bg-white',
              inputClassName,
            )}
          />
          {focused &&
            renderSuggestions?.({
              query,
              setQuery,
              clearSuggestions,
            })}
        </form>
      </FormProvider>
    </div>
  );
};

export default SearchBar;

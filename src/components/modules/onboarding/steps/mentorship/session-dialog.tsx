'use client';

import MultiSelectWithSuggestions from '@/components/modules/shared/fields/multiselect-with-suggestions';
import Button from '@/components/ui/button/button';
import FileUploadField from '@/components/ui/file-upload-field';
import FormField from '@/components/ui/form-field';
import Modal from '@/components/ui/modal';
import { industryKeys } from '@/lib/constants/onboarding/select-options';
import {
  MentorshipSession,
  mentorshipSessionSchema,
} from '@/lib/schemas/onboarding/mentorship.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { FormProvider, useForm } from 'react-hook-form';

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (session: MentorshipSession) => void;
  defaultValues?: MentorshipSession;
};

function formatDate(input: string): string {
  return input.replace(/[-.]/g, '/');
}

function formatTime(input: string): string {
  const match = input.match(/^(\d{1,2})[:.]?(\d{2})(\s?(am|pm))?$/i);
  if (!match) return input;

  let hours = parseInt(match[1], 10);
  const minutes = match[2];
  let suffix = match[4] ? match[4].toUpperCase() : '';

  if (!suffix) {
    suffix = hours < 12 ? 'AM' : 'PM';
    if (hours > 12) hours -= 12;
  }

  return `${hours.toString().padStart(2, '0')}:${minutes} ${suffix}`;
}

const SessionDialog: React.FC<Props> = ({
  open,
  onClose,
  onSubmit,
  defaultValues,
}) => {
  const t = useTranslations('onboarding.mentorship.session');
  const methods = useForm<MentorshipSession>({
    resolver: zodResolver(mentorshipSessionSchema),
    defaultValues: defaultValues ?? {
      title: '',
      date: '',
      time: '',
      brief: '',
      topics: [],
      image: undefined,
    },
  });

  const handleSave = methods.handleSubmit((values: MentorshipSession) => {
    const image =
      values.image instanceof File
        ? URL.createObjectURL(values.image)
        : values.image;
    onSubmit({ ...values, image });
    onClose();
  });

  return (
    <Modal
      open={open}
      onOpenChange={onClose}
      className="max-w-[830px] w-[calc(100%-32px)] rounded-lg"
    >
      <FormProvider {...methods}>
        <form onSubmit={handleSave}>
          <div className="space-y-4 p-6">
            <h2 className="text-lg font-semibold">
              {defaultValues ? t('editTitle') : t('addTitle')}
            </h2>

            <FormField name="title" label={t('fields.title')} required />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                name="date"
                label={t('fields.date')}
                placeholder="DD/MM/YYYY"
                required
                onBlur={(e) =>
                  methods.setValue('date', formatDate(e.target.value))
                }
              />
              <FormField
                name="time"
                label={t('fields.time')}
                placeholder="HH:MM AM/PM"
                required
                onBlur={(e) =>
                  methods.setValue('time', formatTime(e.target.value))
                }
              />
            </div>
            <FormField
              name="brief"
              label={t('fields.brief')}
              multiline
              rows={12}
            />

            <MultiSelectWithSuggestions
              name="topics"
              labelKey="meetingTopics.searchLabel"
              suggestionTitleKey="meetingTopics.suggested"
              values={[...industryKeys]}
              translationPrefix="industries.values"
            />

            <FileUploadField
              name="image"
              label={t('fields.upload')}
              accept=".jpeg,.jpg,.png"
              hint={t('fields.uploadHint')}
              iconVariant="red"
            />
          </div>
          <div className="flex justify-end gap-4 py-4 px-8 mt-auto shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
            <Button
              type="button"
              variant="secondary"
              color="black"
              onClick={onClose}
              responsiveSize={{
                'base': 'md',
                'lg': 'lg',
              }}
            >
              {t('buttons.cancel')}
            </Button>
            <Button
              type="submit"
              color="black"
              responsiveSize={{
                'base': 'md',
                'lg': 'lg',
              }}
            >
              {defaultValues ? t('buttons.edit') : t('buttons.save')}
            </Button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default SessionDialog;

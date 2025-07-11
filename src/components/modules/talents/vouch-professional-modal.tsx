'use client';

import Modal from '@/components/ui/modal';
import FormField from '@/components/ui/form-field';
import SelectField from '@/components/ui/select-field';
import FileUploadField from '@/components/ui/file-upload-field';
import Button from '@/components/ui/button/button';
import { useForm, FormProvider } from 'react-hook-form';

type Props = {
  open: boolean;
  onClose: () => void;
};

const VouchProfessionalModal: React.FC<Props> = ({ open, onClose }) => {
  const methods = useForm({
    defaultValues: {
      vouchImage: undefined,
      reason: '',
      details: '',
    },
  });

  const handleSubmit = methods.handleSubmit((data) => {
    onClose();
  });

  return (
    <Modal
      open={open}
      onOpenChange={onClose}
      className="max-w-[512px] w-[calc(100%-25px)] rounded-[6px] lg:rounded-2xl lg:w-full top-[120px] lg:top-[50px] translate-y-0 lg:p-6"
    >
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4 py-6 px-3 lg:py-0 lg:px-0">
            <h2 className="font-semibold text-[18px] lg:text-[24px] leading-[140%] tracking-[-0.2px] mb-1">
              Vouch Professional
            </h2>
            <p className="text-sm text-dark-600 mb-6">
              Lorem ipsum dolor sit amet consectetur.
            </p>

            <FileUploadField
              name="vouchImage"
              label="Upload Image"
              accept=".jpeg,.jpg,.png"
              hint="Use a jpeg, jpg, png file"
              iconVariant="red"
              labelClassName="mb-2"
            />

            <SelectField
              name="reason"
              label="Select Reason"
              required
              options={[
                { value: 'project', label: 'Worked together on a project' },
                { value: 'hired', label: 'Hired them directly' },
                { value: 'collab', label: 'Collaborated in a group' },
              ]}
            />

            <FormField
              name="details"
              label="Additional Details"
              placeholder="Type your vouch..."
              multiline
              rows={5}
            />
          </div>
          <div className="flex justify-end gap-2 pt-4 py-4 px-3 lg:py-0 lg:px-0 shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
            <Button
              type="button"
              responsiveSize={{
                'base': 'md',
                'lg': 'lg',
              }}
              className="flex-1 lg:flex-auto"
              variant="secondary"
              color="black"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              responsiveSize={{
                'base': 'md',
                'lg': 'lg',
              }}
              color="black"
              className="flex-1 lg:flex-auto"
              type="submit"
            >
              Vouch
            </Button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default VouchProfessionalModal;

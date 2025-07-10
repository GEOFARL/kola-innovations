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
      className="max-w-[512px] w-full top-[50px] translate-y-0 p-6"
    >
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="h5 mb-1">Vouch Professional</h2>
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

          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              size="lg"
              variant="secondary"
              color="black"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button size="lg" color="black" type="submit">
              Vouch
            </Button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default VouchProfessionalModal;

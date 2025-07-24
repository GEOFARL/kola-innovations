'use client';

import RadioGroupField from '@/components/ui/radio-group-field';

const jobOptions = [
  {
    value: 'actively',
    component: (
      <div className="pl-9 text-left flex flex-col gap-[10px]">
        <p className="body-1-md">Yes – actively applying.</p>
        <p className="body-2-rg text-dark-600">
          Get recommended to recruiters hiring for relevant roles.
        </p>
      </div>
    ),
  },
  {
    value: 'casually',
    component: (
      <div className="pl-9 text-left flex flex-col gap-[10px]">
        <p className="body-1-md">Yes – casually looking.</p>
        <p className="body-2-rg text-dark-600">
          Recruiters can discover you, and we'll selectively recommend new jobs.
        </p>
      </div>
    ),
  },
  {
    value: 'not-looking',
    component: (
      <div className="pl-9 text-left flex flex-col gap-[10px]">
        <p className="body-1-md">Not looking for new jobs</p>
        <p className="body-2-rg text-dark-600">
          Your profile won’t be recommended to recruiters.
        </p>
      </div>
    ),
  },
];

const JobOpenStatus: React.FC = () => {
  return (
    <RadioGroupField
      name="jobStatus"
      label="Are you open for job?"
      options={jobOptions}
      required
      containerClassName="2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1"
      itemClassName="p-4 pt-[14px]"
    />
  );
};

export default JobOpenStatus;

'use client';

import { Professional } from '@/lib/types/talents/professional';
import PersonCard from './person-card';
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  title?: string;
  people: (Professional & { href: string; isSaved?: boolean })[];
} & HTMLAttributes<HTMLDivElement>;

const PersonGrid: React.FC<Props> = ({ title, people, className }) => {
  return (
    <div className={cn('mt-8 mb-4 lg:mb-0 lg:mt-6 relative z-0', className)}>
      {title && <h2 className="body-1 text-dark-900 mb-4 lg:mb-6">{title}</h2>}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {people.map((person) => (
          <PersonCard key={person.id} {...person} />
        ))}
      </div>
    </div>
  );
};

export default PersonGrid;

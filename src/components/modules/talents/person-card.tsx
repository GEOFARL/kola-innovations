'use client';

import BookmarkIcon from '@/assets/icons/header/save.svg';
import LocationIcon from '@/assets/icons/talents/location.svg';
import BadgeIcon from '@/assets/icons/talents/badge.svg';
import Button from '@/components/ui/button/button';
import Image from 'next/image';
import Link from 'next/link';
import { Professional } from '@/lib/types/talents/professional';
import { cn } from '@/lib/cn';

type Props = Professional & {
  href: string;
  isSaved?: boolean;
};

const PersonCard: React.FC<Props> = ({
  id,
  name,
  title,
  avatar,
  endorsements,
  tags,
  href,
  isSaved = false,
}) => {
  return (
    <Link
      key={id}
      href={href}
      className="border-[1px] border-dark-100 rounded-2xl p-4 bg-white relative transition hover:shadow-md"
    >
      <Button
        iconOnly
        size="sm"
        iconCircle
        className="absolute top-4 right-4"
        onClick={(e) => e.preventDefault()}
      >
        <BookmarkIcon
          className={cn(
            isSaved ? 'fill-primary text-primary' : 'fill-transparent',
          )}
        />
      </Button>

      <div className="flex flex-col gap-4">
        <Image
          src={avatar}
          alt={name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="h6 text-dark-900 mb-1">{name}</p>
          <p className="small-1 text-dark-600">{title}</p>
        </div>
      </div>

      <p className="small-1-md text-dark-700 mt-4 line-clamp-2">
        Passionate professional committed to delivering high-quality results
        across creative and technical domains.
      </p>

      <div className="flex items-center text-dark-700 small-1 mt-6 gap-6">
        <p className="flex gap-2 items-center flex-1">
          <LocationIcon /> Pickering, ON
        </p>
        <p className="flex-1 flex gap-2 items-center">
          <BadgeIcon />
          {endorsements}
        </p>
      </div>

      {(tags?.length ?? 0) > 0 && (
        <div className="flex flex-wrap gap-2 mt-6">
          {tags?.map((tag, idx) => (
            <span
              key={idx}
              className="bg-dark-100 px-3 py-1 rounded-full small-2-md text-dark-900"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
};

export default PersonCard;

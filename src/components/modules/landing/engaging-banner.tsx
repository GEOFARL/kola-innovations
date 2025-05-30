import SwiggleArrow from '@/assets/icons/swiggle-arrow-2.svg';
import spotifyLabel from '@/assets/images/spotify-label.png';
import tikTokLabel from '@/assets/images/tik-tok-label.png';
import { cn } from '@/lib/cn';
import Image from 'next/image';

type Props = {
  heading: string;
  subheading: string;
  actionElement?: React.ReactNode;
  swiggleClassName?: string;
};

const EngagingBanner: React.FC<Props> = ({
  heading,
  subheading,
  actionElement,
  swiggleClassName,
}) => {
  return (
    <div className="bg-primary-100 p-12 rounded-[40px] flex justify-between items-end gap-8 relative">
      <div className="max-w-[684px]">
        <h3 className="h3 text-dark-900 mb-4">{heading}</h3>
        <p className="h6-rg text-dark-700">{subheading}</p>
      </div>
      {actionElement}

      <div
        className={cn('absolute top-[100px] left-[750px]', swiggleClassName)}
      >
        <SwiggleArrow />
      </div>

      <Image
        src={tikTokLabel}
        alt="tik tok label"
        width={270}
        height={85}
        className="absolute -top-[30px] right-[200px]"
      />

      <Image
        src={spotifyLabel}
        alt="spotify label"
        width={270}
        height={85}
        className="absolute top-[30px] -right-[105px]"
      />
    </div>
  );
};

export default EngagingBanner;

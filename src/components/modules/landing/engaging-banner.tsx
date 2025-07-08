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
    <div className="bg-primary-100 lg:p-12 py-[30px] px-[20px] rounded-[12px] lg:rounded-[40px] flex items-center sm:items-start flex-col gap-8 relative">
      <div className="flex gap-8 items-end justify-between w-full">
        <div className="max-w-[684px]">
          <h3 className="h3 text-dark-900 mb-4">{heading}</h3>
          <p className="h6-rg text-dark-700">{subheading}</p>
        </div>
        <div className="hidden lg:block">{actionElement}</div>
      </div>

      <div
        className={cn(
          'relative left-[120px] sm:static lg:absolute scale-x-[-0.7] scale-70 sm:scale-100 sm:scale-x-100 lg:top-[100px] lg:left-[750px]',
          swiggleClassName,
        )}
      >
        <SwiggleArrow />
      </div>

      <Image
        src={tikTokLabel}
        alt="tik tok label"
        width={270}
        height={85}
        className="relative sm:static lg:absolute scale-[130%] sm:scale-100 right-[20px] bottom-[50px] lg:-top-[30px] lg:right-[200px]"
      />

      <Image
        src={spotifyLabel}
        alt="spotify label"
        width={270}
        height={85}
        className="relative bottom-[50px] lg:bottom-auto lg:left-auto left-[50px] scale-[120%] sm:scale-100 sm:static lg:absolute lg:top-[30px] lg:-right-[105px]"
      />

      <div className="lg:hidden self-stretch">{actionElement}</div>
    </div>
  );
};

export default EngagingBanner;

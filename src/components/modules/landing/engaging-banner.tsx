import Button from '@/components/ui/button/button';
import SwiggleArrow from '@/assets/icons/swiggle-arrow-2.svg';
import MailIcon from '@/assets/icons/social/mail.svg';
import tikTokLabel from '@/assets/images/tik-tok-label.png';
import spotifyLabel from '@/assets/images/spotify-label.png';
import Image from 'next/image';

type Props = {
  heading: string;
  subheading: string;
  actionElement?: React.ReactNode;
};

const EngagingBanner: React.FC<Props> = ({
  heading,
  subheading,
  actionElement,
}) => {
  return (
    <div className="bg-primary-100 p-12 rounded-[40px] flex justify-between items-end gap-8 relative">
      <div className="max-w-[684px]">
        <h3 className="h3 text-dark-900 mb-4">{heading}</h3>
        <p className="h6-rg text-dark-700">{subheading}</p>
      </div>
      {actionElement}

      <div className="absolute top-[100px] left-[750px]">
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

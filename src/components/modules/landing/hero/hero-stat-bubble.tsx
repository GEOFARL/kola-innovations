import SwiggleArrow from '@/assets/icons/swiggle-arrow.svg';
import people from '@/assets/images/people.png';
import Image from 'next/image';

const HeroStatBubble: React.FC = () => {
  return (
    <div className="absolute -bottom-[10px] left-[160px]">
      <SwiggleArrow />
      <div className="relative -top-[45px] left-[140px] shadow-[0_2px_4px_rgba(0,0,0,0.08)] px-3 py-2 rounded-[8px] flex items-center gap-4">
        <Image src={people} alt="people" width={112} height={32} />
        <p className="max-w-[132px] small-1 w-full">
          100+
          <span className="font-[400]"> Talents found their dream job!</span>
        </p>
      </div>
    </div>
  );
};

export default HeroStatBubble;

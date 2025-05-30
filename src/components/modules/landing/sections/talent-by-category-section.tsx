import MaxWidthWrapper from '@/components/utils/max-width-wrapper';
import CameraIcon from '@/assets/icons/talent/camera.svg';
import MusicIcon from '@/assets/icons/talent/music.svg';
import VideoIcon from '@/assets/icons/talent/video.svg';
import DesignIcon from '@/assets/icons/talent/design.svg';
import EventPlannerIcon from '@/assets/icons/talent/event-planner.svg';
import AudioIcon from '@/assets/icons/talent/audio.svg';
import EditorIcon from '@/assets/icons/talent/editor.svg';
import StarIcon from '@/assets/icons/yellow-star.svg';
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg';
import ArrowUpRightCircle from '@/assets/icons/arrow-up-right-circle.svg';

import people from '@/assets/images/people.png';
import Image from 'next/image';

const talentCards = [
  {
    title: 'Photography',
    rating: 4.85,
    icon: CameraIcon,
    color: '#13AF6A1A',
  },
  {
    title: 'Musician',
    rating: 4.85,
    icon: MusicIcon,
    color: '#FDB0221A',
  },
  {
    title: 'Videography',
    rating: 4.85,
    icon: VideoIcon,
    color: '#F443361A',
  },
  {
    title: 'Design & Creative',
    rating: 4.85,
    icon: DesignIcon,
    color: '#2F80ED1A',
  },
  {
    title: 'Event Planners',
    rating: 4.85,
    icon: EventPlannerIcon,
    color: '#6834D41A',
  },
  {
    title: 'Audio Engineers',
    rating: 4.85,
    icon: AudioIcon,
    color: '#086BC61A',
  },
  {
    title: 'Editors',
    rating: 4.85,
    icon: EditorIcon,
    color: '#FC66011A',
  },
];

const TalentByCategorySection: React.FC = () => {
  return (
    <div className="bg-dark-50 py-35">
      <MaxWidthWrapper>
        <div className="max-w-[950px] mx-auto text-center">
          <p className="caption text-primary mb-3">Lorem Ipsum</p>
          <h2 className="h2 text-dark-900 mb-4">Browse talent by category</h2>
          <h6 className="max-w-[708px] mx-auto text-dark-700 h6-md">
            Malesuada cursus nec tincidunt consectetur aenean velit. Pharetra
            orci volutpat donec sit diam pulvinar lobortis donec euismod.
          </h6>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-16">
          {talentCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-[16px] p-6 flex flex-col gap-6"
            >
              <div
                style={{ backgroundColor: card.color }}
                className="w-12 h-12 rounded-full flex items-center justify-center"
              >
                <card.icon />
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="h5 text-dark-900">{card.title}</h5>
                <div className="flex items-center gap-2 small-1-md text-dark-700">
                  <StarIcon />
                  <p>{card.rating}/5</p>
                  <p>Avg Rating</p>
                </div>
              </div>

              <div className="flex items-center justify-between ">
                <Image src={people} alt="people" width={112} height={32} />
                <ArrowUpRight />
              </div>
            </div>
          ))}

          <div className="p-6 rounded-[16px] bg-primary flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="h2 text-dark-white">13k+</h2>
              <p className="body-2-md text-dark-white">jobs already posted</p>
            </div>

            <ArrowUpRightCircle className="self-end -mr-[12px] -mb-[12px]" />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default TalentByCategorySection;

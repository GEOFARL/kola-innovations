'use client';

import Image, { StaticImageData } from 'next/image';
import Card from '@/components/ui/card';
import MediumIcon from '@/assets/icons/social/medium.svg';
import TrashIcon from '@/assets/icons/trash.svg';
import ShareIcon from '@/assets/icons/onboarding/share.svg';
import Button from '@/components/ui/button/button';
import article1 from '@/assets/images/onboarding/mock/article-1.jpg';
import article2 from '@/assets/images/onboarding/mock/article-2.jpg';
import article3 from '@/assets/images/onboarding/mock/article-3.jpg';

const MediumPreview: React.FC = () => {
  const articles = [
    {
      title:
        'Navigating the Music Industry: Essential Tips for Emerging Artists',
      image: article1,
    },
    {
      title:
        'The Evolution of Music Technology: How Digital Tools Are Shaping Sound',
      image: article2,
    },
    {
      title:
        'Breaking into the Music Scene: Strategies for Building a Strong Fanbase',
      image: article3,
    },
  ];

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 body-1">
          <MediumIcon className="scale-80 lg:scale-100" />
          Medium
        </div>
        <Button
          iconCircle
          iconOnly
          size="sm"
          className="bg-transparent hover:bg-transparent w-max"
        >
          <TrashIcon className="scale-80 lg:scale-100" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <MediumArticleCard
            key={index}
            title={article.title}
            image={article.image}
          />
        ))}
      </div>
    </div>
  );
};

const MediumArticleCard: React.FC<{
  title: string;
  image: string | StaticImageData;
}> = ({ title, image }) => {
  return (
    <Card className="relative p-0 overflow-hidden group">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 lg:py-5 lg:pl-6 pr-12 lg:pr-18 relative">
        <p className="body-2-md line-clamp-2">{title}</p>
        <Button
          iconCircle
          iconOnly
          size="sm"
          className="absolute top-5 right-6"
        >
          <ShareIcon />
        </Button>
      </div>
    </Card>
  );
};

export default MediumPreview;

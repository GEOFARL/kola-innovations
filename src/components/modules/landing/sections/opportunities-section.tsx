'use client';

import ArrowDown from '@/assets/icons/arrow-down.svg';
import ArrowRight from '@/assets/icons/arrow-right.svg';
import Briefcase from '@/assets/icons/briefcase-1.svg';
import Pin from '@/assets/icons/pin.svg';
import tikTokLogo from '@/assets/images/logos/tik-tok.png';
import artistLogo from '@/assets/images/logos/artist.png';
import photographyLogo from '@/assets/images/logos/photography.png';
import graphicDesignLogo from '@/assets/images/logos/graphic-design.png';
import eventPlannerLogo from '@/assets/images/logos/event-planner.png';
import Button from '@/components/ui/button/button';
import MaxWidthWrapper from '@/components/utils/max-width-wrapper';
import { Bookmark, Search } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { StaticImageData } from 'next/image';

type CompanyName =
  | 'Tiktok'
  | 'Cafe'
  | 'BlueOptima'
  | 'ACP Studio'
  | 'JK Photo Studio'
  | 'ChargePoint';

interface Job {
  title: string;
  company: CompanyName;
  description: string;
  location: string;
  type: string;
  featured?: boolean;
}

const jobLogos: Record<CompanyName, StaticImageData> = {
  Tiktok: tikTokLogo,
  Cafe: tikTokLogo,
  BlueOptima: graphicDesignLogo,
  'ACP Studio': artistLogo,
  'JK Photo Studio': photographyLogo,
  ChargePoint: eventPlannerLogo,
};

const OpportunitiesSection: React.FC = () => {
  const t = useTranslations('landing.jobs');
  const rawJobs = t.raw('list') as Job[];

  const jobs: (Job & { logo: StaticImageData })[] = rawJobs.map((job) => ({
    ...job,
    logo: jobLogos[job.company],
  }));

  return (
    <MaxWidthWrapper className="py-12 sm:py-24 xl:py-35">
      <SectionHeader t={t} />
      <SectionFilters t={t} />
      <JobGrid jobs={jobs} t={t} />
      <SectionFooterActions t={t} />
    </MaxWidthWrapper>
  );
};

const SectionHeader = ({ t }: { t: ReturnType<typeof useTranslations> }) => (
  <div className="sm:text-center sm:max-w-[951px] sm:mx-auto mb-4 sm:mb-16">
    <p className="text-primary caption mb-[10px] sm:mb-3">{t('tagline')}</p>
    <h2 className="h2 text-dark-900 mb-4">{t('headline')}</h2>
    <p className="h6-md text-dark-700 max-w-[708px] mx-auto">{t('subtext')}</p>
  </div>
);

const SectionFilters = ({ t }: { t: ReturnType<typeof useTranslations> }) => (
  <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between lg:items-center mb-4 lg:mb-10">
    <div className="flex gap-3 items-center">
      <button className="px-4 py-2 bg-primary text-white rounded-full small-1">
        {t('tabs.jobs')}
      </button>
      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full small-1-md">
        {t('tabs.professionals')}
      </button>
    </div>
    <div className="flex items-center gap-4 w-full max-w-md">
      <SearchBar t={t} />
    </div>
  </div>
);

const SearchBar = ({ t }: { t: ReturnType<typeof useTranslations> }) => (
  <div className="relative w-full flex items-center rounded-full border-[1px] border-dark-200">
    <Search className="absolute left-3 top-2.5 w-4 h-4 text-dark-900" />
    <input
      type="text"
      placeholder={t('search.keywords')}
      className="w-full pl-9 pr-4 py-2 rounded-full small-1-rg text-dark-900 focus:outline-none"
    />
    <button className="flex items-center gap-2 px-4 py-2 rounded-full small-1-rg text-dark-900">
      {t('search.category')} <ArrowDown />
    </button>
  </div>
);

const JobGrid = ({
  jobs,
  t,
}: {
  jobs: (Job & { logo: StaticImageData })[];
  t: ReturnType<typeof useTranslations>;
}) => (
  <div>
    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-2">
      {jobs.map((job, index) => (
        <div
          key={index}
          className="min-w-[280px] max-w-[320px] flex-shrink-0 md:min-w-0 md:max-w-none"
        >
          <JobCard {...job} t={t} />
        </div>
      ))}
    </div>
  </div>
);

const JobCard = ({
  title,
  company,
  description,
  location,
  type,
  logo,
  t,
}: Job & { logo: StaticImageData; t: ReturnType<typeof useTranslations> }) => (
  <div className="group cursor-pointer hover:bg-primary-100 lg:hover:bg-transparent transition-all duration-200 border border-dark-100 hover:border-transparent rounded-xl p-4 relative overflow-hidden">
    <div className="relative flex justify-between items-center gap-3 mb-4">
      <Image
        src={logo}
        alt={company}
        className="h-8 w-8 sm:h-12 sm:w-12"
        width={48}
        height={48}
      />
      <div className="flex items-center gap-3">
        <div className="cursor-pointer rounded-full w-8 h-8 hover:bg-dark-200 transition bg-dark-100 group-hover:bg-transparent flex items-center justify-center">
          <Bookmark className="w-4 h-4" />
        </div>
        <Button
          size="md"
          color="black"
          className="group-hover:bg-primary group-hover:text-white duration-200 hidden sm:flex"
        >
          {t('apply')}
        </Button>

        <Button
          size="sm"
          color="black"
          className="group-hover:bg-primary group-hover:text-white duration-200 min-w-[52px] sm:hidden"
        >
          {t('apply')}
        </Button>
      </div>
    </div>

    <h6 className="relative font-semibold sm:font-semibold text-[16px] sm:text-[20px] leading-[140%] tracking-[0px] text-dark-900 mb-1">
      {title}
    </h6>
    <p className="relative font-semibold text-[14px] sm:text-[14px] leading-[150%] text-dark-600 mb-4">
      {company}
    </p>
    <p className="relative small-1-md text-[13px] sm:text-[14px] text-dark-700 line-clamp-3 mb-6">
      {description}
    </p>

    <div className="relative flex items-center gap-6">
      <div className="flex flex-1 items-center gap-1 font-[500] sm:font-semibold text-[13px] sm:text-[14px] text-dark-700">
        <Pin />
        {location}
      </div>
      <div className="flex flex-1 items-center gap-1 font-[500] sm:font-semibold text-[13px] sm:text-[14px] text-dark-700">
        <Briefcase />
        {type}
      </div>
    </div>

    <svg
      width="466"
      height="273"
      viewBox="0 0 466 273"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden lg:block absolute top-0 right-0 -z-15 opacity-0 group-hover:opacity-100 transition-all duration-200"
    >
      <path
        d="M306 0.5C315.113 0.5 322.5 7.8873 322.5 17V58C322.5 66.5604 329.44 73.5 338 73.5H449C458.113 73.5 465.5 80.8873 465.5 90V256C465.5 265.113 458.113 272.5 449 272.5H17C7.88731 272.5 0.5 265.113 0.5 256V17L0.505859 16.5742C0.731706 7.65831 8.02966 0.5 17 0.5H306Z"
        fill="white"
      />
      <path
        d="M306 0.5C315.113 0.5 322.5 7.8873 322.5 17V58C322.5 66.5604 329.44 73.5 338 73.5H449C458.113 73.5 465.5 80.8873 465.5 90V256C465.5 265.113 458.113 272.5 449 272.5H17C7.88731 272.5 0.5 265.113 0.5 256V17L0.505859 16.5742C0.731706 7.65831 8.02966 0.5 17 0.5H306Z"
        fill="url(#paint0_linear_3075_133094)"
      />
      <path
        d="M306 0.5C315.113 0.5 322.5 7.8873 322.5 17V58C322.5 66.5604 329.44 73.5 338 73.5H449C458.113 73.5 465.5 80.8873 465.5 90V256C465.5 265.113 458.113 272.5 449 272.5H17C7.88731 272.5 0.5 265.113 0.5 256V17L0.505859 16.5742C0.731706 7.65831 8.02966 0.5 17 0.5H306Z"
        stroke="white"
      />
      <path
        d="M306 0.5C315.113 0.5 322.5 7.8873 322.5 17V58C322.5 66.5604 329.44 73.5 338 73.5H449C458.113 73.5 465.5 80.8873 465.5 90V256C465.5 265.113 458.113 272.5 449 272.5H17C7.88731 272.5 0.5 265.113 0.5 256V17L0.505859 16.5742C0.731706 7.65831 8.02966 0.5 17 0.5H306Z"
        stroke="url(#paint1_linear_3075_133094)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3075_133094"
          x1="464.633"
          y1="272"
          x2="87.4467"
          y2="-89.2582"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F44336" stopOpacity="0.05" />
          <stop offset="1" stopColor="#F44336" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3075_133094"
          x1="433.435"
          y1="-20.7768"
          x2="-16.8212"
          y2="30.1308"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5F5F5" stopOpacity="0.64" />
          <stop offset="1" stopColor="#F44336" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const SectionFooterActions = ({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) => (
  <>
    <div className="hidden mt-6 sm:mt-16 sm:flex flex-row-reverse sm:flex-row justify-center gap-4">
      <Button size="lg" className="gap-3">
        {t('exploreMoreJobs')} <ArrowRight />
      </Button>
      <Button size="lg" variant="secondary">
        {t('postJob')}
      </Button>
    </div>
    <div className="flex sm:hidden mt-3 sm:mt-16 flex-row-reverse sm:flex-row justify-center gap-4">
      <Button size="md" className="gap-3 px-2 sm:flex-auto w-[60%]">
        {t('exploreMoreJobs')} <ArrowRight />
      </Button>
      <Button size="md" variant="secondary" className="sm:flex-auto w-[40%]">
        {t('postJob')}
      </Button>
    </div>
  </>
);

export default OpportunitiesSection;

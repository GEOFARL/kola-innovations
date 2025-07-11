import RightArrow from '@/assets/icons/right-arrow-circle.svg';
import { useProfessionalsSidebar } from '@/lib/stores/professionals/sidebar';
import { useTranslations } from 'next-intl';
import Analytics from '../analytics';
import { MobileButton } from './mobile-filters';

const MobileAnalytics: React.FC = () => {
  const { open } = useProfessionalsSidebar();
  return (
    <div className="lg:hidden flex justify-end py-[10px] px-3 lg:px-0 lg:py-0 w-[calc(100%+24px)] lg:w-auto -ml-3 lg:ml-0 border-b-[1px] border-dark-200">
      <MobileButton
        onClick={() => open('analytics')}
        className="py-[6px] px-3 text-[13px] leading-[150%] font-[500]"
      >
        More <RightArrow />
      </MobileButton>
    </div>
  );
};

const Content: React.FC = () => {
  const t = useTranslations('talents.analytics');
  return (
    <Analytics
      title={t('title')}
      items={[{ label: t('vouches'), value: 30 }]}
    />
  );
};

const MobileAnalyticsComponent = MobileAnalytics as React.FC & {
  Content: React.FC;
};

MobileAnalyticsComponent.Content = Content;

export default MobileAnalyticsComponent;

import MaxWidthWrapper from '@/components/utils/max-width-wrapper';
import EngagingBanner from '../engaging-banner';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/button/button';

const MotivationSection: React.FC = () => {
  const t = useTranslations('landing.motivation');
  return (
    <MaxWidthWrapper className="pb-8 sm:pb-40">
      <EngagingBanner
        heading={t('heading')}
        subheading={t('subHeading')}
        actionElement={
          <>
            <Button size="lg" className="hidden sm:flex w-full lg:w-auto">
              {t('getStarted')}
            </Button>
            <Button size="md" className="sm:hidden w-full lg:w-auto">
              {t('getStarted')}
            </Button>
          </>
        }
      />
    </MaxWidthWrapper>
  );
};

export default MotivationSection;

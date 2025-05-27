import GiftIcon from '@/assets/icons/gift.svg';
import Link from 'next/link';
import Button from '@/components/ui/button/button';
import { useTranslations } from 'next-intl';

const HomeScreen: React.FC = () => {
  const t = useTranslations('landing');

  return (
    <div className="space-y-4 p-8">
      <h1 className="h1 text-primary">{t('title')}</h1>

      <p className="body-1 text-gray-700">
        {t('description')} <GiftIcon />
      </p>

      <Link href="/login">
        <Button variant="primary" size="md" color="red">
          {t('login')}
        </Button>
      </Link>
    </div>
  );
};

export default HomeScreen;

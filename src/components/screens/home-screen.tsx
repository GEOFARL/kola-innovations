import GiftIcon from '@/assets/icons/gift.svg';
import Link from 'next/link';
import Button from '@/components/ui/button/button';

const HomeScreen: React.FC = () => {
  return (
    <div className="space-y-4 p-8">
      <h1 className="h1 text-primary">Головна сторінка</h1>

      <p className="body-1 text-gray-700">
        Вітаємо! Це тестовий лендінг з Tailwind CSS. <GiftIcon />
      </p>

      <Link href="/login">
        <Button variant="primary" size="md" color="red">
          Увійти
        </Button>
      </Link>
    </div>
  );
};

export default HomeScreen;

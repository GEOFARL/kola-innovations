import GiftIcon from '@/assets/icons/gift.svg';

const HomeScreen: React.FC = () => {
  return (
    <div className="space-y-4 p-8">
      <h1 className="h1 text-primary">Головна сторінка</h1>

      <p className="body-1 text-gray-700">
        Вітаємо! Це тестовий лендінг з Tailwind CSS. <GiftIcon />
      </p>

      <a
        href="/login"
        className="inline-block text-[16px] font-semibold leading-[150%] bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Увійти
      </a>
    </div>
  );
};

export default HomeScreen;

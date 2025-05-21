const HomeScreen: React.FC = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold text-blue-700">Головна сторінка</h1>
      <p className="text-gray-700">
        Вітаємо! Це тестовий лендінг з Tailwind CSS.
      </p>
      <a
        href="/login"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Увійти
      </a>
    </div>
  );
};

export default HomeScreen;

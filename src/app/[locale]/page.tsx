import Header from '@/components/layouts/header';
import HomeScreen from '@/components/screens/home-screen';

type Props = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

const HomePage: React.FC<Props> = async ({ params, children }) => {
  const { locale } = await params;

  return (
    <>
      <Header locale={locale} />
      <main className="p-6">
        <HomeScreen />
      </main>
    </>
  );
};

export default HomePage;

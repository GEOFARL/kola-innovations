import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kola Innovations',
  description: 'Kola Innovations website',
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        <header className="bg-blue-600 text-white px-6 py-4 text-xl font-bold shadow">
          Kola Innovations
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

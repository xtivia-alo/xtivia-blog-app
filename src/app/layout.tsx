import './globals.css';
import { AppContextProvider } from '@/providers/AppContextProvider';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${roboto.variable}`}>
      <AppContextProvider>
        <body>{children}</body>
      </AppContextProvider>
    </html>
  );
}

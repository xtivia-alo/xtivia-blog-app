import './globals.css';
import { AppContextProvider } from '@/providers/AppContextProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <AppContextProvider>
        <body>{children}</body>
      </AppContextProvider>
    </html>
  );
}

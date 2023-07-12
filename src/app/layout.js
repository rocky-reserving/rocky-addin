import './globals.css';
// import { Inter } from 'next/font/google'
// thing
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'rocky',
  description: 'Triangle-based property-casualty loss reserving modeling',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

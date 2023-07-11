import Image from 'next/image';
import Layout from '@/components/Layout.rocky';
import CodeBox from '@/components/template/CodeBox.component';
import BottomButtons from '@/components/template/BottomButtons.component';
import VercelLogo from '@/components/template/VercelLogo.component';
import NextJSLogo from '@/components/template/NextJSLogo.component';

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <NextJSLogo />
        <BottomButtons />
      </main>
    </Layout>
  );
}

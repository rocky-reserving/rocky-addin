'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { NextResponse } from 'next/server';
import Layout from '@/app/components/Layout.rocky';
import CodeBox from '@/app/components/template/CodeBox.component';
import BottomButtons from '@/app/components/template/BottomButtons.component';
import VercelLogo from '@/app/components/template/VercelLogo.component';
import NextJSLogo from '@/app/components/template/NextJSLogo.component';

export default function Home() {
  const fetchHi = async () => {
    const res = await fetch('/api/hello');
    console.log('res:', res);
    // const data = await res.json();
    // console.log('data:', data);
  };

  useEffect(() => {
    fetchHi();
  }, []);

  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <NextJSLogo />
        <BottomButtons />
      </main>
    </Layout>
  );
}

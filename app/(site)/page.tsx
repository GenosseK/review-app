import React from 'react';
import { Metadata } from 'next';
import { getMenu } from '../../api/menu';
import HomePage from './home-page';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'ComputedMeta',
  };
}

export default async function Home() {
  const firstCategory = 0;
  const menu = await getMenu(0);

  return (
    <div>
      <HomePage menu={menu} firstCategory={firstCategory} />
    </div>
  );
}

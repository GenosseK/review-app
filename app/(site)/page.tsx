import React from 'react';
import { Metadata } from 'next';
import { getMenu } from '../../api/menu';
import styles from './page.module.css'
import HomePage from './home-page';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'ComputedMeta',
  }
}

export default async function Home() {
  let firstCategory = 0
  const menu = await getMenu(0);

  return (
    <div>
      <HomePage menu={menu} firstCategory={firstCategory} />
    </div>
  )
}

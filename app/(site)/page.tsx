import React from 'react';
import { Button, Htag, P, Rating, Tag } from '../../shared/components/index';
import { withLayout } from '../../shared/layout/Layout';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';
import { Metadata } from 'next';
import { getMenu } from '../../api/menu';
import { Menu } from '../../shared/layout/Menu/Menu';
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
    <main>
      <HomePage menu={menu} firstCategory={firstCategory} />
    </main>
  )
}

//export default withLayout(Home);

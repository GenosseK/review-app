"use client"
import { useState, useEffect } from 'react';
import { Htag, Rating, Tag } from './components';
import { Button } from './components/Button/Button';
import { P } from './components/P/P';
import { withLayout } from './layout/Layout';
import axios from 'axios';
import { MenuItem } from './interfaces/menu.interface';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const firstCategory = 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: menuData } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
          firstCategory
        });
        setMenu(menuData);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <P size='l'>Большой</P>
      <P >Средний</P>
      <P size='s'>Маленький</P>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />

      <ul>
        {menu.map(m => (
          <li key={m._id.secondCategory}>
            {m._id.secondCategory}
          </li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

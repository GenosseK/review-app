"use client";
import { withLayout } from '../../shared/layout/withLayout';
import { Htag, P, Card, Input, Textarea } from '../../shared/components';
import styles from './styles.module.css';

function HomePage() {
  return (
    <main>
      <Card className={styles.card}>
        <Htag tag='h1'>
          Добро пожаловать в приложение Review-app!
        </Htag>
        <Htag tag='h3'>
          С помощью этого приложения Вы сможете выбрать и сравнить различные обучающие курс.
        </Htag>
        <P>
          Переходите в интересующий Вас раздел и ознакомьтесь с ценами и отзывами на различные предложения.
        </P>
        <P>
          Также Вы можете оставить отзыв о курсе, которым уже воспользовались.
        </P>
      </Card>
      <Input placeholder='тест' />
      <Textarea placeholder='тест area' />
    </main>
  );
}

export default withLayout(HomePage);

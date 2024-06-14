import { Htag, P } from '../../shared/components/index';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';

import { TopLevelCategory } from '../../interfaces/page.interface';

import { useEffect, useReducer } from 'react';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {


	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>

			</div>

			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
			</div>
			{firstCategory == TopLevelCategory.Courses}
			<>
				<Htag tag='h2'>Преимущства</Htag>
			</>
			{page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
			<Htag tag='h2'>Получаемые навыки</Htag>
		</div>
	);
};

import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { Htag, Tag, HhData, Advantages, P, Sort } from '../../shared/components';
import { TopPageComponentProps } from './TopPageComponent.props';
import { SortEnum } from '../../shared/components/Sort/Sort.props';
import { useEffect, useReducer } from 'react';
import { SortActions, sortReducer, SortReducerState } from './sort.reducer';
import { Product } from '../../shared/components/Product/Product';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
	const initialState: SortReducerState = {
		products: products ?? [],
		sort: SortEnum.Rating
	};

	const [{ products: sortedProducts, sort }, dispatchSort] = useReducer<React.Reducer<SortReducerState, SortActions>>(sortReducer, initialState);

	const setSort = (sort: SortEnum) => {
		dispatchSort({ type: sort });
	};

	useEffect(() => {
		if (products) {
			dispatchSort({ type: 'reset', initialState: products });
		}
	}, [products]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page?.title}</Htag>
				{products && <Tag color='grey' size='m' aria-label={products.length + ' элементов'}>{products.length}</Tag>}
				<Sort sort={sort} setSort={setSort} />
			</div>
			<div role='list'>
				{sortedProducts && sortedProducts.map(p => (<Product role='listitem' layout key={p._id} product={p} />))}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page?.category}</Htag>
				<Tag color='red' size='m'>hh.ru</Tag>
			</div>
			{firstCategory === TopLevelCategory.Courses && page?.hh && <HhData {...page.hh} />}
			{page?.advantages && page.advantages.length > 0 && <>
				<Htag tag='h2'>Преимущества</Htag>
				<Advantages advantages={page.advantages} />
			</>}
			{page?.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
			<Htag tag='h2'>Получаемые навыки</Htag>
			{page?.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
		</div>
	);
};

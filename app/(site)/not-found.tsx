'use client'
import React from 'react';
import { Htag } from '../../shared/components';
import { withLayout } from '../../shared/layout/withLayout';
import styles from './page.module.css'


export function Error404(): JSX.Element {
	return (
		<div className={styles.notFound}>
			<Htag tag='h1'>Ошибка 404</Htag>
		</div>
	);
}

export default withLayout(Error404);

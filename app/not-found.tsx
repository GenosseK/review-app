'use client';
import React from 'react';
import { Htag } from '../shared/components';
import { withLayout } from '../shared/layout/withLayout';


export function Error404(): JSX.Element {
	return (
		<>
			<Htag tag='h1'>Ошибка 404</Htag>
		</>
	);
}

export default withLayout(Error404);

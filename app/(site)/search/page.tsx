"use client"
import axios from 'axios';
import { GetStaticProps } from 'next';
import { MenuItem } from '../../../interfaces/menu.interface';
import { withLayout } from '../../../shared/layout/withLayout';

function Search(): JSX.Element {

	return (
		<>
			Search
		</>
	);
}

export default withLayout(Search);


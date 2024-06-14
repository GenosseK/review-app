// api/fetchData.js
import { getMenu } from '../api/menu';
import { getPage } from '../api/page';

export async function fetchPageData(alias) {
	const page = await getPage(alias);
	return page;
}

export async function fetchMenuData() {
	const menu = await getMenu(0);
	return menu;
}

"use client";
import { createContext, PropsWithChildren, useState } from "react";
import { MenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/page.interface";

export interface IAppContext {
	menu: MenuItem[];
	firstCategory: TopLevelCategory | null;
	setMenu?: (newMenu: MenuItem[]) => void;
	setFirstCategory?: (category: TopLevelCategory | null) => void;
}

export const AppContext = createContext<IAppContext>({
	menu: [],
	firstCategory: null,
});

export const AppContextProvider = ({
	menu,
	firstCategory: initialFirstCategory,
	children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
	const [menuState, setMenuState] = useState<MenuItem[]>(menu);
	const [firstCategory, setFirstCategory] = useState<TopLevelCategory | null>(initialFirstCategory);

	const setMenu = (newMenu: MenuItem[]) => {
		setMenuState(newMenu);
	};

	return (
		<AppContext.Provider value={{ menu: menuState, firstCategory, setMenu, setFirstCategory }}>
			{children}
		</AppContext.Provider>
	);
};

"use client";
import styles from "./Menu.module.css";
import cn from "classnames";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/app.context";
import {
	FirstLevelMenuItem,
	PageItem,
} from "../../../interfaces/menu.interface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { firstLevelMenu } from "../../../helpers/helpers";
import { motion } from "framer-motion";
import { KeyboardEvent } from 'react';
import { TopLevelCategory } from '../../../interfaces/page.interface';
import { useRouter } from 'next/navigation';

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory, setFirstCategory } = useContext(AppContext);
	const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();
	const pathname = usePathname();
	const router = useRouter();

	const variants = {
		visible: {
			marginBottom: 20,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.1,
			},
		},
		hidden: { marginBottom: 0 },
	};

	const variantsChildren = {
		visible: {
			opacity: 1,
			height: 29,
		},
		hidden: { opacity: 0, height: 0 },
	};

	useEffect(() => {
		if (firstCategory === null) {
			const currentFirstCategory = firstLevelMenu.find((m) => `/${m.route}` === pathname.split('/')[1]);
			if (currentFirstCategory) {
				setFirstCategory(currentFirstCategory.id);
			}
		}
	}, [pathname, firstCategory, setFirstCategory]);

	const openSecondLevel = (secondCategory: string) => {
		setMenu &&
			setMenu(
				menu.map((m) => {
					if (m._id.secondCategory == secondCategory) {
						setAnnounce(m.isOpened ? 'closed' : 'opened');
						m.isOpened = !m.isOpened;
					}
					return m;
				})
			);
	};

	const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
		if (key.code == "Space" || key.code == "Enter") {
			key.preventDefault();
			openSecondLevel(secondCategory);
		}
	};

	const handleFirstCategorySelect = (category: TopLevelCategory, route: string) => {
		setFirstCategory && setFirstCategory(category);
		setMenu && setMenu(menu.map(m => ({ ...m, isOpened: false })));  // Close all second-level menus
		router.push(route);
	};

	const buildFirstLevel = () => {
		return (
			<ul className={styles.firstLevelList}>
				{firstLevelMenu.map((m) => (
					<li key={m.route} aria-expanded={m.id == firstCategory}>
						<Link href={`/${m.route}`}>
							<div
								className={cn(styles.firstLevel, {
									[styles.firstLevelActive]: m.id == firstCategory,
								})}
								onClick={(e) => {
									e.preventDefault();
									handleFirstCategorySelect(m.id, `/${m.route}`);
								}}
							>
								{m.icon}
								<span>{m.name}</span>
							</div>
						</Link>
						{m.id == firstCategory && buildSecondLevel(m)}
					</li>
				))}
			</ul>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<ul className={styles.secondBlock}>
				{menu.map((m) => {
					if (m.pages.map((p) => p.alias).includes(pathname.split("/")[2])) {
						m.isOpened = true;
					}
					return (
						<li key={m._id.secondCategory}>
							<button
								onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)}
								className={styles.secondLevel}
								onClick={() => openSecondLevel(m._id.secondCategory)}
								aria-expanded={m.isOpened}
							>
								{m._id.secondCategory}
							</button>
							<motion.ul
								layout
								variants={variants}
								initial={m.isOpened ? 'visible' : 'hidden'}
								animate={m.isOpened ? 'visible' : 'hidden'}
								className={styles.secondLevelBlock}
							>
								{buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
							</motion.ul>
						</li>
					);
				})}
			</ul>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
		return pages.map((p) => (
			<motion.li key={p._id} variants={variantsChildren}>
				<Link href={`/${route}/${p.alias}`} key={p._id}>
					<div
						tabIndex={isOpened ? 0 : -1}
						className={cn(styles.thirdLevel, {
							[styles.thirdLevelActive]: `/${route}/${p.alias}` == pathname,
						})}
						aria-current={`/${route}/${p.alias}` == pathname ? 'page' : false}
					>
						{p.category}
					</div>
				</Link>
			</motion.li>
		));
	};

	return (
		<nav className={styles.menu} role="navigation">
			{announce && <span role="log" className="visuallyHidden">{announce == 'opened' ? 'развернуто' : 'свернуто'}</span>}
			{buildFirstLevel()}
		</nav>
	);
};

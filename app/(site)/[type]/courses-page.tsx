'use client'

import { MenuItem } from "../../../interfaces/menu.interface";
import { TopLevelCategory } from "../../../interfaces/page.interface";
import { withLayout } from "../../../shared/layout/withLayout";

interface CoursesPagePageProps extends Record<string, unknown> {
    menu?: MenuItem[];
    firstCategory?: TopLevelCategory;
}

async function  CoursesPage({menu}: CoursesPagePageProps) {
    return (
        <>
        CoursesPage
        {menu && menu.length}
        </>
    )
    
}

export default withLayout(CoursesPage);

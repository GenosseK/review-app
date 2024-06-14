"use client";
import { withLayout } from '../../../../shared/layout/withLayout';
import { TopPageComponent } from '../../../../page-components/TopPageComponent/TopPageComponent';
import {
  type MenuItem,
} from '../../../../interfaces/menu.interface';
import {
  type TopPageModel,
  TopLevelCategory,
} from '../../../../interfaces/page.interface';
import { ProductModel } from '../../../../interfaces/product.interface'


interface CoursePageProps extends Record<string, unknown> {
  menu?: MenuItem[];
  firstCategory?: TopLevelCategory;
  page?: TopPageModel;
  products?: ProductModel[];
}

async function CoursePage({ firstCategory, page, products }: CoursePageProps) {
  return (
    <TopPageComponent
      firstCategory={firstCategory}
      page={page}
      products={products}
    />
  );
}

export default withLayout(CoursePage);




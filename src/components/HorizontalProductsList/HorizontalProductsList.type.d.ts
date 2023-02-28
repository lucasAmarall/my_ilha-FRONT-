type IHorizontalProductsListProps = {
  title: string;
  onSeeAll: () => void;
  size?: 'small' | 'medium' | 'large';
  products: TProduct[];
};

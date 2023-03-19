import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/products';

function ProductList() {
  const query = useQuery({ queryKey: ['products'], queryFn: getProducts });

  return (
    <>
      <section className="my-2">
        <pre className="whitespace-pre-wrap">{JSON.stringify(query.data, undefined, 2)}</pre>
      </section>
    </>
  );
}

export default ProductList;

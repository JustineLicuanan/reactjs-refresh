import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/products';
import ProductCard from './ProductCard';

function ProductList() {
  const query = useQuery({ queryKey: ['products'], queryFn: getProducts });

  if (query.isLoading) return <h2 className="text-center text-2xl">Loading...</h2>;

  if (query.isError)
    return (
      <>
        <h2 className="text-center text-2xl">Error:</h2>
        <pre className="whitespace-pre-wrap">{JSON.stringify(query.error, undefined, 2)}</pre>
      </>
    );

  return (
    <>
      <section className="my-2 flex flex-wrap items-start justify-center gap-2">
        {query.data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}

export default ProductList;

import ProductList from '../components/ProductList';

function IndexPage() {
  return (
    <>
      <main className="p-2">
        <h1 className="mt-8 mb-2 text-center text-3xl">Products</h1>
        <ProductList />
      </main>
    </>
  );
}

export default IndexPage;

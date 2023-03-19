import ProductList from '../components/ProductList';

function IndexPage() {
  return (
    <>
      <main className="p-2">
        <h1 className="my-2 text-3xl">Products</h1>
        <ProductList />
      </main>
    </>
  );
}

export default IndexPage;

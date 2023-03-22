import { Product } from '../api/products';

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  return (
    <div className="py-6">
      <div className="flex max-w-md overflow-hidden rounded-lg bg-white shadow-lg">
        <div
          className="w-1/3 bg-cover"
          style={{
            backgroundImage: `url(${product.image})`,
          }}
        ></div>
        <div className="w-2/3 p-4">
          <h1 className="text-2xl font-bold text-gray-900">
            {product.title.length > 15 ? `${product.title.slice(0, 15)}...` : product.title}
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            {product.description.length > 80
              ? `${product.description.slice(0, 80)}...`
              : product.description}
          </p>
          <div className="item-center mt-2 flex">
            {[...Array(5)].map((_, idx) => (
              <svg
                key={idx + 1}
                className={`h-5 w-5 fill-current text-gray-${
                  idx < Math.round(product.rating.rate) ? '700' : '500'
                }`}
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            ))}
          </div>
          <div className="item-center mt-3 flex justify-between">
            <h1 className="text-xl font-bold text-gray-700">${product.price}</h1>
            <button className="rounded bg-gray-800 px-3 py-2 text-xs font-bold uppercase text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

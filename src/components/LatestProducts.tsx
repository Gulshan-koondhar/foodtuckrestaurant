import Image from "next/image";
import image from "../../public/product6.png";

export default function LatestProducts() {
  // Static data for the products and tags
  const products = [
    { id: 1, name: "Pizza", price: "$35.00", image: image, rating: 2 },
    {
      id: 2,
      name: "Cupcake",
      price: "$35.00",
      image: image,
      rating: 4,
    },
    {
      id: 3,
      name: "Cookies",
      price: "$35.00",
      image: image,
      rating: 3,
    },
    { id: 4, name: "Burger", price: "$35.00", image: image, rating: 1 },
  ];

  const tags = [
    "Services",
    "Our Menu",
    "Pizza",
    "Cupcake",
    "Burger",
    "Cookies",
    "Our Shop",
    "Tandoori Chicken",
  ];

  return (
    <div className="p-4 max-w-md mx-auto">
      {/* Latest Products Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Latest Products</h2>
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.id} className="flex items-center space-x-4">
              <Image
                src={product.image}
                alt={product.name}
                width={60}
                height={60}
                className="rounded"
              />
              <div>
                <h3 className="text-sm font-medium">{product.name}</h3>
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`${
                        index < product.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">{product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Tags Section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Product Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

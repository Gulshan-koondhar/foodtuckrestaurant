import Card from "@/components/Card";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { IProduct } from "@/components/Products";
import { client } from "@/sanity/lib/client";
import banner from "@/../public/unsplash_4ycv3Ky1ZZU.png";
import Link from "next/link";

// Define the correct type for dynamic route params
interface PageProps {
  params: {
    name: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { name } = await params; // Extract the 'name' from params correctly

  try {
    // Fetch products from Sanity using the name parameter
    const products: IProduct[] = await client.fetch(
      `*[_type == "food" && name match $name]{
        name, description, category, price, originalPrice,
        "currentSlug": slug.current,
        "imageUrl": image.asset->url
      }`,
      { name } // Pass query safely using variables
    );

    return (
      <main>
        <section className="max-w-screen-xl mx-auto">
          <Header />
          <Hero image={banner} heading="Search" path="search" />
          <h1 className="text-2xl font-bold mt-5">
            Search Results for: {name}
          </h1>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {products.map((product) => (
                <Link
                  href={`/shop/${product.currentSlug}`}
                  key={product.currentSlug}
                >
                  <Card
                    dprice={product.originalPrice}
                    image={product.imageUrl}
                    name={product.name}
                    aprice={product.price}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 mt-4">No products found.</p>
          )}
        </section>
      </main>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <p className="text-red-500">Error fetching products.</p>;
  }
}

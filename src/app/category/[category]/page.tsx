import Card from "@/components/Card";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { IProduct } from "@/components/Products";
import { client } from "@/sanity/lib/client";
import banner from "@/../public/unsplash_4ycv3Ky1ZZU.png";
import Link from "next/link";

// Corrected function signature
export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params; // Get name from params

  // Fetch search results from Sanity using query with variable
  const products: IProduct[] = await client.fetch(
    `*[_type == "food" && category == "${category}"]{
      name, description, category, price, originalPrice,
      "currentSlug": slug.current,
      "imageUrl": image.asset->url
    }` // Safe way to pass query variable
  );

  return (
    <main>
      <section className="max-w-screen-xl mx-auto">
        <Header />
        <Hero image={banner} heading={category} path={category} />
        <h1 className="text-2xl font-bold mt-5">Category: {category}</h1>
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
}

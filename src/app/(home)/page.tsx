import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/constants/products";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="py-5 mb-4 px-6 h-4/5 mt-5">
        <h1 className="font-extrabold text-4xl mb-4">
          Small Premiums, Big Protection
        </h1>
        <p className="mb-4">
          Our microinsurance solutions are designed to empower you for a secure
          tomorrow. Explore seamless protection with affordable plans tailored
          to your needs. Join us in building a future where financial security
          knows no boundaries.
        </p>
        <Link href="/signup">
          <Button size="lg">Get started</Button>
        </Link>
      </section>
      <section className="bg-primary px-6 py-6 text-white">
        <h2 className="text-2xl font-semibold mb-4">
          Incredible Prices & Discounts
        </h2>
        <p className="mb-7">
          Get amazing price discounts when adding more than one product to your
          package!
        </p>
        <div className="grid grid-cols-2 gap-3">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
}

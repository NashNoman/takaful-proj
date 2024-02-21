import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/constants/products";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="py-5 mb-4 px-6 h-4/5 mt-5">
        <h1 className="font-extrabold text-[2.5rem] leading-[3rem] mb-4 tracking-wider">
          Small Premiums, Big <span className="text-primary">Protection!</span>
        </h1>
        <p className="mb-4">
          Our microinsurance solutions are designed to empower you for a secure
          tomorrow. Explore seamless protection with affordable plans tailored
          to your needs. Join us in building a future where financial security
          knows no boundaries.
        </p>
        <Link href="/signup">
          <Button>Get started</Button>
        </Link>
        <Image
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Takaful"
          width={500}
          height={500}
          className="rounded-md mt-9 shadow-md"
        />
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

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="pt-20">
        <h1 className="font-extrabold text-4xl mb-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h1>
        <Link
          href="/signup"
          className="py-3 px-6 bg-gray-600 rounded-md shadow-md text-white hover:bg-gray-700"
        >
          Get started
        </Link>
      </section>
    </main>
  );
}

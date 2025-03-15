import React from "react";
import { Star } from "lucide-react";

const Page = () => {
  return (
    <article className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
      <header>
        <Star className="w-16 h-16 mx-auto mb-8 text-[var(--primary)]" />
        <h1 className="text-7xl font-bold bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] text-transparent bg-clip-text mb-8">
          Juan Jose Burbano
        </h1>
      </header>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"></section>
    </article>
  );
};

export default Page;

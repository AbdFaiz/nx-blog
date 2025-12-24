import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from '@/components/Hero';
import Featured from "@/components/Featured";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <div className="min-h-screen bg-background ">
      <main>
        <Hero />
        <Featured />
        <Categories />
      </main>
    </div>
  );
}

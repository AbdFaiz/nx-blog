import Hero from '@/components/Hero';
import Featured from "@/components/Featured";
import Categories from "@/components/Categories";
import Quotes from "@/components/Quotes";

export default function Home() {
  return (
    <div className="min-h-screen bg-background ">
      <main>
        <Hero />
        <Featured />
        <Categories />
        <Quotes />
      </main>
    </div>
  );
}

import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from '@/components/Hero'
import Team from "@/components/Team";


export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero />
      <About />
      <Team />
      <Footer />
    </main>
  )
}

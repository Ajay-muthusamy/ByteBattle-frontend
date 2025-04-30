import Hero from "./components/main/hero";
import Navbar from "./components/main/navbar";
import Homecontent from "./components/main/homecontent";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Homecontent />
    </div>
  );
}

import About from "@/components/about";
import Footer from "@/components/footer";
import Personal from "@/components/personal";
import Project from "@/components/project";
import Services from "@/components/services";


export default function Home() {
  return (
    <>
      <Personal />
      <About />
      <Services />
      <Project />
      <Footer />
    </>
  );
}

import JsonLd from "../src/components/JsonLd";
import { buildMetadata, seoConfig } from "../src/lib/seo";
import Navbar from "../src/components/navbar";
import Hero from '../src/components/hero';
import About from '../src/components/about';
import Skills from '../src/components/skills';
import Projects from '../src/components/projects';
import Resume from '../src/components/resume';
import Contact from '../src/components/contact';
import SectionWrapper from "../src/components/sectionWrapper";

export const metadata = buildMetadata("home");

function App() {

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rushikesh Kadepurkar",
    url: seoConfig.site.url,
    sameAs: [
      "https://github.com/RushiK8626",
      "https://www.linkedin.com/in/rushikesh-kadepurkar-9a9006292",
    ],
    jobTitle: "Software Builder",
    description:
      "Full-stack developer specializing in real-time web applications and networking solutions",
    email: "rushikeshk2005@gmail.com",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rushikesh Kadepurkar Portfolio",
    url: seoConfig.site.url,
    author: personSchema,
  };

  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={websiteSchema} />
      <Navbar />
      <main
        className="
    h-screen
    overflow-y-auto
    snap-y
    snap-proximity
    scroll-smooth
    overscroll-none
  "
      >
        <section className="min-h-screen snap-center flex items-center">
          <SectionWrapper variant="hero">
            <Hero />
          </SectionWrapper>
        </section>

        <section className="min-h-screen snap-center flex items-center">
          <SectionWrapper variant="about">
            <About />
          </SectionWrapper>
        </section>

        <section className="min-h-screen snap-center flex items-center">
          <SectionWrapper variant="skills">
            <Skills />
          </SectionWrapper>
        </section>

        <section className="min-h-screen snap-start flex items-start py-16">
          <SectionWrapper variant="projects">
            <Projects />
          </SectionWrapper>
        </section>

        <section className="min-h-screen snap-center flex items-center">
          <SectionWrapper variant="resume">
            <Resume />
          </SectionWrapper>
        </section>

        <section className="min-h-screen snap-center flex items-center">
          <SectionWrapper variant="contact">
            <Contact />
          </SectionWrapper>
        </section>
      </main>
    </>
  );
}

export default App;
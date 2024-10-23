import type { NextPage } from "next";
import Head from "next/head";
import Projects from "../ui/sections/projects";
import Hero from "../ui/sections/hero";
import KampNearMe from "../sections/KampNearMe";
import BetterBCAssessment from "../sections/BetterBCAssessment";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>0x Code Limited</title>
        <meta
          name="description"
          content="Official website of 0x Code Limited company"
        />
      </Head>
      <main>
        <Hero />

        <Projects
          title="Better BC Assessment"
          description={<BetterBCAssessment />}
          imageUrl="/better-bc-assessment.png"
          imageAlt="Better BC Assessment mobile project screen shot"
          url="/better-bc-assessment"
        />
        <Projects
          title="Kampnearme.com"
          description={<KampNearMe />}
          imageUrl="/kampnearme.jpg"
          imageAlt="Kampnearme.com project screen shot"
        />
      </main>
    </div>
  );
};

export default Home;

import AboutAreaOne from "@/components/AboutAreaOne";
import BannerFive from "@/components/BannerFive";
import CaseStudyAreaOne from "@/components/CaseStudyAreaOne";
import FaqAreaTwo from "@/components/FaqAreaTwo";
import ProjectAreaOne from "@/components/ProjectAreaOne";
import ServiceAreaFour from "@/components/ServiceAreaFour";
import WorkingProcessSection from "@/components/WorkingProcessSection";

export const metadata = {
  title: "Home || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};

const page = () => {
  return (
    <div>
      {/* Navigation Bar */}

      {/* Banner One */}
      <BannerFive />

      {/* About Area One */}

      {/* Service Area One */}
      <ServiceAreaFour />

      {/* FAQ Area One */}
      {/* <FaqAreaTwo /> */}

      {/* Case Study Area One */}
      <CaseStudyAreaOne />

      {/* Team Area One */}
      {/* <LatestServicesSection /> */}

      <ProjectAreaOne />
      <WorkingProcessSection />
      <AboutAreaOne />

      {/* Counter Area One */}
      {/* <CounterAreaOne /> */}

      {/* Contact Area One */}
      {/* <ContactAreaOne /> */}

      {/* Work Process One */}
      {/* <WorkProcessOne /> */}

      {/* Pricing Area One */}
      {/* <PricingAreaOne /> */}

      {/* Blog Area One */}
      {/* <BlogAreaOne /> */}

      {/* Footer One */}
    </div>
  );
};

export default page;

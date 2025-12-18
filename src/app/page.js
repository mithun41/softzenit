import AboutAreaOne from "@/components/AboutAreaOne";
import BannerFive from "@/components/BannerFive";
import CaseStudyAreaOne from "@/components/CaseStudyAreaOne";
import Partner from "@/components/Partner";
import ProjectAreaOne from "@/components/ProjectAreaOne";
import ServiceAreaFour from "@/components/ServiceAreaFour";
import WorkingProcessSection from "@/components/WorkingProcessSection";

export const metadata = {
  title: "Home || Softzen IT ",
  description: "Green Wings Smart IT Solutions and Technology Services",
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
      <Partner />

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

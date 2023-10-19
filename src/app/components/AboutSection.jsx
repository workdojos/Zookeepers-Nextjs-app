"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Hive Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Animal handling</li>
        <li>Veterinary medicine</li>
        <li>Wildlife management</li>
        <li>Animal nutrition</li>
        <li>Biology</li>
        <li>Animal behavior</li>
        <li>Animal husbandry</li>
        <li>Health monitoring</li>
        <li>Conservation</li>
        <li>Zoo maintenance</li>
        <li>Animal training</li>
        <li>First Aid</li>
        <li>Environmental enrichment</li>
        <li>Research techniques</li>
        <li>Record-keeping</li>
      </ul>
    ),
  
    
  
  },
  {
    title: "Hive Companies",
    id: "companies",
    content: (
      <ul className="list-disc pl-2">
        <li>San Diego Zoo Global</li>
        <li>Wildlife Conservation Society (WCS)</li>
        <li>Smithsonian National Zoo</li>
        <li>Australia Zoo</li>
        <li>Chester Zoo</li>
        <li>Cincinnati Zoo & Botanical Garden</li>
        <li>Singapore Zoo</li>
        <li>Disney Animal Kingdom</li>
        <li>Henry Doorly Zoo</li>
        <li>Oregon Zoo</li>
      </ul>
    ),
  },
  {
    title: "Hive Features",
    id: "features",
    content: (
      <ul className="list-disc pl-2">
        <li>Job Scraping</li>
        <li>Job Auto-Applying</li>
        <li>AI Cover Letter Generation</li>
        <li>AI Content Creation</li>
        <li>Self-Hosted Hive Cloud</li>
        <li>Hive Social</li>
        <li>Hive Blog</li>
        <li>Hive Automation</li>
        <li>Hive Chat</li>
        <li>Industry & Insights</li>
        <li>Templates</li>
        <li>Community Collaboration</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image style={{ borderRadius: 16}}src="/images/zookeeper.png" width={500} height={500}   />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About the Hive</h2>
          <p className="text-base lg:text-lg">
            Join the world`s first self-hosted hiring hive built for zookeepers.  Scrape jobs discretely, auto-apply to select companies every month, collaborate with others to build things with open-source technology.
          <br></br>
          <br></br>
          </p>


          <p className="text-base lg:text-lg">
            Zookeepers care for animals in captivity, ensuring their well-being through tasks like feeding, cleaning enclosures, and providing enrichment. They monitor behavior, administer medical care, and contribute to conservation efforts. Beyond daily care, zookeepers engage in public education, sharing knowledge about wildlife and conservation with visitors. Passion for animals, adaptability, and a commitment to conservation are crucial aspects of this rewarding but challenging profession.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Hive Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("companies")}
              active={tab === "companies"}
            >
              {" "}
              Hive Companies{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("features")}
              active={tab === "features"}
            >
              {" "}
              Hive Features{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

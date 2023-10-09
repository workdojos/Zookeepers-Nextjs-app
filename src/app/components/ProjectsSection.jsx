"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "1. Association of Zoos and Aquariums (AZA) - The official website of AZA provides a wide range of resources, including training programs, publications, and job listings, to help aspiring zookeepers improve their skills and stay updated with industry trends.",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://www.aza.org/",
    previewUrl: "https://portfolio.admins.live/images/projects/1.jpg",
  },
  {
    id: 2,
    title: "Virtual Tour Website",
    description: "2. International Marine Animal Trainers Association (IMATA) - IMATA offers resources specifically for those interested in animal training. Their website provides access to publications, training techniques, and networking opportunities.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web", "Travel", "Wordpress"],
    gitUrl: "https://www.imata.org/",
    previewUrl: "https://portfolio.admins.live/images/projects/2.png",
  },
  {
    id: 3,
    title: "Open-source Dashboards",
    description: "3. American Association of Zoo Keepers (AAZK) - AAZK offers professional development opportunities, including conferences, workshops, and certifications, to help zookeepers enhance their skills in various areas, such as animal behavior and husbandry.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://aazk.org/",
    previewUrl: "https://portfolio.admins.live/images/projects/3.png",
  },
  {
    id: 4,
    title: "Workmates.Live Hiring Hives",
    description: "4. Wildlife Conservation Society (WCS) - The WCS website provides valuable information on wildlife management and conservation. Additionally, they offer training courses and job opportunities for those interested in working in this field.",
    image: "/images/projects/4.jpg",
    tag: ["All", "Web", "Wordpress"],
    gitUrl: "https://www.wcs.org/",
    previewUrl: "https://portfolio.admins.live/images/projects/4.png",
  },
  {
    id: 5,
    title: "Microsoft:  Hardware-as-a-Service",
    description: "5. ZooBiology - This online resource features numerous articles, webinars, and forums focused on various aspects of zookeeping, including animal nutrition, veterinary medicine, and environmental enrichment.",
    image: "images/projects/5.jpg",
    tag: ["All", "Retail", "SaaS", "HaaS"],
    gitUrl: "https://onlinelibrary.wiley.com/journal/10982361",
    previewUrl: "https://portfolio.admins.live/images/projects/5.png",
  },
  {
    id: 6,
    title: "FedEx:  Largest Digital Transformation to Date",
    description: "6. Zoo and Aquarium Association (ZAA) - ZAA offers educational programs, workshops, and networking events for zookeepers interested in learning about different species and advancing their career in the industry.",
    image: "/images/projects/6.jpg",
    tag: ["All", "Agile"],
    gitUrl: "https://www.zooaquarium.org.au/",
    previewUrl: "https://portfolio.admins.live/images/projects/6.png",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Resources
      </h2>
      <div className="text-white flex flex-flow justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="HaaS"
          isSelected={tag === "HaaS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="SaaS"
          isSelected={tag === "SaaS"}
        />

      </div>
      <div className="text-white flex flex-flow justify-center items-center gap-2 pb-16">
        <ProjectTag
          onClick={handleTagChange}
          name="Retail"
          isSelected={tag === "Retail"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Wordpress"
          isSelected={tag === "Wordpress"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Travel"
          isSelected={tag === "Travel"}
        />

      </div>    
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>

  );
};

export default ProjectsSection;

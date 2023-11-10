import { SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import portfolioContent from "../content/portfolioContent";

const ProjectGrid = () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" spacing={6}>
      {portfolioContent.map((project) => (
        <ProjectCard project={project} />
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid;

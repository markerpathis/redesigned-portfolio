import { SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import portfolioContent from "../content/portfolioContent";

interface Props {
  colorMode: string;
}

const ProjectGrid = ({ colorMode }: Props) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3, "2xl": 3 }} spacing={10}>
      {portfolioContent.map((project) => (
        <ProjectCard project={project} colorMode={colorMode} />
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid;

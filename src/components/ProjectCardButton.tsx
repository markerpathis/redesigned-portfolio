import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  colorMode: string;
  children: ReactNode;
}

const ProjectCardButtons = ({ colorMode, children }: Props) => {
  let color1 = "#68A2B8";
  let color2 = "#9AD8D9";
  let color3 = "#68A2B8";
  let color4 = "#68A2B8";
  let fontColor = "white";

  colorMode === "dark"
    ? ((color1 = "#68A2B8"), (color2 = "#9AD8D9"), (color3 = "#68A2B8"), (color4 = "#68A2B8"), (fontColor = "black"))
    : ((color1 = "#011528"), (color2 = "#365363"), (color3 = "#011528"), (color4 = "#68A2B8"), (fontColor = "white"));

  const gradient = "linear(to-l, " + color1 + ", " + color2 + ")";
  const gradientHover = "linear(to-l, " + color3 + ", " + color4 + ")";

  return (
    <>
      <Button
        size="sm"
        color={fontColor}
        fontWeight="normal"
        bgGradient={gradient}
        _hover={{
          bgGradient: gradientHover,
        }}
      >
        {children}
      </Button>
    </>
  );
};

export default ProjectCardButtons;

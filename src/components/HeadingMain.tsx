import { ReactNode } from "react";
import { Heading } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  colorMode: string;
}

const HeadingMain = ({ children, colorMode }: Props) => {
  let color1 = "#68A2B8";
  let color2 = "#00D9F5";

  colorMode === "dark" ? ((color1 = "#9AD8D9"), (color2 = "#68A2B8")) : ((color1 = "#68A2B8"), (color2 = "#011528"));

  const gradient = "linear(to-l, " + color1 + ", " + color2 + ")";
  return (
    <Heading as="h1" fontSize="5xl" fontWeight="bold" bgGradient={gradient} bgClip="text">
      {children}
    </Heading>
  );
};

export default HeadingMain;

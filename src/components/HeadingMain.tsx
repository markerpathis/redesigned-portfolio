import { ReactNode } from "react";
import { Heading } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  colorMode: string;
}

const HeadingMain = ({ children, colorMode }: Props) => {
  let color1 = "#00F5A0";
  let color2 = "#00D9F5";

  colorMode === "dark" ? ((color1 = "#00F5A0"), (color2 = "#00D9F5")) : ((color1 = "#00B877"), (color2 = "#00A2B8"));

  const gradient = "linear(to-l, " + color1 + ", " + color2 + ")";
  return (
    <Heading as="h1" fontSize="5xl" fontWeight="bold" bgGradient={gradient} bgClip="text">
      {children}
    </Heading>
  );
};

export default HeadingMain;

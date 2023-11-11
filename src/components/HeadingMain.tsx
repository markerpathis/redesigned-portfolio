import { Heading } from "@chakra-ui/react";

const HeadingMain = () => {
  const heading = "Hey there! I'm Parker.";

  return (
    <Heading as="h1" fontSize="5xl" bgGradient="linear(to-l, #00F5A0, #00D9F5)" bgClip="text">
      {heading}
    </Heading>
  );
};

export default HeadingMain;

import { Heading } from "@chakra-ui/react";

const HeadingMain = () => {
  const heading = "Hey there! I'm Parker.";

  return (
    <Heading as="h1" fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default HeadingMain;

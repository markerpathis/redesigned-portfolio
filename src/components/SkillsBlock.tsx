import { HStack, Text } from "@chakra-ui/react";
import GradientSideBar from "./GradientSideBar";

interface Props {
  colorMode: string;
}

const SkillsBlock = ({ colorMode }: Props) => {
  const content = "HTML, CSS, JavaScript, Express.js, React, Node.js, MongoDB, MySQL, Git, jQuery, Bootstrap, Tailwind, MUI, Chakra UI";

  return (
    <>
      <HStack w="full">
        <GradientSideBar colorMode={colorMode} height="100px" minheight="100px" />
        <Text>{content}</Text>
      </HStack>
    </>
  );
};

export default SkillsBlock;

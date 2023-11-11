import { HStack, Text, Box } from "@chakra-ui/react";

const SkillsBlock = () => {
  const content = "HTML, CSS, JavaScript, Express.js, React, Node.js, MongoDB, MySQL, Git, jQuery, Bootstrap, Tailwind, MUI, Chakra UI";

  return (
    <>
      <HStack>
        <Box w={1} h="100px" bgGradient="linear(to-r, #00F5A0, #00D9F5)" />
        <Text>{content}</Text>
      </HStack>
    </>
  );
};

export default SkillsBlock;

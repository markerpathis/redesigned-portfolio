import { Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import GradientSideBar from "./GradientSideBar";

interface Props {
  colorMode: string;
}

const ContactBlock = ({ colorMode }: Props) => {
  const content = "Thank you for taking the time to check out my portfolio! My contact details are included below as well as links to my LinkedIn and GitHub pages.";
  const email = "parkerjmathis@gmail.com";
  const phone = "+1 (425) 418-2121";

  return (
    <>
      <Flex justifyContent="flex-start">
        <HStack>
          <GradientSideBar colorMode={colorMode} height="full" minheight="150px" />
          <VStack align="stretch">
            <Text>{content}</Text>
            <Text>{email}</Text>
            <Text>{phone}</Text>
          </VStack>
        </HStack>
      </Flex>
    </>
  );
};

export default ContactBlock;

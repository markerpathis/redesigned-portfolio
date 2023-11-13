import { Flex, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import GradientSideBar from "./GradientSideBar";
import LinkedInDark from "../assets/In-Blue-96.png";
import LinkedInWhite from "../assets/In-White-96.png";
import GitHubDark from "../assets/github-mark.svg";
import GitHubLight from "../assets/github-mark-white.svg";

interface Props {
  colorMode: string;
}

const ContactBlock = ({ colorMode }: Props) => {
  const content = "Thank you for taking the time to check out my portfolio! My contact details are included below as well as links to my LinkedIn and GitHub pages.";
  const email = "parkerjmathis@gmail.com";
  const phone = "+1 (425) 418-2121";

  let LinkedInLogo = LinkedInWhite;
  colorMode === "dark" ? (LinkedInLogo = LinkedInWhite) : (LinkedInLogo = LinkedInDark);
  let GitHubLogo = GitHubLight;
  colorMode === "dark" ? (GitHubLogo = GitHubLight) : (GitHubLogo = GitHubDark);

  return (
    <>
      <Flex justifyContent="flex-start">
        <HStack>
          <GradientSideBar colorMode={colorMode} height="full" minheight="220px" />
          <VStack align="stretch">
            <Text>{content}</Text>
            <Text>{email}</Text>
            <Text>{phone}</Text>
            <HStack paddingTop={3} spacing={4}>
              <Link href="https://www.linkedin.com/in/parker-mathis/" target="_blank" rel="noreferrer">
                <Image h="40px" src={LinkedInLogo} />
              </Link>
              <Link href="https://github.com/markerpathis" target="_blank" rel="noreferrer">
                <Image h="40px" src={GitHubLogo} />
              </Link>
            </HStack>
          </VStack>
        </HStack>
      </Flex>
    </>
  );
};

export default ContactBlock;

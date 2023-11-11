import { HStack, VStack, Text, Image } from "@chakra-ui/react";
import ParkerPicture from "../assets/parkerImage.png";
import HeadingMain from "./HeadingMain";

interface Props {
  colorMode: string;
}

const IntroBlock = ({ colorMode }: Props) => {
  const textGreeting = "Hey there! I'm Parker.";

  const textIntro =
    "I'm a recent coding bootcamp grad, seeking a career as a full-stack developer. The coding bootcamp I completed was through the University of Washington (September 2022 - March 2023). Check out the portfolio below.";

  const textAbout = "I live on Camano Island, WA, with my wife (Joanna) and dog (Bruno). I love hockey (go Kraken!), biking, cooking/bbqing, video games, and board games.";

  return (
    <>
      <HStack spacing={10}>
        <VStack boxSize="60%" alignItems="start">
          <HeadingMain colorMode={colorMode}>{textGreeting}</HeadingMain>

          <Text>{textIntro}</Text>
          <Text>{textAbout}</Text>
        </VStack>
        <Image boxSize="300px" borderRadius={230} border="9px solid " borderColor="#00F5A0" src={ParkerPicture} />
      </HStack>
    </>
  );
};

// 00A2B8

// 00B877

export default IntroBlock;

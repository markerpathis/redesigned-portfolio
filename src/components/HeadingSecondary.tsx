import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const HeadingSecondary = ({ children }: Props) => {
  return (
    <Heading as="h2" fontSize="2xl" paddingTop={2}>
      {children}
    </Heading>
  );
};

export default HeadingSecondary;

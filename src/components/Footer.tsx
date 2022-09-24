import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { ReactNode } from "react";

type footerType = {
  marginTop: string;
};

const Logo = (props: any) => {
  return (
    <img
      width={50}
      height={52}
      alt={"House img"}
      src={require("/Users/turkialqahtani/Desktop/WebDev/house-market/src/assets/icons8-treehouse-40.png")}
    />
  );
};

const SocialButton = ({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer({ marginTop }: footerType) {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      position={"relative"}
      marginTop={marginTop}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Text>© Turki-Alqahtani</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"}>
            <Link href={"#"} target="_blank">
              <FaTwitter />
            </Link>
          </SocialButton>
          <SocialButton label={"Github"}>
            <Link href={"https://github.com/Turkialq"} target="_blank">
              <FaGithub />
            </Link>
          </SocialButton>
          <SocialButton label={"Linkdin"}>
            <Link
              href={
                "https://www.linkedin.com/in/eng-turki-al-qahtani-776321227/"
              }
              target="_blank"
            >
              {" "}
              <FaLinkedin />
            </Link>
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}

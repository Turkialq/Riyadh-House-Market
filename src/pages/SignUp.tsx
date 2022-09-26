import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Footer from "../components/Footer";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Submit = (e: React.FormEvent) => {
    const user = {};
  };

  return (
    <React.Fragment>
      <Flex minH={"100vh"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              انشاء حساب
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4} as="form" onSubmit={(e): any => Submit(e)}>
              <HStack>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel textAlign={"right"}>الاسم العايئله</FormLabel>
                    <Input
                      textAlign={"right"}
                      type="text"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="firstName">
                    <FormLabel textAlign={"right"}>اسم الاول</FormLabel>
                    <Input
                      textAlign={"right"}
                      type="text"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel textAlign={"right"}>البريد الاكتروني</FormLabel>
                <Input
                  textAlign={"right"}
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel textAlign={"right"}>كلمة السر</FormLabel>
                <InputGroup>
                  <Input
                    textAlign={"right"}
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"green.500"}
                  color={"white"}
                  _hover={{
                    bg: "green.300",
                  }}
                >
                  انشاء حساب
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  لديك حساب ؟ <Link color={"green.400"}>تسجيل الدخول</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer marginTop={"-10%"} />
    </React.Fragment>
  );
}

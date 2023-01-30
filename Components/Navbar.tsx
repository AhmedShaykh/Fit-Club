"use client";
import { FC } from "react";
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Button,
    useDisclosure,
    Stack,
    Image,
} from "@chakra-ui/react";
import {
    HamburgerIcon,
    CloseIcon,
} from "@chakra-ui/icons";

const Navbar: FC = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                zIndex={20}
                right={0}
                left={0}
                boxShadow="md"
                position={"fixed"}
                top={0}
                bg="teal"
                px={4}
            >
                <Flex h={"100px"} alignItems={"center"} justifyContent={"space-between"}>
                    <HStack spacing={2} alignItems={"center"}>
                        <Flex
                            rounded="md"
                            justify={"center"}
                            zIndex={10}
                            display={{ base: "center", md: "flex", lg: "flex" }}
                            align={"center"}
                        >
                            <Link href="/">
                                <Image
                                    src={
                                        "./Logo.png"
                                    }
                                    alt="logo"
                                    height={90}
                                    width={90}
                                />
                            </Link>
                        </Flex>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex" }}
                        >
                            <Link
                                px={2}
                                py={1}
                                rounded={"md"}
                                color="#EFEFEF"
                                fontWeight="semibold"
                                transition="0.25s ease"
                                _hover={{
                                    textDecoration: "none",
                                    transition: "0.25s ease",
                                    color: "gray.700",
                                }}
                            >
                                About
                            </Link>
                            <Link
                                px={2}
                                py={1}
                                rounded={"md"}
                                color="#EFEFEF"
                                fontWeight="semibold"
                                transition="0.25s ease"
                                _hover={{
                                    textDecoration: "none",
                                    transition: "0.25s ease",
                                    color: "gray.700",
                                }}
                            >
                                Courses
                            </Link>
                            <Link
                                px={2}
                                py={1}
                                rounded={"md"}
                                color="#EFEFEF"
                                fontWeight="semibold"
                                transition="0.25s ease"
                                _hover={{
                                    textDecoration: "none",
                                    transition: "0.25s ease",
                                    color: "gray.700",
                                }}
                                href="https://www.piaic.org/"
                            >
                                PIAIC
                            </Link>
                        </HStack>
                    </HStack>
                    <Flex alignItems={"center"} display={{ base: "none", md: "flex" }}>
                        <Link
                            _hover={{
                                textDecoration: "none",
                            }}
                            href="https://portal.piaic.org/"
                        >
                            <Button
                                variant={"solid"}
                                bg="teal"
                                color={"gray.50"}
                                _hover={{
                                    textDecoration: "none",
                                    bg: "cyan.900",
                                }}
                                size={"sm"}
                                py={5}
                                px={4}
                                mr={4}
                            >
                                Apply
                            </Button>
                        </Link>
                    </Flex>
                    <IconButton
                        color={"grey.700"}
                        size={"lg"}
                        _hover={{
                            textDecoration: "none",
                            bg: "cyan.900",
                        }}
                        variant="ghost"
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                </Flex>

                {isOpen ? (
                    <Box
                        pb={8}
                        display={{ md: "none" }}
                    >
                        <Stack
                            as={"nav"}
                            spacing={8}
                        >
                            <Link
                                px={2}
                                py={1}
                                rounded={"md"}
                                color="#EFEFEF"
                                fontWeight="semibold"
                                transition="0.25s ease"
                                _hover={{
                                    textDecoration: "none",
                                    transition: "0.25s ease",
                                    color: "gray.700",
                                }}
                            >
                                About
                            </Link>
                            <Link
                                px={2}
                                py={1}
                                rounded={"md"}
                                color="#EFEFEF"
                                fontWeight="semibold"
                                transition="0.25s ease"
                                _hover={{
                                    textDecoration: "none",
                                    transition: "0.25s ease",
                                    color: "gray.700",
                                }}
                            >
                                Courses
                            </Link>
                            <Link
                                px={2}
                                py={1}
                                rounded={"md"}
                                color="#EFEFEF"
                                fontWeight="semibold"
                                transition="0.25s ease"
                                _hover={{
                                    textDecoration: "none",
                                    transition: "0.25s ease",
                                    color: "gray.700",
                                }}
                                href="https://www.piaic.org/"
                            >
                                PIAIC
                            </Link>
                            <Link
                                _hover={{
                                    textDecoration: "none",
                                }}
                                href="https://portal.piaic.org/"
                            >
                                <Button
                                    variant={"solid"}
                                    bg="cyan.700"
                                    color={"gray.50"}
                                    _hover={{
                                        textDecoration: "none",
                                        bg: "cyan.900",
                                    }}
                                    size={"sm"}
                                    py={5}
                                    px={4}
                                    mr={4}
                                >
                                    Apply
                                </Button>
                            </Link>
                        </Stack>
                    </Box>
                ) : null}

            </Box>
        </>
    );
};

export default Navbar;
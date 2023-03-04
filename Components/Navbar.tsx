"use client";
import { FC } from "react";
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Link,
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
                bg="#232727"
                px={4}
            >
                <Flex h={"100px"} maxW={"7xl"} alignItems={"center"} justifyContent={"space-between"}>
                    <HStack spacing={2} alignItems={"center"}>
                        <Flex
                            rounded="md"
                            justify={"center"}
                            zIndex={10}
                            mx="4"
                            display={{ base: "center", md: "flex", lg: "flex" }}
                            align={"center"}
                        >
                            <Link
                                href="/"
                            >
                                <Image
                                    src={
                                        "./Logo.png"
                                    }
                                    alt="logo"
                                    height={50}
                                    width={50}
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
                                color="white"
                                fontWeight="semibold"
                                transition="0.25s ease"
                                _hover={{
                                    textDecoration: "none",
                                    transition: "0.25s ease",
                                    bgGradient: "linear(to-r, #17fffb, #29e654)",
                                    bgClip: "text"
                                }}
                                href="/"
                            >
                                Home
                            </Link>
                            <Link
                                px={2}
                                py={1}
                                rounded={"md"}
                                color="white"
                                fontWeight="semibold"
                                transition="0.25s ease"
                                _hover={{
                                    textDecoration: "none",
                                    transition: "0.25s ease",
                                    bgGradient: "linear(to-r, #17fffb, #29e654)",
                                    bgClip: "text"
                                }}
                                href="/courses"
                            >
                                Courses
                            </Link>
                            <Link
                                px={2}
                                py={1}
                                rounded={"md"}
                                color="white"
                                fontWeight="semibold"
                                transition="0.25s ease"
                                _hover={{
                                    textDecoration: "none",
                                    transition: "0.25s ease",
                                    bgGradient: "linear(to-r, #17fffb, #29e654)",
                                    bgClip: "text"
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
                                bg="black"
                                color={"gray.50"}
                                _hover={{
                                    textDecoration: "none",
                                    bg: "#0a0f13"
                                }}
                                size={"sm"}
                                py={5}
                                px={4}
                            >
                                Apply
                            </Button>
                        </Link>
                    </Flex>
                    <IconButton
                        color={"white"}
                        size={"lg"}
                        _hover={{
                            textDecoration: "none",
                            bgGradient: "linear(to-r, green.500, cyan.900)"
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
                                color="white"
                                fontWeight="semibold"
                                transition="0.25s ease"
                                _hover={{
                                    textDecoration: "none",
                                    transition: "0.25s ease",
                                    bgGradient: "linear(to-r, #17fffb, #29e654)",
                                    bgClip: "text"
                                }}
                                href="/"
                            >
                                Home
                            </Link>
                            <Link
                                px={2}
                                py={1}
                                rounded={"md"}
                                color="white"
                                fontWeight="semibold"
                                transition="0.25s ease"
                                _hover={{
                                    textDecoration: "none",
                                    transition: "0.25s ease",
                                    bgGradient: "linear(to-r, #17fffb, #29e654)",
                                    bgClip: "text"
                                }}
                                href="/courses"
                            >
                                Courses
                            </Link>
                            <Link
                                px={2}
                                py={1}
                                rounded={"md"}
                                color="white"
                                fontWeight="semibold"
                                transition="0.25s ease"
                                _hover={{
                                    textDecoration: "none",
                                    transition: "0.25s ease",
                                    bgGradient: "linear(to-r, #17fffb, #29e654)",
                                    bgClip: "text"
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
                                    bg="black"
                                    color={"gray.50"}
                                    _hover={{
                                        textDecoration: "none",
                                        bg: "#0a0f13"
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
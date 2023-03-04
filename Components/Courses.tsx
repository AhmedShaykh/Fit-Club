"use client";
import { FC } from "react";
import {
    Container,
    Box,
    SimpleGrid,
    Heading,
    useColorModeValue,
    Flex
} from "@chakra-ui/react";
import Link from "next/link";

const Courses: FC = () => {
    return (
        <Box bg="#ffffff">
            <Container
                maxW="7xl"
                px={{ base: 5, md: 4 }}
                py={{ base: 10, md: 16 }}
            >
                <Box
                    py={{ base: 4, md: 8 }}
                    px={["1.4rem", "auto"]}
                    textAlign={"center"}
                    mb="2"
                >
                    <Heading
                        as="h1"
                        color="black"
                        lineHeight={1.1}
                        fontWeight={"bold"}
                        fontSize={{ base: '4xl', sm: '5xl', lg: '5xl' }}
                    >
                        Courses
                    </Heading>
                </Box>
                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    placeItems="center"
                    spacing={10}
                    mb={4}
                >
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        bgGradient="linear(to-tr, #050f1f, #001119, #00100f, #050c07, #090908)"
                        color="white"
                        py={4}
                        px={{ base: 2, md: 4 }}
                        w="100%"
                        h={{ base: "250px", md: "250px", lg: "280px" }}
                        rounded="lg"
                        textAlign="center"
                        pos="relative"
                        boxShadow={useColorModeValue(
                            "0 4px 6px rgb(20 22 23 / 60%)",
                            "0 4px 6px rgba(9, 17, 28, 0.9)"
                        )}
                    >
                        <Link href="ai">
                            <Heading
                                as="h1"
                                fontWeight="bold"
                                fontSize={{ base: "xl", sm: "2xl" }}
                                lineHeight="1.3"
                                mt={4}
                            >
                                Artificial Intelligence & Deep Learning Specialization
                            </Heading>
                        </Link>
                    </Flex>
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        bgGradient="linear(to-tr, #050f1f, #001119, #00100f, #050c07, #090908)"
                        color="white"
                        py={4}
                        px={{ base: 2, md: 4 }}
                        w="100%"
                        h={{ base: "250px", md: "250px", lg: "280px" }}
                        rounded="lg"
                        textAlign="center"
                        pos="relative" boxShadow={useColorModeValue(
                            "0 4px 6px rgb(20 22 23 / 60%)",
                            "0 4px 6px rgba(9, 17, 28, 0.9)"
                        )}
                    >
                        <Link href="wmd">
                            <Heading
                                as="h1"
                                fontWeight="bold"
                                fontSize={{ base: "xl", sm: "2xl" }}
                                lineHeight="1.3"
                                mt={4}
                            >
                                Web 3.0 (Blockchain) & Metaverse Specialization
                            </Heading>
                        </Link>
                    </Flex>
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        bgGradient="linear(to-tr, #050f1f, #001119, #00100f, #050c07, #090908)"
                        color="white"
                        py={4}
                        px={{ base: 2, md: 4 }}
                        w="100%"
                        h={{ base: "250px", md: "250px", lg: "280px" }}
                        rounded="lg"
                        textAlign="center"
                        pos="relative"
                        boxShadow={useColorModeValue(
                            "0 4px 6px rgb(20 22 23 / 60%)",
                            "0 4px 6px rgba(9, 17, 28, 0.9)"
                        )}
                    >
                        <Link href="cnc">
                            <Heading
                                as="h1"
                                fontWeight="bold"
                                fontSize={{ base: "xl", sm: "2xl" }}
                                lineHeight="1.3"
                                mt={4}
                            >
                                Cloud Native & Mobile Web Computing Specialization
                            </Heading>
                        </Link>
                    </Flex>
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        bgGradient="linear(to-tr, #050f1f, #001119, #00100f, #050c07, #090908)"
                        color="white"
                        py={4}
                        px={{ base: 2, md: 4 }}
                        w="100%"
                        h={{ base: "250px", md: "250px", lg: "280px" }}
                        rounded="lg"
                        textAlign="center"
                        pos="relative"
                        boxShadow={useColorModeValue(
                            "0 4px 6px rgb(20 22 23 / 60%)",
                            "0 4px 6px rgba(9, 17, 28, 0.9)"
                        )}
                    >
                        <Link href="iot">
                            <Heading
                                as="h1"
                                fontWeight="bold"
                                fontSize={{ base: "xl", sm: "2xl" }}
                                lineHeight="1.3"
                                mt={4}
                            >
                                Ambient Computing & IoT Specialization
                            </Heading>
                        </Link>
                    </Flex>
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        bgGradient="linear(to-tr, #050f1f, #001119, #00100f, #050c07, #090908)"
                        color="white"
                        py={4}
                        px={{ base: 2, md: 4 }}
                        w="100%"
                        h={{ base: "250px", md: "250px", lg: "280px" }}
                        rounded="lg"
                        textAlign="center"
                        pos="relative"
                        boxShadow={useColorModeValue(
                            "0 4px 6px rgb(20 22 23 / 60%)",
                            "0 4px 6px rgba(9, 17, 28, 0.9)"
                        )}
                    >
                        <Link href="/automation">
                            <Heading
                                as="h1"
                                fontWeight="bold"
                                fontSize={{ base: "xl", sm: "2xl" }}
                                lineHeight="1.3"
                                mt={4}
                            >
                                Network Programmability & Automation Specialization
                            </Heading>
                        </Link>
                    </Flex>
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        bgGradient="linear(to-tr, #050f1f, #001119, #00100f, #050c07, #090908)"
                        color="white"
                        py={4}
                        px={{ base: 2, md: 4 }}
                        w="100%"
                        h={{ base: "250px", md: "250px", lg: "280px" }}
                        rounded="lg"
                        textAlign="center"
                        pos="relative"
                        boxShadow={useColorModeValue(
                            "0 4px 6px rgb(20 22 23 / 60%)",
                            "0 4px 6px rgba(9, 17, 28, 0.9)"
                        )}
                    >
                        <Link href="/bio">
                            <Heading
                                as="h1"
                                fontWeight="bold"
                                fontSize={{ base: "xl", sm: "2xl" }}
                                lineHeight="1.3"
                                mt={4}
                            >
                                Genomics & Bioinformatics Specialization
                            </Heading>
                        </Link>
                    </Flex>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Courses;
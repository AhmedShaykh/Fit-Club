"use client";
import { FC } from "react";
import {
    Container,
    Box,
    Text,
    SimpleGrid,
    Heading,
    useColorModeValue
} from "@chakra-ui/react";

const Courses: FC = () => {
    return (
        <Box>
            <Container
                maxW="7xl"
                px={{ base: 5, md: 4 }}
                py={{ base: 10, md: 16 }}
            >
                <Box
                    py="8"
                    px={["1.4rem", "auto"]}
                    textAlign={"center"}
                    mb="2"
                >
                    <Heading
                        as="h1"
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
                    <Box
                        bg={"teal.500"}
                        p={4}
                        h={{ base: "auto", md: "250px", lg: "280px" }}
                        rounded="lg"
                        textAlign="center"
                        pos="relative" boxShadow={useColorModeValue(
                            "0 4px 6px rgba(160, 174, 192, 0.6)",
                            "0 4px 6px rgba(9, 17, 28, 0.9)"
                        )}
                    >
                        <Heading
                            as="h1"
                            fontWeight="bold"
                            fontSize="xl"
                            mt={4}
                        >
                            Web 3.0 (Blockchain) & Metaverse Specialization
                        </Heading>
                        <Text
                            fontSize="md"
                            mt={4}
                        >
                            This Web 3.0 and Metaverse Specialization focuses on developing Full-stack Web 3.0 and Metaverse experiences for the next generation of the internet.
                        </Text>
                    </Box>
                    <Box
                        bg={"blue.500"}
                        p={4}
                        h={{ base: "auto", md: "250px", lg: "280px" }}
                        rounded="lg"
                        textAlign="center"
                        pos="relative"
                        boxShadow={useColorModeValue(
                            "0 4px 6px rgba(160, 174, 192, 0.6)",
                            "0 4px 6px rgba(9, 17, 28, 0.9)"
                        )}
                    >
                        <Heading
                            as="h1"
                            fontWeight="bold"
                            fontSize="xl"
                            mt={4}
                        >
                            Artificial Intelligence
                        </Heading>
                        <Text
                            fontSize="md"
                            mt={4}
                        >
                            The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.
                        </Text>
                    </Box>
                    <Box
                        bg={"pink.500"}
                        p={4}
                        h={{ base: "auto", md: "250px", lg: "280px" }}
                        rounded="lg"
                        textAlign="center"
                        pos="relative"
                        boxShadow={useColorModeValue(
                            "0 4px 6px rgba(160, 174, 192, 0.6)",
                            "0 4px 6px rgba(9, 17, 28, 0.9)"
                        )}
                    >
                        <Heading
                            as="h1"
                            fontWeight="bold"
                            fontSize="xl"
                            mt={4}
                        >
                            Cloud Native & Mobile Web Computing
                        </Heading>
                        <Text
                            fontSize="md"
                            mt={4}
                        >
                            The Cloud Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.
                        </Text>
                    </Box>
                    <Box
                        bg={"cyan.500"}
                        p={4}
                        h={{ base: "auto", md: "250px", lg: "280px" }}
                        rounded="lg"
                        textAlign="center"
                        pos="relative"
                        boxShadow={useColorModeValue(
                            "0 4px 6px rgba(160, 174, 192, 0.6)",
                            "0 4px 6px rgba(9, 17, 28, 0.9)"
                        )}
                    >
                        <Heading
                            as="h1"
                            fontWeight="bold"
                            fontSize="xl"
                            mt={4}
                        >
                            Ambient Computing & IoT Specialization
                        </Heading>
                        <Text
                            fontSize="md"
                            mt={4}
                        >
                            Roll your own API to easily connect with other apps or services. Pull in updates.
                        </Text>
                    </Box>
                    <Box
                        bg={"green.400"}
                        p={4}
                        h={{ base: "auto", md: "250px", lg: "280px" }}
                        rounded="lg"
                        textAlign="center"
                        pos="relative"
                        boxShadow={useColorModeValue(
                            "0 4px 6px rgba(160, 174, 192, 0.6)",
                            "0 4px 6px rgba(9, 17, 28, 0.9)"
                        )}
                    >
                        <Heading
                            as="h1"
                            fontWeight="bold"
                            fontSize="xl"
                            mt={4}
                        >
                            Genomics & Bioinformatics Specialization
                        </Heading>
                        <Text
                            fontSize="md"
                            mt={4}
                        >
                            Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved
                        </Text>
                    </Box>
                    <Box
                        bg={"orange.400"}
                        p={4}
                        h={{ base: "auto", md: "250px", lg: "280px" }}
                        rounded="lg"
                        textAlign="center"
                        pos="relative"
                        boxShadow={useColorModeValue(
                            "0 4px 6px rgba(160, 174, 192, 0.6)",
                            "0 4px 6px rgba(9, 17, 28, 0.9)"
                        )}
                    >
                        <Heading
                            as="h1"
                            fontWeight="bold"
                            fontSize="xl"
                            mt={4}
                        >
                            Network Programmability & Automation Specialization
                        </Heading>
                        <Text
                            fontSize="md"
                            mt={4}
                        >
                            Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile
                        </Text>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Courses;
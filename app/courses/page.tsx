"use client";
import React from "react";
import {
    Box,
    chakra,
    Container,
    Link,
    Text,
    HStack,
    VStack,
    Stack,
    useColorModeValue,
    Flex
} from "@chakra-ui/react";

interface CardProps {
    title: string;
    content: string;
    link: string;
}

const articles = [
    {
        id: 1,
        title: "Web 3.0 and Blockchain",
        content: `This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet. `,
        link: "/metaverse",
    },
    {
        id: 2,
        title: "Metaverse",
        content: `This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet. `,
        link: "/metaverse",
    },
    {
        id: 3,
        title: "Artificial Intelligence",
        content: `The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.`,
        link: "/ai",
    },
    {
        id: 4,
        title: "Cloud-Native Computing Specialization",
        content: `The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes. 
    `,
        link: "/cloudnative",
    },
    {
        id: 5,
        title: "Ambient Computing and IoT Specialization",
        content: `The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter, and Embedded Devices. `,
        link: "/iot",
    },
    {
        id: 6,
        title: "Genomics and Bioinformatics Specialization",
        content: `Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured `,
        link: "/bio",
    },
    {
        id: 7,
        categories: ["NP", "With Videos"],
        title: "Network Programmability and Automation Specialization",
        content: `his course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.`,
        link: "/network",
    },
];

const CoursesSec = () => {
    return (
        <Container maxWidth="4xl" p={{ base: 2, sm: 10 }}>
            {articles.map((article, index) => (
                <Flex key={index} mb="10px">
                    <Card {...article} />
                </Flex>
            ))}
        </Container>
    );
};

const Card = ({ title, content, link }: CardProps) => {
    return (
        <HStack
            p={{ base: 3, sm: 6 }}
            bg={useColorModeValue("gray.100", "gray.800")}
            spacing={5}
            rounded="lg"
            alignItems="center"
            pos="relative"
            _before={{
                content: `""`,
                w: "0",
                h: "0",
                borderColor: `transparent ${useColorModeValue(
                    "#edf2f6",
                    "#1a202c"
                )} transparent`,
                borderStyle: "solid",
                borderWidth: "15px 15px 15px 0",
                position: "absolute",
                left: "-15px",
                display: "block",
            }}
        >
            <Box>
                <VStack spacing={0} mb={3} textAlign="left">
                    <chakra.h1
                        _hover={{ color: "#D2001A" }}
                        fontSize="2xl"
                        lineHeight={1.2}
                        fontWeight="bold"
                        w="100%"
                    >
                        <Link href={link}>{title}</Link>
                    </chakra.h1>
                    <Text fontSize="md" noOfLines={2}>
                        {content}
                    </Text>
                </VStack>
            </Box>
        </HStack>
    );
};

function Courses() {
    return (
        <div>
            <Box pb={8}>
                <Stack
                    pos="relative"
                    bgGradient={`linear(to-l, red.50, red.100 , red.50)`}
                    height="250px"
                    w="100%"
                ></Stack>
                <Box
                    maxW="4xl"
                    p={4}
                    isolation="isolate"
                    zIndex={3}
                    mt="-5rem"
                    marginInline="auto"
                >
                    <Box
                        boxShadow={useColorModeValue(
                            "0 4px 6px rgba(160, 174, 192, 0.6)",
                            "0 4px 6px rgba(9, 17, 28, 0.9)"
                        )}
                        bg={useColorModeValue("white", "gray.800")}
                        p={{ base: 4, sm: 8 }}
                        overflow="hidden"
                        rounded="2xl"
                    >
                        <Stack
                            pos="relative"
                            zIndex={1}
                            direction="column"
                            spacing={5}
                            textAlign="left"
                        >
                            <chakra.h1
                                fontSize="5xl"
                                lineHeight={1.2}
                                textAlign={"center"}
                                fontWeight="bold"
                                color={"red.800"}
                            >
                                Core Courses (Common in All Specializations):
                            </chakra.h1>
                        </Stack>
                    </Box>
                </Box>
            </Box>

            <CoursesSec />
            
        </div>
    );
}

export default Courses;
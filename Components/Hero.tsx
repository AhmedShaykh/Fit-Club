"use client";
import { FC } from "react";
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Link,
    useColorModeValue
} from '@chakra-ui/react';

const Hero: FC = () => {
    return (
        <Box bg="#f2f2f2">
            <Container maxW={'7xl'}>
                <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: 'column', md: 'row' }}>
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                        <Heading
                            as="h2"
                            color="black"
                            lineHeight={1.1}
                            fontWeight={"bold"}
                            fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }}
                        >
                            Certified Web 3.0 & Metaverse Developer
                        </Heading>
                        <Heading
                            as="h2"
                            lineHeight={1}
                            bgGradient="linear(to-r, #051937, #00181a, #0A0B09)"
                            bgClip="text"
                            fontWeight={"bold"}
                            fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }}
                        >
                            With Panaverse
                        </Heading>
                        <Text
                            fontSize={{ base: 16, sm: 20 }}
                            color={'grey'}
                            lineHeight={1.3}
                            pb={{ base: "2", md: "1" }}
                        >
                            A One and Quarter Years Panaverse DAO Earn as you Learn Program.
                            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies
                        </Text>
                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={{ base: 'row', sm: 'row' }}
                            pb={{ base: "8", lg: "4" }}
                        >
                            <Link
                                _hover={{
                                    textDecoration: "none",
                                }}
                                href="https://portal.piaic.org/signup"
                            >
                                <Button
                                    rounded={'full'}
                                    fontWeight={600}
                                    px={6}
                                    color="white"
                                    bg="black"
                                    boxShadow={useColorModeValue(
                                        "0 4px 6px rgb(20 22 23 / 60%)",
                                        "0 4px 6px rgba(9, 17, 28, 0.9)"
                                    )}
                                    _hover={{
                                        bg: "white",
                                        color: "black"
                                    }}
                                >
                                    Apply Now
                                </Button>
                            </Link>
                            <Link
                                _hover={{
                                    textDecoration: "none",
                                }}
                                href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"
                            >
                                <Button
                                    rounded={'full'}
                                    fontWeight={600}
                                    color="white"
                                    px={6}
                                    bg={'gray.600'}
                                    boxShadow={useColorModeValue(
                                        "0 4px 6px rgb(20 22 23 / 60%)",
                                        "0 4px 6px rgba(9, 17, 28, 0.9)"
                                    )}
                                    _hover={{ bg: "gray.800" }}
                                >
                                    Syllabus
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}>
                        <Box
                            position={'relative'}
                            rounded={'2xl'}
                            boxShadow={'3xl'}
                            width={'full'}
                            overflow={'hidden'}>
                            <Image
                                alt={'Hero Image'}
                                fit={'cover'}
                                align={'center'}
                                w={'100%'}
                                h={'100%'}
                                src={
                                    "./dao.png"
                                }
                            />
                        </Box>
                    </Flex>
                </Stack>
            </Container>
        </Box >
    );
};

export default Hero;
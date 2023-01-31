"use client";
import { FC } from "react";
import {
    Heading,
    Stack,
    Text,
    Box,
    Container,
    Flex,
    Image,
    Link
} from '@chakra-ui/react';

const About: FC = () => {
    return (
        <Box bg="#00bf9a">
            <Container maxW={'7xl'}>
                <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: 'column', md: 'row' }}
                    >
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}
                    >
                        <Heading
                            as="h1"
                            lineHeight={1.1}
                            fontWeight={"bold"}
                            fontSize={{ base: 'xl', sm: '3xl', lg: '4xl' }}
                        >
                            The Program in a Nutshell: Earn While You Learn
                        </Heading>
                        <Text
                            fontSize={15}
                            color={'white'}
                            lineHeight={1.3}
                            pb={{ base: "2", md: "1" }}
                        >
                            In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project.
                        </Text>
                        <Heading
                            as="h1"
                            lineHeight={1.1}
                            fontWeight={"bold"}
                            fontSize={{ base: 'xl', sm: '3xl', lg: '4xl' }}
                        >
                            Program of Studies
                        </Heading>
                        <Text
                            fontSize={15}
                            color={'white'}
                            lineHeight={1.3}
                            pb={{ base: "2", md: "1" }}
                        >
                            This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialities and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a year-long hybrid programme that includes both onsite and online classes and is divided into four quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
                        </Text>
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
                                    "./metaweb3.png"
                                }
                            />
                        </Box>
                    </Flex>
                </Stack>
            </Container>
        </Box>
    );
};

export default About;
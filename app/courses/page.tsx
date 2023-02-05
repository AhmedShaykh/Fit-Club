"use client";
import { FC } from "react";
import {
    Box,
    Container,
    Heading,
    Stack,
    Text
} from '@chakra-ui/react';


const Courses: FC = () => {
    return (
        <Box>
            <Box bg="#dde3e9">
                <Container maxW={'7xl'}>
                    <Stack
                        mt="5rem"
                        textAlign={'center'}
                        align={'center'}
                        px="2"
                        py={{ base: 20, md: 28 }}
                    >
                        <Heading
                            as="h2"
                            lineHeight={1.3}
                            fontWeight={"bold"}
                            fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }}
                        >
                            Core Courses All Specializations:
                        </Heading>
                        <Text
                            fontSize={20}
                            color={'black'}
                            lineHeight={1.3}
                            pt={{ base: "2", md: "4" }}
                        >
                            Every participant of the program will start by completing the following three core courses:
                        </Text>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
};

export default Courses;
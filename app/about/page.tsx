"use client";
import { FC } from "react";
import {
    Container,
    Heading,
    Stack,
    Text,
    Button
} from '@chakra-ui/react';

const About: FC = () => {
    return (
        <Container maxW={'5xl'}>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}>
                <Heading
                    as="h2"
                    lineHeight={1.1}
                    fontWeight={"bold"}
                    fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                >
                    The Program in a Nutshell: Earn While You Learn
                </Heading>
                <Text color={'gray.500'} maxW={'3xl'}>
                    Never miss a meeting. Never be late for one too. Keep track of your
                    meetings and receive smart reminders in appropriate times. Read your
                    smart “Daily Agenda” every morning.
                </Text>
                <Stack spacing={6} direction={'row'}>
                    <Button
                        rounded={'full'}
                        px={6}
                        colorScheme={'orange'}
                        bg={'orange.400'}
                        _hover={{ bg: 'orange.500' }}>
                        Get started
                    </Button>
                    <Button rounded={'full'} px={6}>
                        Learn more
                    </Button>
                </Stack>
            </Stack>
        </Container>
    );
};

export default About;
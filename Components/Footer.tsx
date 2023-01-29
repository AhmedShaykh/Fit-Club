"use client";
import { FC } from "react";
import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Image,
    Text,
    VisuallyHidden,
    useColorModeValue,
    Flex,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa';

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                transition: "0.25s ease",
                color: "gray.700",
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'bolder'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

const Footer: FC = () => {
    return (
        <Box
            bg="teal"
            color="white"
        >
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 2fr 2fr 2fr' }}
                    pb={8}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Link href="https://www.panaverse.co/">
                                <Image
                                    w="150px"
                                    src="./dao.png"
                                    alt="Panaverse"
                                />
                            </Link>
                        </Box>
                        <Text fontSize={'sm'}>
                            Copyright © 2023 by Panaverse
                        </Text>
                        <Stack
                            direction={'row'}
                            spacing={6}>
                            <SocialButton label={'Facebook'} href="https://www.facebook.com/groups/panaverse">
                                <FaFacebook />
                            </SocialButton>
                            <SocialButton label={'Twitter'} href="https://twitter.com/Panaverse_edu">
                                <FaTwitter />
                            </SocialButton>
                            <SocialButton label={'YouTube'} href="https://www.youtube.com/@panaverse/">
                                <FaYoutube />
                            </SocialButton>
                            <SocialButton label={'Github'} href="https://github.com/panaverse">
                                <FaGithub />
                            </SocialButton>
                        </Stack>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Courses</ListHeader>
                        <Link
                            _hover={{
                                textDecoration: "none",
                                transition: "0.25s ease",
                                color: "gray.700",
                            }}
                            py={1}
                            fontWeight="semibold"
                            href="https://www.piaic.org/artificial-inteligence"
                        >
                            Artificial Intelligence
                        </Link>
                        <Link
                            _hover={{
                                textDecoration: "none",
                                transition: "0.25s ease",
                                color: "gray.700",
                            }}
                            py={1}
                            fontWeight="semibold"
                            href="https://www.piaic.org/cloud-native"
                        >
                            Cloud Native Computing
                        </Link>
                        <Link
                            _hover={{
                                textDecoration: "none",
                                transition: "0.25s ease",
                                color: "gray.700",
                            }}
                            py={1}
                            fontWeight="semibold"
                            href="https://www.piaic.org/block-chain"
                        >
                            BlockChain
                        </Link>
                        <Link
                            _hover={{
                                textDecoration: "none",
                                transition: "0.25s ease",
                                color: "gray.700",
                            }}
                            py={1}
                            fontWeight="semibold"
                            href="https://www.piaic.org/iot"
                        >
                            Internet of Things and AI
                        </Link>
                        <Link
                            _hover={{
                                textDecoration: "none",
                                transition: "0.25s ease",
                                color: "gray.700",
                            }}
                            py={1}
                            fontWeight="semibold"
                            href="https://www.panaverse.co/"
                        >
                            Web 3 & Metaverse
                        </Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>PIAIC</ListHeader>
                        <Link
                            _hover={{
                                textDecoration: "none",
                                transition: "0.25s ease",
                                color: "gray.700",
                            }}
                            py={1}
                            fontWeight="semibold"
                            href="https://www.facebook.com/groups/piaic/"
                        >
                            Help Center
                        </Link>
                        <Link
                            _hover={{
                                textDecoration: "none",
                                transition: "0.25s ease",
                                color: "gray.700",
                            }}
                            py={1}
                            fontWeight="semibold"
                            href="https://www.piaic.com/"
                        >
                            Website
                        </Link>
                        <Link
                            _hover={{
                                textDecoration: "none",
                                transition: "0.25s ease",
                                color: "gray.700",
                            }}
                            py={1}
                            fontWeight="semibold"
                            href="https://www.facebook.com/piaic"
                        >
                            Announcements
                        </Link>
                        <Link
                            _hover={{
                                textDecoration: "none",
                                transition: "0.25s ease",
                                color: "gray.700",
                            }}
                            py={1}
                            fontWeight="semibold"
                            href="https://www.youtube.com/playlist?list=PLF32E4w-uhaP0SVwqlC8De-En-4CEQnAk"
                        >
                            Bootcamp 2020
                        </Link>
                        <Link
                            _hover={{
                                textDecoration: "none",
                                transition: "0.25s ease",
                                color: "gray.700",
                            }}
                            py={1}
                            fontWeight="semibold"
                            href="https://www.youtube.com/@certifiedunicorndeveloperi6307/featured"
                        >
                            Bootcamp 2021
                        </Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>About</ListHeader>
                        <Link
                            _hover={{
                                textDecoration: "none",
                                transition: "0.25s ease",
                                color: "gray.700",
                            }}
                            py={1}
                            fontWeight="semibold"
                            href="https://www.piaic.org/about"
                        >
                            President Of Pakistan
                        </Link>
                        <Link
                            _hover={{
                                textDecoration: "none",
                                transition: "0.25s ease",
                                color: "gray.700",
                            }}
                            py={1}
                            fontWeight="semibold"
                            href="https://www.saylaniwelfare.com/en/services/education/technical-education/piaic"
                        >
                            Saylani Welfare Trust
                        </Link>
                        <Link
                            _hover={{
                                textDecoration: "none",
                                transition: "0.25s ease",
                                color: "gray.700",
                            }}
                            py={1}
                            fontWeight="semibold"
                            href="https://twitter.com/ziakhan"
                        >
                            Sir Zia Khan (COO)
                        </Link>
                        <Link
                            _hover={{
                                textDecoration: "none",
                                transition: "0.25s ease",
                                color: "gray.700",
                            }}
                            py={1}
                            fontWeight="semibold"
                            href="https://www.panacloud.ai/"
                        >
                            Panacloud
                        </Link>
                        <Link
                            _hover={{
                                textDecoration: "none",
                                transition: "0.25s ease",
                                color: "gray.700",
                            }}
                            py={1}
                            fontWeight="semibold"
                            href="https://www.piaic.org/wit"
                        >
                            WIT
                        </Link>
                    </Stack>
                </SimpleGrid>
            </Container>
            <hr />
            <Flex
                py="8"
                alignItems="center"
                justifyContent="center"
            >
                <Link
                    href="https://github.com/AhmedShaykh"
                    fontWeight="semibold"
                    _hover={{
                        textDecoration: "none",
                        transition: "0.25s ease",
                        color: "black",
                    }}
                >
                    <Box>Made By Ahmed Saleem Shaikh</Box>
                </Link>
            </Flex>
        </Box>
    );
};

export default Footer;
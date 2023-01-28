import { FC } from 'react';
import {
    Box,
    Flex,
    Image,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    useDisclosure,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box position="fixed" top="0" left="0" right="0" zIndex={1}>
                <Box bg="teal.800" px="4" py="2" color="white" fontWeight="400">
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                        <IconButton
                            size={'md'}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={'Open Menu'}
                            display={{ md: 'none' }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <HStack alignItems={'center'}>
                            <Image src={"https://avatars.githubusercontent.com/u/99120681?s=280&v=4"} width={"20%"} height={"60%"} />
                            <HStack
                                as={'nav'}
                                spacing={4}
                                display={{ base: 'none', md: 'flex' }}>
                                <Link>
                                    Course
                                </Link>
                                <Link>
                                    About
                                </Link>
                            </HStack>
                        </HStack>
                        <Flex alignItems={'center'}>
                            <Menu>
                                <Button
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}
                                >
                                    Apply
                                </Button>
                            </Menu>
                        </Flex>
                    </Flex>

                    {isOpen ? (
                        <Box pb={4} display={{ md: 'none' }}>
                            <Stack as={'nav'} spacing={8}>
                                <Link>
                                    Course
                                </Link>
                                <Link>
                                    About
                                </Link>
                            </Stack>
                        </Box>
                    ) : null}
                </Box>
            </Box>
        </>
    );
};

export default Navbar;
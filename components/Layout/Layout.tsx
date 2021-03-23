import { Box, Button, Flex, Circle, Spacer } from '@chakra-ui/react';
import Link from 'next/link';

import React from 'react';

export function Layout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <Flex borderBottomWidth="2px" height="80px" bg="lightGrey" alignItems="center" paddingX="4">
        <Link href={'/'}>
          <Circle size="50px" bg="tomato" color="white" />
        </Link>
        <Spacer />
        <Link href={'/profile'}>
          <Button bg="blue.100" fontSize="lg" color="black">
            Profile
          </Button>
        </Link>
      </Flex>
      <Flex bg="grey">
        <Box width="208px" bg="lightGrey"></Box>
        <Box flex="1" bg="grey">
          {children}
        </Box>
      </Flex>
    </>
  );
}

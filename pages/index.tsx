import Head from 'next/head';
import { HelloWorld } from '../components/HelloWorld/HelloWorld';
import { Hello } from '../components/Hello/Hello';
import { Box, VStack } from '@chakra-ui/react';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gravity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box bg="grey" h="100vh" width="100%" marginTop="400px">
          <VStack spacing="4">
            <HelloWorld />
            <Hello name="Jerry" />
          </VStack>
        </Box>
      </main>

      <footer></footer>
    </div>
  );
}

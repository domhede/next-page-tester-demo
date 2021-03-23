import Head from 'next/head';
import { Box, Button, Flex, Circle, Spacer, HStack, Heading } from '@chakra-ui/react';
import React from 'react';
import { gql } from '@apollo/client';
import { client } from '../lib/apollo';

const USER_QUERY = gql`
  {
    user {
      id
      firstName
      lastName
      fullName
      phoneNumber
      organisation {
        name
      }
    }
  }
`;

interface ProfileProps {
  data: any;
}

export default function Profile({ data }: ProfileProps) {
  const {
    user: { fullName },
  } = data;
  return (
    <div>
      <main>
        <Box margin="60px" height="100vh">
          <HStack spacing="10">
            <Circle size="138px" bg="yellow" />
            <Heading>{fullName}</Heading>
          </HStack>
        </Box>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: USER_QUERY,
  });

  return {
    props: { data },
  };
}

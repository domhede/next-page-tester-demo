import { Heading } from '@chakra-ui/react';

export interface HelloProps {
  name?: string;
}

export function Hello({ name = 'World' }: HelloProps) {
  return <Heading color="tomato">Hello {name}</Heading>;
}

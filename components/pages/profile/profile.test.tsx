/* eslint-disable react/display-name  */
import { getPage } from 'next-page-tester';
import { MockedProvider } from '@apollo/client/testing';
import { screen } from '@testing-library/react';
import { USER_QUERY } from '../../../pages/profile';

/**
 * @jest-environment node
 */

const mocks = [
  {
    request: {
      query: USER_QUERY,
    },
    result: () => {
      return {
        data: {
          user: { id: '1', fullName: 'Art Vandalay' },
        },
      };
    },
  },
];

describe('Profile page', () => {
  test('should render page and display user details', async () => {
    const { render } = await getPage({
      route: '/profile',
      wrapper: {
        Page: (Page) => (pageProps) => {
          return (
            <MockedProvider mocks={mocks} addTypename={false}>
              <Page {...pageProps} />
            </MockedProvider>
          );
        },
      },
    });

    render();
    await screen.queryByText('Art Vandalay');
  });
});

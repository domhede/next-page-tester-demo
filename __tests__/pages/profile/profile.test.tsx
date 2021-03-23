import { getPage } from 'next-page-tester';
import { MockedProvider } from '@apollo/client/testing';
import { screen } from '@testing-library/react';

describe('Profile page', () => {
  // test('should render page and display user details', async () => {
  //   const { serverRender } = await getPage({
  //     route: '/profile',
  //     wrapper: {
  //       Page: (Page) => (pageProps) => {
  //         return (
  //           <MockedProvider>
  //             <Page {...pageProps} />
  //           </MockedProvider>
  //         );
  //       },
  //     },
  //   });
  //   serverRender();
  // await screen.findByText('Art Vandalay');
  // });
  it('renders profile page', async () => {
    const { render } = await getPage({
      route: '/profile',
    });
    render();
    expect(screen.getByText('Art Vandalay')).toBeInTheDocument();
  });
});

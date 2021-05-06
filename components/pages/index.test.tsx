import { getPage } from 'next-page-tester';
import { screen, fireEvent } from '@testing-library/react';

/**
 * @jest-environment node
 */

describe('Home page', () => {
  it('renders home page', async () => {
    const { serverRender } = await getPage({
      route: '/',
    });

    serverRender();
    expect(screen.findByText('Hello World'));

    fireEvent.click(screen.queryByText('Profile'));
    await screen.queryByText('Art Vandalay');
  });
});

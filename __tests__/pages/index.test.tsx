import { getPage } from 'next-page-tester';
import { screen, fireEvent } from '@testing-library/react';

describe('Home page', () => {
  it('renders home page', async () => {
    const { render } = await getPage({
      route: '/',
    });

    render();
    expect(screen.queryByText('Hello World')).toBeInTheDocument();

    fireEvent.click(screen.queryByText('Profile'));
    await screen.queryByText('Art Vandalay');
  });
});

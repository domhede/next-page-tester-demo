import { render, screen } from '@testing-library/react';
import { Hello, HelloProps } from './Hello';

describe('Hello', () => {
  const defaultProps: HelloProps = {
    name: 'George',
  };

  it('renders correctly', () => {
    const props = { ...defaultProps };
    render(<Hello {...props} />);
    expect(screen.queryByText('Hello George')).toBeInTheDocument();
  });
  it('renders correctly with default value', () => {
    render(<Hello />);
    expect(screen.queryByText('Hello World')).toBeInTheDocument();
  });
});

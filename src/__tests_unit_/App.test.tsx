
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../pages/Home';
import { MemoryRouter } from 'react-router';

describe('<Home />', () => {
  test('Home page loads properly', () => {
    const wrapper = render(<Home />)
    expect(wrapper).toBeTruthy()

    const contentResult = screen.findByText('Pop movies');
    expect(contentResult).to.exist;

  })
});

describe('Home', () => {
  test('test clicking on a link', () => {
    const wrapper = render(<Home />)
    expect(wrapper).toBeTruthy()

    const contentResult = screen.findByText('Pop movies');
    expect(contentResult).to.exist;

  })
});



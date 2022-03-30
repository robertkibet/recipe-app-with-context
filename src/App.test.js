import { render, screen } from '@testing-library/react';
import Adapted from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';
import Recipe from './Recipe'

test('renders heading', ()=>{
  render(<Recipe/>);
  expect(screen.getByRole('heading')).toHaveTextContent('Recipe Menu');
  expect(screen.getByPlaceholderText('Enter a recipe name')).toBeInTheDocument();
  expect(screen.getByRole('button')).toHaveTextContent('Get Menu');
})
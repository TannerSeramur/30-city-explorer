import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });
import Home from '../components/Home';

describe('running tests on city explore Home', () => {
  it('is alive', () => {
    let component = shallow(<Home />);
    expect(component.find('h1').exists()).toBeTruthy();
  });
  it('renders correctly', () => {
    let render = renderer.create('<Home/>').toJSON();
    expect(render).toMatchSnapshot();
  });

});

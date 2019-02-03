import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });
import Location from '../components/Location';

describe('running tests on city explore Location results', () => {
  it('is alive', () => {
    let component = shallow(<Location />);
    expect(component.find('h4').exists()).toBeTruthy();
  });
  it('renders correctly', () => {
    let render = renderer.create('<Location/>').toJSON();
    expect(render).toMatchSnapshot();
  });

});
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });
import App from '../components/App';


describe('running tests on city explorer App', () => {
  it('is alive', () => {
    let component = shallow(<App />);
    expect(component.find('div').exists()).toBeTruthy();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders correctly', () => {
    let render = renderer.create('<App/>').toJSON();
    expect(render).toMatchSnapshot();
  });
});



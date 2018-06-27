import React from 'react';
import {App, Link} from './App';


// enzyme setup
import {configure, shallow} from 'enzyme';
import Adaptor  from 'enzyme-adapter-react-16';

configure({ adapter: new Adaptor() });

describe('<App />', () => {

  const link = shallow(<Link url='google.com'/>);

  it('link component should accepts a url prop', () => {
    expect(link.instance().props.url).toBe('google.com')
  });

  it('a tag node render correct href', () => {
    expect(link.props().href).toBe('google.com')
  })


});


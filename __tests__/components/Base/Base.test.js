import React from 'react';
import {shallow} from 'enzyme';
import Base from '../../../components/Base/Base.js';

describe('Base - test', () => {
    test('✏', () => {
        const wrapper = shallow(<Base />);
        expect(wrapper.text()).toEqual('base component');
    });
});

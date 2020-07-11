import React from 'react';
import {shallow} from 'enzyme';
import UserMenu from '../../../components/UserMenu/UserMenu.js';

describe('UserMenu', () => {
    const height = '100px';
    const enterHeight = '200px';

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<UserMenu height={height} enterHeight={enterHeight} />);
    });

    test('has prop of style', () => {
        expect(wrapper.first().props().style != null).toBeTruthy();
    });
    test('styles at default', () => {
        expect(wrapper.first().props().style.minHeight).toEqual(height);
        expect(wrapper.first().props().style.opacity).toEqual(0.0);
    });
    test('pointer enter event', () => {
        wrapper.first().simulate('pointerenter', {pageX: 100});
        expect(wrapper.first().props().style.minHeight).toEqual(enterHeight);
        wrapper.first().simulate('pointerleave', {pageX: 200});
        expect(wrapper.first().props().style.minHeight).toEqual(height);
    });
});

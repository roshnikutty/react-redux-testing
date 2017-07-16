import React from 'react';
import {shallow} from 'enzyme';
import {TopNav} from './top-nav';
import {toggleInfoModal} from '../actions';

describe('<TopNav />', () => {
    it('should render without crashing', () => {
        shallow(<TopNav />);
    });

    it('should dispatch newGame when it is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        wrapper.find('.new').simulate('click', {
            preventDefault() {}
        });
        expect(dispatch).toHaveBeenCalled();
    });

    it('should dispatch toggleInfoModal when it is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch}/>);
        wrapper.find('.what').simulate('click', {
            preventDefault() {}
        });
        expect(dispatch).toHaveBeenCalled();
    });
});
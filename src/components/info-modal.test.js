import React from 'react';
import {InfoModal} from './info-modal';
import {shallow} from 'enzyme';

describe('<InfoModal />', () => {
    it('should render without crashing', () => {
     shallow(<InfoModal />);
    });

    it('should dispatch toggleInfoModal() when Got It! clicked', ()=>{
        const dispatch = jest.fn();
        const wrapper = shallow(<InfoModal dispatch={dispatch}/>)
        wrapper.find('.close').simulate('click', {
            preventDefault() {}
        });
        expect(dispatch).toHaveBeenCalled();
    });

});
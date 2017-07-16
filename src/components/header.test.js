import {Header} from './header';
import React from 'react';
import {shallow} from 'enzyme';
import InfoModal from './info-modal';

describe('<Header />', () => {
    it('should render without crashing', () => {
        shallow(<Header />)
    });

    it('should show Info Modal if showInfoModal is true', () => {
        const wrapper = shallow(<Header showInfoModal={true}/>);
        expect(wrapper.find(InfoModal).exists()).toEqual(true);
    });

    it('should notshow Info Modal if showInfoModal is false', () => {
        const wrapper = shallow(<Header showInfoModal={false}/>);
        expect(wrapper.find(InfoModal).exists()).toEqual(false);
    });
});
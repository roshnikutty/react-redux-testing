import React from 'react';
import {GuessSection} from './guess-section';
import {shallow} from 'enzyme';

describe('<GuessSection />', () => {
    it('should render without crashing', () =>{
        shallow(<GuessSection />);
    });

    it('should render feedback text', () => {
        const feedback = 'Hi There!';
        const wrapper = shallow(<GuessSection feedback={feedback} />);
        expect(wrapper.contains(feedback)).toEqual(true);
    });
});
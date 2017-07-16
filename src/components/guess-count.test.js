import React from 'react';
import {GuessCount} from './guess-count';
import {shallow} from 'enzyme';

describe('<GuessCount />', ()=>{
    it('should render without crashing', () =>{
        shallow(<GuessCount />);
    });

    it('should render correct guess count', () =>{
        const value = 10;
        const wrapper = shallow(<GuessCount count={value}/>);
        expect(wrapper.text()).toEqual(`Guess #${value}!`);
    })
});
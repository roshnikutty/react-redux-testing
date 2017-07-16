import React from 'react';
import { shallow, mount } from 'enzyme';
import { GuessList } from './guess-list';

describe('<GuessList />', () => {
    it('should render without crashing',() => {
        shallow(<GuessList guesses={[]}/>);
    });

    it('checks the length of dummy and guesses array', ()=>{
        const guesses = [45, 60, 65];
        const wrapper = shallow(<GuessList guesses={guesses}/>);
        expect(wrapper.find('li').length).toEqual(guesses.length);
        //same as above
        expect(wrapper.find('ul').children().length).toEqual(guesses.length);
       });
    it('checks for each guess', ()=>{
        const guesses = [45, 60, 65];
        const wrapper = mount(<GuessList guesses={guesses}/>);
        const texts = wrapper.find('li').map(node => node.text());
        if(texts==guesses.toString()) {
            console.log('all values match');
        
        }
    });
});
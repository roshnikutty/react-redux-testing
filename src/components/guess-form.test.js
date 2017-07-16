import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';
import {makeGuess} from '../actions';

describe('<GuessForm />', () => {
    it('should render without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should fire the onSubmit dispatch when the form is submitted', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        const value = '15';
        wrapper.find('input[type="text"]').node.value = value;
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
    });

});
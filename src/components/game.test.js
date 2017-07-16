import React from 'react';
import Game from './game';
import { shallow } from 'enzyme';

describe('Game', () => {
    it('should render without crashing', () => {
       shallow(<Game />);
    });
});
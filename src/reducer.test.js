import {
    newGame,
    makeGuess,
    toggleInfoModal,
} from './actions';

import reducer from './reducer';

describe('reducer', () => {

    it('should set initial state when nothing is passed in', () => {
        const state = reducer(undefined, { type: '__UNKNOWN' });
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.showInfoModal).toEqual(false);
    });

    it('should return current state of unknown action', () => {
        const currentState = {};
        const state = reducer(currentState, { type: '__UNKNOWN' })
        expect(state.guesses).toEqual(currentState.guesses);
        expect(state.feedback).toEqual(currentState.feedback);
        expect(state.correctAnswer).toEqual(currentState.correctAnswer);
        expect(state.showInfoModal).toEqual(currentState.showInfoModal);
    });
});

describe('newGame', () => {
    it('should update correctAnswer', () => {
        const initialState = {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.round(Math.random() * 100),
            showInfoModal: false
        };
        const state = reducer(initialState, { type: 'NEW_GAME' });
        console.log(state.correctAnswer);
        expect(state.guesses.length).toEqual(initialState.guesses.length);
        expect(state.feedback).toEqual(initialState.feedback);
        expect(state.showInfoModal).toEqual(initialState.showInfoModal);
        // expect(state.correctAnswer).toEqual(initialState.correctAnswer);
    });

});

describe('makeGuess', () => {
    it('should make a guess', () => {
        let state = {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: 60
        };
        state = reducer(state, makeGuess(5))
        expect(state.feedback).toEqual('You\'re Ice Cold...');
        expect(state.guesses[state.guesses.length - 1]).toEqual(5);

        state = reducer(state, makeGuess(20))
        expect(state.feedback).toEqual('You\'re Cold...');
        expect(state.guesses[state.guesses.length - 1]).toEqual(20);

        state = reducer(state, makeGuess(45))
        expect(state.feedback).toEqual('You\'re Warm');
        expect(state.guesses[state.guesses.length - 1]).toEqual(45);

        state = reducer(state, makeGuess(55))
        expect(state.feedback).toEqual('You\'re Hot!');
        expect(state.guesses[state.guesses.length - 1]).toEqual(55);

        state = reducer(state, makeGuess(60))
        expect(state.feedback).toEqual('You got it!');
        expect(state.guesses[state.guesses.length - 1]).toEqual(60);

    });

});

describe('toggleInfoModal', () => {
    it('should toggle the visibility', () => {
        let state = {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: 60,
            showInfoModal: false
        };

        state = reducer(state, toggleInfoModal());

        expect(state.showInfoModal).toEqual(true);
    });
});

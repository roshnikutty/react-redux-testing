import {
    newGame,
    NEW_GAME,
    makeGuess,
    MAKE_GUESS,
    toggleInfoModal,
    TOGGLE_INFO_MODAL
} from './actions';

describe('newGame', ()=>{
    it('should return action', ()=>{
        const action = newGame();
        expect(action.type).toEqual(NEW_GAME);
        expect(action.correctAnswer).toBeLessThanOrEqual(100);
    });
});

describe('makeGuess', ()=>{
    it('should return action', ()=>{
        const guessedNumber = 5;
        const action = makeGuess(guessedNumber);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guessedNumber);
    });
});

describe('toggleInfoModal', ()=>{
    it('should return action', ()=>{
       const action = toggleInfoModal();
        expect(action.type).toEqual(TOGGLE_INFO_MODAL);
    });
});
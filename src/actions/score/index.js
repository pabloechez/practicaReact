import {
    SCORE_SAVING,
    SCORE_SAVE_SUCCESS,
} from '../../actionTypes';

export const scoreSaving = () => ({
    type: SCORE_SAVING,
});

export const scoreSaveSuccess = payload => ({
    type: SCORE_SAVE_SUCCESS,
    payload,
});


export const scoreSaveData = score => (dispatch) => {
    dispatch(scoreSaving());
    const scoreObj = {
        X: score.X,
        O: score.O,
    };
    return dispatch(scoreSaveSuccess(scoreObj));
};
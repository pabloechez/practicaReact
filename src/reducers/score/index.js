import {
    SCORE_SAVING,
    SCORE_SAVE_SUCCESS,
} from '../../actionTypes';

const initialState = {
    data: [{X: 0, O:0}],
    saving: false,
};

const scoreReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SCORE_SAVING:
            return { ...state, saving: true };
        case SCORE_SAVE_SUCCESS:
            return { ...state, saving: false, data: [payload] };
        default:
            return state;
    }
};

export default scoreReducer
import { feedReducer, initialState } from '../reducers/feed';
import { TFeedActions,
    FEED_CONNECTION_SUCCESS,
    FEED_CONNECTION_CLOSED,
    FEED_CONNECTION_ERROR,
    FEED_GET_MESSAGE
 } from '../actions/feed';

describe('feedReducer', () => {

    it('should return initial state', () => {
        expect(feedReducer(undefined, {} as TFeedActions)).toEqual(initialState);
    });

    it('should handle FEED_CONNECTION_SUCCESS action', () => {
        const action = {type: FEED_CONNECTION_SUCCESS}
        const newState = feedReducer(initialState, action);
        const expectedState = {
            ...initialState,
            isOpen: true,
            error: null
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle FEED_CONNECTION_CLOSED action', () => {
        const action = {type: FEED_CONNECTION_CLOSED}
        const newState = feedReducer(initialState, action);
        const expectedState = {
            ...initialState,
            isOpen: false,
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle FEED_CONNECTION_ERROR action', () => {

        const errorMessage = 'Connection error';

        const action = {
            type: FEED_CONNECTION_ERROR,
            payload: errorMessage
        }
        const newState = feedReducer(initialState, action);
        const expectedState = {
            ...initialState,
            error: errorMessage
        }
        expect(newState).toEqual(expectedState) ;
    });
})
import { TUserOrdersActions,
    USER_ORDERS_CONNECTION_SUCCESS,
    USER_ORDERS_CONNECTION_CLOSED,
    USER_ORDERS_CONNECTION_ERROR,
    USER_ORDERS_GET_MESSAGE
 } from '../actions/user-orders';
import { userOrdersReducer, initialState } from '../reducers/user-orders';

describe('userOrdersReducer', () => {
    it('should return initial state', () => {
        expect(userOrdersReducer(undefined, {} as TUserOrdersActions)).toEqual(initialState);
    });

    it('should handle USER_ORDERS_CONNECTION_SUCCESS action', () => {
        const action = {type: USER_ORDERS_CONNECTION_SUCCESS}
        const newState = userOrdersReducer(initialState, action);
        const expectedState = {
            ...initialState,
            isOpen: true,
            error: null
        }
        expect(newState).toEqual(expectedState) ;
    });

    it('should handle USER_ORDERS_CONNECTION_CLOSED action', () => {
        const action = {type: USER_ORDERS_CONNECTION_CLOSED}
        const newState = userOrdersReducer(initialState, action);
        const expectedState = {
            ...initialState,
            isOpen: false,
        }
        expect(newState).toEqual(expectedState) ;
    });

    it("should handle USER_ORDERS_CONNECTION_ERROR", () => {
        const action = {
          type: USER_ORDERS_CONNECTION_ERROR,
          payload: "Connection error",
        };
        const expectedState = {
          ...initialState,
          error: "Connection error",
        };
        expect(userOrdersReducer(initialState, action)).toEqual(expectedState);
      });
})
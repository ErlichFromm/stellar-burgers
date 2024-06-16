import { CHANGE_TAB , IChangeTabAction} from '../actions/tabs';
import { tabsReducer, initialState } from '../reducers/tabs';
import { TTabsActions } from '../actions/tabs';


describe("tabsReducer", () => {
    it('should return initial state', () => {
        expect(tabsReducer(undefined, {} as TTabsActions)).toEqual(initialState)
    })

    it('should handle CHANGE_TAB action', () => {
        const action: IChangeTabAction = {
            type: CHANGE_TAB,
            payload: 'bun'
        }
        const newState = tabsReducer(undefined, action);
        const expectedState = {
            selectedTab: 'bun'
        }
        expect(newState).toEqual(expectedState) 
    })
})
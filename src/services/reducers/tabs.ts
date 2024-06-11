import { CHANGE_TAB } from "../actions/tabs"
import { TTabsActions } from '../actions/tabs';

type IInitialState = {
    selectedTab: 'bun' | 'sauce' | 'main'
}

const initialState: IInitialState = {
    selectedTab: 'bun',
}

export const tabsReducer = (state = initialState, action: TTabsActions) => {
    switch(action.type){
        case CHANGE_TAB:{
            return {
                ...state,
                selectedTab: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}
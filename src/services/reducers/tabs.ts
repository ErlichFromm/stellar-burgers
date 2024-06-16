import { CHANGE_TAB } from "../actions/tabs"
import { TTabsActions } from '../actions/tabs';

export interface IInitialState {
    selectedTab: 'bun' | 'sauce' | 'main'
}

export const initialState: IInitialState = {
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
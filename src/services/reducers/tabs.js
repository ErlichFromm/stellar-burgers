import { CHANGE_TAB } from "../actions/tabs"

const initialState = {
    // selectedTab: 'bun | sauce | main',
    selectedTab: 'bun',
}

export const tabsReducer = (state = initialState, action) => {
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
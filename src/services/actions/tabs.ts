export const CHANGE_TAB: 'CHANGE_TAB' = 'CHANGE_TAB'

export interface IChangeTabAction {
    readonly type: typeof CHANGE_TAB;
    readonly payload: 'bun' | 'sauce' | 'main';

}

export type TTabsActions =
| IChangeTabAction
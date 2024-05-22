import React, {useEffect, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";

import {CHANGE_TAB} from '../../services/actions/tabs'
import {GROUPE_INGREDIENTS_BY_TYPE} from '../../services/actions/ingredients'

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientSection from "../ingredient-section/ingeredient-section";

import styles from './burger-ingredients.module.css'


const BurgerIngredients:React.FC = () => {

    const dispatch = useDispatch();

    const {ingredients} = useSelector((store:any) => store.ingredients)
    const {selectedTab} =  useSelector((store:any) => store.tabs)
    const {ingredientsGroupes} = useSelector((store:any) => store.ingredients)

    const tabRef   = useRef<HTMLDivElement>(null);
    const bunRef   = useRef<HTMLDivElement>(null);
    const sauceRef = useRef<HTMLDivElement>(null);
    const mainRef  = useRef<HTMLDivElement>(null);

    useEffect(() => {
        dispatch({type: GROUPE_INGREDIENTS_BY_TYPE, payload: ingredients})
    }, [dispatch, ingredients]);

    const onTabClickHandler = (tabType:string):void => {
        dispatch({type: CHANGE_TAB, payload: tabType});

        let selectedTabRef: any = null;
        switch(tabType){
            case 'bun': {
                selectedTabRef = bunRef;
                break;
            }
            case 'sauce': {
                selectedTabRef = sauceRef;
                break;
            }
            case 'main': {
                selectedTabRef = mainRef;
                break;
            }
        }


        selectedTabRef.current.scrollIntoView({
            alignToTop: true,
            behavior: "smooth"
        });
    }

    const sectionScrollHandler: React.UIEventHandler<HTMLElement> = (e) => {

        if(tabRef.current && bunRef.current && sauceRef.current && mainRef.current){
            const startPoint  = tabRef.current.getBoundingClientRect().y + tabRef.current.getBoundingClientRect().height;
            const bunOffset   = bunRef.current.getBoundingClientRect().y;
            const sauceOffset = sauceRef.current.getBoundingClientRect().y;
            const mainOffset  = mainRef.current.getBoundingClientRect().y;

            const sectionPositions: Record<string, number> = {
                bun:   Math.abs(bunOffset - startPoint),
                sauce: Math.abs(sauceOffset - startPoint),
                main:  Math.abs(mainOffset - startPoint),
            }
    
            let minOffsetName = 'bun'
            let minOffsetValue = sectionPositions['bun'];
    
            for(let key in sectionPositions){
                if(sectionPositions[key] < minOffsetValue){
                    minOffsetName = key;
                    minOffsetValue = sectionPositions[key];
                }
            }
    
            dispatch({type: CHANGE_TAB, payload: minOffsetName});
        }
    }

    return (
        <div className={`$ mr-4 ${styles.burgerWrapper}`}>
            <h2 className="text text_type_main-large mt-10">Соберите бургер</h2>
            <div ref={tabRef} className={`mt-2 ${styles.tabWrapper}`}>
                <Tab value="bun"   active={selectedTab === 'bun'} onClick={e => onTabClickHandler('bun')}>Булки</Tab>
                <Tab value="sauce" active={selectedTab === 'sauce'} onClick={e => onTabClickHandler('sauce')}>Соусы</Tab>
                <Tab value="main"  active={selectedTab === 'main'} onClick={e => onTabClickHandler('main')}>Начинки</Tab>
            </div>

            
            <section className={`mt-10 ${styles.ingredientsSection}`} onScroll={sectionScrollHandler}>
                <div ref={bunRef}><IngredientSection title="Булки" data={ingredientsGroupes['bun'] ? ingredientsGroupes['bun'] : []} /></div>
                <div ref={sauceRef}><IngredientSection title="Соусы" data={ingredientsGroupes['sauce'] ? ingredientsGroupes['sauce'] : []} /></div>
                <div ref={mainRef}><IngredientSection title="Начинки" data={ingredientsGroupes['main'] ? ingredientsGroupes['main'] : []} /></div>
            </section>
           
        </div>
    );
}

export default BurgerIngredients;
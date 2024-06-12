import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useAppSelector } from '../../hooks/redux';
import { IOrderDetails } from '../../types/index';
import styles from './feed-card.module.css';

interface IFeedCardProps {
    order: IOrderDetails;
}

const FeedCard: React.FC<IFeedCardProps> = ({ order }) => {

    const { ingredients } = useAppSelector(store => store.ingredients)

    return (
        <div className={`text text_type_main-default ${styles.order}`}>
            <header className={styles.header}>
                <div className='text_type_digits-default'>#{order.number}</div>
                <div>{order.date}</div>
            </header>
            <div>{order.name}</div>
            <div className={styles.bottom}>
                <div className={styles.icons}>
                    {order.icons.map((icon, index, array) => {
                        console.log(array.length);

                        if (index < 5) {
                            return (
                                <div className={styles.icon}>
                                    <img src={icon.src} alt={icon.alt} />
                                </div>
                            )
                        } else if (index === 6) {
                            return (
                                <div className={styles.icon}>
                                    <span className='text_type_digits-default'>+{array.length - 6}</span>
                                    <div className={styles.cyrcle}></div>
                                    <img src={icon.src} alt={icon.alt} />
                                </div>
                            )
                        }

                    })}
                </div>
                <div className={styles.price}>
                    <CurrencyIcon type='primary' />
                    <span className='text_type_digits-default'>{order.total}</span>
                </div>
            </div>
        </div>
    );
}

export default FeedCard;

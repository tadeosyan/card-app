import { Children } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardsSelectors } from '@redux';
import { Wrapper } from '../Wrapper';
import { CardItem } from './CardItem';
import styles from './CardList.module.css';

export const CardList = () => {
  const cardList = useSelector(CardsSelectors.getCards);

  return (
    <Wrapper className={styles.content}>
      <Wrapper className={styles.innerContent}>
        {Children.toArray(
          cardList.map((card: Card) => <CardItem {...card} />)
        )}
      </Wrapper>
    </Wrapper>
  );
};

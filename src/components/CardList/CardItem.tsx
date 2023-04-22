import { Card, useCardsActions } from '@redux';
import { Wrapper } from '../Wrapper';
import styles from './CardList.module.css';

export const CardItem = ({ id, randomNumber }: Card) => {
  const { deleteCard } = useCardsActions();

  return (
    <Wrapper className={styles.cardItem}>
      <h1>{randomNumber}</h1>
      <button
        className={styles.deleteIcon}
        onClick={() => {
          deleteCard({ id });
        }}
      >
        ✕
      </button>
    </Wrapper>
  );
};

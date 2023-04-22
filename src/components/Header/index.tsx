import { useCardsActions } from '@redux';
import { Wrapper } from '../Wrapper';
import styles from './Header.module.css';

export const Header = () => {
  const { addCard, sortCards } = useCardsActions();

  return (
    <Wrapper className={styles.header}>
      <button onClick={() => addCard()}>add Card</button>
      <button onClick={() => sortCards()}>sort Cards</button>
    </Wrapper>
  );
};

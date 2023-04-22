import { CardList } from "./types";

type State = { cards: CardList };

const getCards = (state: State) => state.cards;

const selectors = {
    getCards,
};

export default selectors;
export type Dispatch = (payload: Payload) => void;

export type Payload = {
    type: string;
    payload?: {
        id?: string;
        randomNumber?: number
    }
};

export const actionTypes = {
    ADD_CARD: "ADD_CARD",
    SORT_CARDS: "SORT_CARDS",
    DELETE_CARD: "DELETE_CARD",
};

export interface Card {
    id: string,
    randomNumber: number
};

export type CardList = Card[];


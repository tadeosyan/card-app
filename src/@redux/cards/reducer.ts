import { CardList, Card, Payload, actionTypes } from "./types";
import { v4 as uuidv4 } from "uuid";

export default function cardReducer(
    state: CardList = [],
    { type, payload = {} }: Payload
) {
    switch (type) {
        case actionTypes.ADD_CARD:
            return [
                ...state,
                {
                    id: uuidv4(),
                    randomNumber: payload.randomNumber,
                },
            ];
        case actionTypes.SORT_CARDS:
            return [...state].sort((cardA: Card, cardB: Card) =>
                cardA.randomNumber > cardB.randomNumber ? 1 : -1
            );
        case actionTypes.DELETE_CARD:
            return state.filter((c: Card) => c.id !== payload.id);
        default:
            return state;
    }
}
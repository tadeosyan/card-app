import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { actionTypes, Dispatch } from "./types";

export default function useCardActions() {
    const dispatch: Dispatch = useDispatch();

    const addCard = useCallback(() => {
        const randomNumber = Math.floor(Math.random() * 1000);

        dispatch({ type: actionTypes.ADD_CARD, payload: { randomNumber } });
    }, [dispatch]);

    const deleteCard = useCallback(
        (payload: { id: string }) => {
            dispatch({ type: actionTypes.DELETE_CARD, payload });
        },
        [dispatch]
    );

    const sortCards = useCallback(() => {
        dispatch({ type: actionTypes.SORT_CARDS });
    }, [dispatch]);

    return {
        addCard,
        deleteCard,
        sortCards,
    };
}

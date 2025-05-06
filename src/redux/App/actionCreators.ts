import { createAction } from "@reduxjs/toolkit";
import { GameCategories, GameGenres } from "./types";
import * as actionTypes from './actionTypes';

export interface SetFilter {
    type: typeof actionTypes.APP_SET_FILTER;
    payload: {
        filter: GameCategories | GameGenres;
    }
}

export const setSelectedIndex = createAction<{index: number}>(
    actionTypes.APP_SET_SELECTED_INDEX
)


export const setFilter = createAction<{filter: GameCategories | GameGenres}>(
    actionTypes.APP_SET_FILTER
)


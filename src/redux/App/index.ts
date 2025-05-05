import { Reducer } from "@reduxjs/toolkit";
import { AppInterface, GameCategories, GameGenres } from "./types";
import { games } from "./constants";
import * as actionTypes from './actionTypes';

// Define Action Types
interface SetSelectedIndexAction {
    type: typeof actionTypes.APP_SET_SELECTED_INDEX;
    payload: {
        index: number;
    }
}

interface SetFilterAction {
    type: typeof actionTypes.APP_SET_FILTER;
    payload: {
        filter: GameCategories
    }
}

interface FilterGamesAction {
    type: typeof actionTypes.APP_FILTER_GAMES;
}

type AppActionTypes = SetSelectedIndexAction | SetFilterAction | FilterGamesAction

const initialState: AppInterface = {
    games,
    selectedIndex: 0,
    filter: GameCategories.all
}

const AppReducer: Reducer<AppInterface, AppActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.APP_FILTER_GAMES:
            return {...state};
        case actionTypes.APP_SET_SELECTED_INDEX:
            return {...state, selectedIndex: action.payload.index};
        case actionTypes.APP_SET_FILTER:
            switch(action.payload.filter) {
                case GameCategories.all:
                    return {
                        ...state,
                        filter: action.payload.filter,
                        games: [...games],
                        selectedIndex: 0,
                    }
                default: 
                return {
                    ...state,
                    filter: action.payload.filter,
                    games: games.filter((game) => {
                        const filterAsGenre = action.payload as unknown as GameGenres;
                        return game.genre.includes(filterAsGenre);
                    }),
                    selectedIndex: 0,
                }
            }
            default:
                return state;
    }
}

export default AppReducer;
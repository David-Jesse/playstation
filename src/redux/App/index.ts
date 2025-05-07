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
            console.log("Setting filter:", action.payload.filter);

            if (action.payload.filter === GameCategories.all) {
                return {
                    ...state,
                    filter: action.payload.filter,
                    games: [...games],
                    selectedIndex: 0,
                }
            } else {
                const filteredGames = games.filter(game => {
                    console.log(`Checking ${game.title || game.name} for genre: ${action.payload.filter}`)

                    const hasGenre = game.genre.includes(action.payload.filter as unknown as GameGenres);

                    console.log(`Game ${game.title || game.name} ${hasGenre ? 'matches' : "does not match"} filter ${action.payload.filter}`)

                    return hasGenre;
                })

                return {
                    ...state,
                    filter: action.payload.filter,
                    games: [...filteredGames],
                    selectedIndex: 0,
                }
                }
            default:
                return state;
    }
}

export default AppReducer;
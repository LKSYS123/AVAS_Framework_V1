// import { combineReducers } from "redux";
import {
    CREATE_TUTORIAL,
    RETRIEVE_TUTORIALS,
    UPDATE_TUTORIAL,
    DELETE_TUTORIAL,
    DELETE_ALL_TUTORIALS,
  } from "../actions/types";
  
  // const initialState = [];
  const initialState = {
    cargoData: [],
  };
  
  // function tutorialReducer(tutorials = initialState, action) {
  export const CargoTutorial = (state = initialState, action) => {
    const { type, payload } = action;
  // console.log('====tutorialReducer====type='+payload.length);
    switch (type) {
      case CREATE_TUTORIAL:
        console.log('====tutorialReducer====CREATE_TUTORIAL='+payload.length);
        return [...state, payload];
  
      case RETRIEVE_TUTORIALS:
        console.log('====tutorialReducer====type=RETRIEVE_TUTORIALS='+payload.length);
        // return payload;
        // return [...state, payload];
        return {...state, cargoData:payload};
  
      case UPDATE_TUTORIAL:
        return state.cargoData.map((tutorial) => {
          if (tutorial.id === payload.id) {
            return {
              ...tutorial,
              ...payload,
            };
          } else {
            return tutorial;
          }
        });
  
      case DELETE_TUTORIAL:
        return state.cargoData.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_TUTORIALS:
        return [];
  
      default:
        return state;
    }
  };
  
  // export default tutorialReducer;
    // export default CargoTutorial;
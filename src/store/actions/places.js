import {ADD_PLACE, DEL_PLACE, SEL_PLACE, DESEL_PLACE} from './actionTypes';

export const addPlace = (placename) => {
    return {
        type: ADD_PLACE,
        placename : placename
    };
}

export const delPlace = (placename) => {
    return {
        type: DEL_PLACE,
    };
}

export const selPlace = (key) => {
    return {
        type: SEL_PLACE,
        placeKey : key
    };
}

export const deselPlace = () => {
    return {
        type: DESEL_PLACE,
    };
}
import {ADD_PLACE, DEL_PLACE, SEL_PLACE, DESEL_PLACE} from '../actions/actionTypes';

const initialState = {
    placesArray : [],
    selectedPlace : null,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PLACE:
        //Always return a new STATE for IMMUTABILITY NEVER NEVER!!! directly manipulate state!!!!!
        return {
            ...state,
            placesArray: state.placesArray.concat({
                key: Math.random(),
                name: action.placename,
                image: {
                  uri: "https://ci.phncdn.com/pics/albums/016/565/102/198935812/(m=e-yaaGqaa)(mh=YPZtNS1sdyniwwU6)original_198935812.jpg"
                }
              })
        };
        case DEL_PLACE :
        return {
            ...state,
                  placesArray: state.placesArray.filter((place) => {
                    return place.key !== state.selectedPlace.key;
                  }),
                  selectedPlace: null,
                };
        
        case SEL_PLACE : 
        return {
            ...state,
            selectedPlace: state.placesArray.find(place => {
                return place.key === action.placeKey;
              })
        }

        case DESEL_PLACE :
        return {
            ...state,
            selectedPlace : null
        }
        default:
        return state;
    }
};

export default reducer;
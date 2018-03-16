import React from 'react';
import { View, StyleSheet } from 'react-native';
import List from '../List/List';


const placeList = (props) => {
    const placesOutput = props.places.map((place, i) => (
        <List key={i} placename={place} onItemPressed={()=>{alert(`${i} and ${place}`)}} />
    ))
    return (
        <View style={styles.placesOutput}>
            {placesOutput}
        </View>
    )
}

const styles = StyleSheet.create({
    placesOutput: {
        width: '80%',
        alignItems: 'center',
    }
})


export default placeList;
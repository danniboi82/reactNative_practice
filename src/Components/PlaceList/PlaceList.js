import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import List from '../List/List';


const placeList = (props) => {

    return (

        <FlatList style={styles.placesOutput}
            data={props.places}
            renderItem={(info) => (
                <List
                    placename={info.item.name}
                    placeImg={info.item.image}
                    onItemPressed={() => props.onItemSelected(info.item.key)}
                />
            )}
        />
    )
}

const styles = StyleSheet.create({
    placesOutput: {
        width: '100%',
    }
})


export default placeList;
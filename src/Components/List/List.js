import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const list = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Text>
                {props.placename}
            </Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        backgroundColor: "#eee",
    }
})

export default list;
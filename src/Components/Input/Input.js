import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class Input extends Component {
    state = {
        placename: ''
    };

    nameChangeHandler = (val) => {
        this.setState({
            placename: val,
        });
    };

    sendPlaceNameAsProp = () => {
        if (this.state.placename.trim() === "") {
            return;
        }
        this.props.placeAdded(this.state.placename);
    };

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={this.state.placename}
                    onChangeText={this.nameChangeHandler}
                    placeholder='Enter a place' />
                {/* onPress={()=> this.onPlaceAdded(this.state.placeName)} */}
                <Button title='add button' onPress={this.sendPlaceNameAsProp} />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    input: {
        width: "70%"
    },
    button: {
        width: "30%"
    },
    inputContainer: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    placesOutput: {
        width: '80%',
        alignItems: 'center',
    }
});

export default Input;
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { addPlace , delPlace, selPlace, deselPlace } from './src/store/actions/index';

import Input from './src/Components/Input/Input';
import PlaceList from './src/Components/PlaceList/PlaceList';
import placeImage from './src/assets/beautiful-place.jpg';
import PlaceDetail from './src/Components/PlaceDetail/PlaceDetail';

class App extends Component {

  addPlaceHandler = placename => {
    console.log(placename);
   this.props.onAddPlace(placename);
};


  placeDeletedHandler = () => {
  this.props.onDelPlace();
  }

  modalClosedHandler = () => {
    this.props.onDeselPlace();
  };

  placeSelectedHandler = key => {
    this.props.onSelPlace(key);
  }

  render() {
    return (
      
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <Input placeAdded={this.addPlaceHandler} />
        <PlaceList
          places={this.props.placesArray}
          onItemSelected={this.placeSelectedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
});

const mapStateToProps = state =>{
  return {
    placesArray: state.placesArray.placesArray,
    selectedPlace: state.placesArray.selectedPlace,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onAddPlace : (name)=> dispatch(addPlace(name)),
    onDelPlace : ()=> dispatch(delPlace()),
    onSelPlace : (key)=> dispatch(selPlace(key)),
    onDeselPlace : ()=>dispatch(deselPlace()), 

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
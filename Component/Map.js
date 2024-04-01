import { View, Text } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';


export default function Map() {

    getInitialState = () => {
        return {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
    }

    onRegionChange = (region) => {
        this.setState({ region });
    }

    return (
        <View>
            <MapView
                region={this.getInitialState.region}
                onRegionChange={this.onRegionChange}
            />
            <Marker
                coordinate={{ latitude: latitude, longitude: longitude }}
                image={{ uri: 'custom_pin' }}
            />
        </View>
    )
}


import React from 'react'
import { Button, View, StyleSheet, Dimensions} from 'react-native'
import MapView, { Marker } from 'react-native-maps' 
import MapViewDirections from 'react-native-maps-directions'
import searchHook from '../hooks/searchHook'


const MapScreen = ({navigation})=>{
    const coordinates = navigation.getParam('coordinates')
    const arr = searchHook()
    const userLocation = arr[3]

    console.log(userLocation)
    return(
        <View>
        
        <MapView
            showsUserLocation
            style = {styles.map}
            loadingEnable={true}
            region={
                {
                    latitude: coordinates.latitude,
                    longitude: coordinates.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121
                }

            }

        >
            <MapView.Marker
            coordinate={{
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
            }}
            title={"title 1"}
            description={"description 1"}
         />

        {/* <MapView.Marker
            coordinate={{
                latitude: navigator.geolocation.latitude,
                longitude: navigator.geolocation.longitude,
            }}
            title={"current loc"}
            description={"description 2"}
         /> */}
            
            <MapViewDirections
            origin = { { 
                latitude: userLocation.lat,
                longitude: userLocation.long
            }}
            destination = { {
                latitude: coordinates.latitude,
                longitude: coordinates.longitude
            }}
            apikey = 'DIRECTIONS KEY HERE !!_____@@@@@@@@@@%%%%%%%%$$$$$$$$$$$'
            strokeWidth = {3}
            strokeColor = "red"
            />
        </MapView>
        {/* <Text>{navigator.geolocation.latitude}</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    map:{
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    }
})

export default MapScreen
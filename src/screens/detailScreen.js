import React from 'react'
import {Text , Image , Button, View, StyleSheet, Dimensions} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

const DetailScreen = ({navigation})=>{
const item = navigation.getParam('id')

const addressArr = item.location.display_address
let address = ""
const cat = []

addressArr.forEach(item => {
    address += item + ", "
});

item.categories.forEach(item => {
    console.log(item.title);
    cat.push(<li>{item.title}</li>)
});


console.log(item);


return <View style = {styles.background}>
    <Image source={item.image_url?{uri:item.image_url}:{uri:'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png'}}  style={styles.imageTag}/>
    <Text style = {styles.heading}>{item.name}</Text>
    <Text style = {styles.timing}>{address}</Text>
    <Text style = {styles.timing}>{(item.is_closed) ? "Closed" : "Open now"}</Text>
    
    <View style = {styles.outerCircle}>
        <View style = {styles.circle}>
            <Text style = {styles.font}>{item.rating}</Text>
            <Text style = {styles.font}>Rating</Text>
        </View>
        <View style = {[styles.circle, styles.reviewCircle]}>
            <Text style = {styles.font}>{item.review_count}</Text>
            <Text style = {styles.font}>reviews</Text>
        </View>
    </View>

    {/* <Text>
        {cat}
    </Text> */}


    <View style={styles.btnDirections}>
        <TouchableHighlight onPress = {() => navigation.navigate('MapScreen', {coordinates: item.coordinates})}>
            <Button title="Get Directions" color="white"/>
        </TouchableHighlight>
    </View>
</View>

}

export default DetailScreen

const styles = StyleSheet.create ({
    imageTag:{
        height:230,
        width:Dimensions.get('window').width - 20,
        borderRadius:5,
        marginRight:10,
        resizeMode: "cover",
    },
    heading: {
        fontSize: 30,
        fontWeight: "bold",
        color: 'white',
        paddingVertical: 10,
    },
    background: {
        backgroundColor: "black",
        // height: Dimensions.get('window').height,
        flex: 1,
        padding: 10,
    },
    btnDirections: {
        // right: 0,
        position: "absolute",
        backgroundColor: '#eb9500',
        fontWeight: "bold",
        bottom: 50,
        right: 20,
    },
    timing:{
        fontSize: 20,
        color: 'white',
    },
    outerCircle:{
        flexDirection: "row",
        marginTop: 30,
        marginBottom: 20,
    },
    circle: {
        justifyContent: "center",
        backgroundColor: "yellow",
        height: 120,
        width: Dimensions.get('window').width/2 - 80,
        borderRadius: 80,
        alignItems: "center",
        marginLeft: 40,
    },
    font:{
        fontSize: 20,
        fontWeight: "bold",
    },
    reviewCircle: {
        backgroundColor: "purple",
    }
})
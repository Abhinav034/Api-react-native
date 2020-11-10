import React from 'react'
import {Text , Image , Flatlist, View} from 'react-native'

const DetailScreen = ({navigation})=>{
const id = navigation.getParam('id')

return <View>

<Text>{id}</Text>

</View>

}

export default DetailScreen
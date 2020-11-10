import React from 'react'
import {View , StyleSheet , TextInput} from 'react-native'
import { EvilIcons } from '@expo/vector-icons';


const Search = ({value , onSearch , onEndEditing})=>{

return <View style={style.direction}>
    <EvilIcons name="search" size={30} color="#eb9500" style={{marginVertical:9}} />
<TextInput style={style.search} 
placeholder="What's Nearby..." 
placeholderTextColor="#eb9500"
value={value} 
onChangeText={(searchText)=>onSearch(searchText)}
onEndEditing={onEndEditing}
autoCapitalize='none'
autoCorrect={false}
></TextInput>
</View>

}


const style = StyleSheet.create({
        search:{  
            height: 40,
            flex: 1,
            borderRadius:5,
            paddingHorizontal:2, 
           fontSize:17,
           backgroundColor: '#2b2b2b'
        },
        direction:{
            flexDirection:'row',
            borderColor:'#2b2b2b',
            borderWidth: 1,
            backgroundColor: '#2b2b2b',
            borderRadius:5,
            marginVertical:5,
            marginHorizontal:5
        }
})

export default Search
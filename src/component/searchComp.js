import React from 'react'
import {View , StyleSheet , TextInput} from 'react-native'
import { EvilIcons } from '@expo/vector-icons';


const Search = ({value , onSearch , onEndEditing})=>{

return <View style={style.direction}>
    <EvilIcons name="search" size={30} color="black" style={{marginVertical:9}} />
<TextInput style={style.search} 
placeholder="Search Here" 
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
           fontSize:17
        },
        direction:{
            flexDirection:'row',
            borderColor:'#dbdbdb',
            borderWidth: 1,
            backgroundColor: '#f0EEEE',
            borderRadius:5,
            marginVertical:5,
            marginHorizontal:5
        }
})

export default Search
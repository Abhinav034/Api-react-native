import React , {useState} from 'react'
import {View , Text, FlatList , Image, StyleSheet} from 'react-native'
import SearchBar from '../component/searchComp'
import searchHook from '../hooks/searchHook'
const SearchScreen = ()=>{

const [search , userSearch] = useState('')

const [fetchRequest , error , result] = searchHook()

const styles = StyleSheet.create({
    imageTag:{
        height:200,
         width:400,
         
    },
    addressTag:{
        fontSize: 20,
        paddingHorizontal:5, 
        marginVertical:10,
    },
    reviewTag:{
        fontSize: 15,
        paddingHorizontal:5, 
        marginVertical:10,
        color: '#c47900'
    }
})


return <View>
<SearchBar value={search} onSearch={(searchText)=> userSearch(searchText)} onEndEditing={()=>fetchRequest(search)}/>
{error?<Text>{error}</Text>:null}
<FlatList
data = {result}
renderItem={({item})=>{
    return <View>
<Image source={item.image_url?{uri:item.image_url}:{uri:'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png'}}  style={styles.imageTag}/>
<Text style={styles.addressTag}>{item.location.address1}</Text>
<Text style={styles.reviewTag}>Average of:{item.rating} stars from {item.review_count} reviews </Text>
 </View>

}}
></FlatList>
</View>

}

export default SearchScreen
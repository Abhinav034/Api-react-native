import React , {useState , useEffect} from 'react'
import {View , Text, FlatList , Image, StyleSheet, Dimensions , TouchableOpacity} from 'react-native'
import SearchBar from '../component/searchComp'
import searchHook from '../hooks/searchHook'

const SearchScreen = ({navigation})=>{

const [search , userSearch] = useState('')
const [fetchRequest , error , result] = searchHook()

const styles = StyleSheet.create({
    imageTag:{
        height:200,
         width:Dimensions.get('window').width-5,
         borderRadius:5,
         marginRight:10,
         resizeMode: "cover" 
    },
    addressTag:{
        fontSize: 20,
        paddingHorizontal:5, 
        marginVertical:10,
        color:'#fff'
    },
    reviewTag:{
        fontSize: 15,
        paddingHorizontal:5, 
        marginVertical:10,
        color: '#eb9500'
    },
    viewTag:{
        borderColor: 'grey',
        borderRadius: 5,
        borderWidth: 1,
        marginVertical: 5,
        marginLeft:2,
        marginRight:2,
        backgroundColor:'#2b2b2b'
    },
})


return <View style={{backgroundColor:'#000'}}>
<SearchBar value={search} onSearch={(searchText)=> userSearch(searchText)} onEndEditing={()=>fetchRequest(search)}/>
{error?<Text style={styles.reviewTag}>{error}</Text>:null}
<FlatList
data = {result}
renderItem={({item})=>{
    return <TouchableOpacity onPress={()=>navigation.navigate('DetailScreen',{id: item})}>
        <View style = {styles.viewTag}>
            <Image source={item.image_url?{uri:item.image_url}:{uri:'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png'}}  style={styles.imageTag}/>
            <Text style={styles.addressTag}>{item.name}</Text>
            <Text style={styles.addressTag}>{item.location.address1}</Text>
            <Text style={styles.reviewTag}>Average of:{item.rating} stars from {item.review_count} reviews </Text>
        </View>


    </TouchableOpacity>
}}
></FlatList>
</View>

}

export default SearchScreen
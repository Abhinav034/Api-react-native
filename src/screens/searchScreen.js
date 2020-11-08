import React , {useState , useEffect} from 'react'
import {View , Text, FlatList , Image, StyleSheet} from 'react-native'
import SearchBar from '../component/searchComp'
import axios from '../api/yelp'
var count = 0
const SearchScreen = ()=>{

const [search , userSearch] = useState('')
const [result , setResults] = useState([])

const fetchRequest = async ()=>{
   const response = await axios.get('/search' , {
        params:{
           limit:50,
           term: search,
           location:'mississauga' 
        }
    })
     setResults(response.data.businesses)
}

useEffect(()=>{
  initialRequest()
})

const initialRequest = async()=>{

    if(count<1){
        const response = await axios.get('/search' , {
            params:{
                limit:50,
                term: 'shops',
                location:'mississauga' 
             }
        })
    
        setResults(response.data.businesses)
        count++

    }
}

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
<SearchBar value={search} onSearch={(searchText)=> userSearch(searchText)} onEndEditing={fetchRequest}/>
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
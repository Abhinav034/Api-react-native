import React , {useState} from 'react'
import {View , Text, FlatList , Image} from 'react-native'
import SearchBar from '../component/searchComp'
import axios from '../api/yelp'
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



return <View>
<SearchBar value={search} onSearch={(searchText)=> userSearch(searchText)} onEndEditing={fetchRequest}/>
<FlatList
data = {result}
renderItem={({item})=>{
    return <View>
<Image source={{uri:item.image_url}}  style={{height:100 , width:100}}/>
<Text>{item.location.address1}</Text>
    </View>


}}
></FlatList>
</View>

}

export default SearchScreen
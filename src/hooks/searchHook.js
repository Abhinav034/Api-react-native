import yelp from '../api/yelp'
import React , {useState , useEffect} from 'react'
export default function searchHook (){

    const [result , setResults] = useState([])
    const [error , setError] = useState(null)
    const [currentLocation , setLocation] = useState({
        lat: 43.65,
        long:-79.38
    })
    const fetchRequest = async (search)=>{
       try {
        const response = await yelp.get('/search' , {
            params:{
               limit:50,
               term: search,
               latitude:currentLocation.lat,
               longitude:currentLocation.long
            }
        })
         setResults(response.data.businesses)
         setError(null)
       } catch (error) {
          setError('Unable to fetch 404!')
       }
    }
    
    
    useEffect(()=>{
        let locationOptions = {
            enableHighAccuracy: true,
            timeOut: 20000,
            maximumAge: 60*60
        }
       navigator.geolocation.getCurrentPosition(gotLocation , gotError , locationOptions)
       initialRequest()
    },[])

    const gotLocation = (location)=>{
         setLocation({
            lat: location.coords.latitude,
            long: location.coords.longitude
        })
        console.log(location)
        }
        const gotError = ()=>{
        setError('Unable to fetch location')
        }
    
    const initialRequest = async()=>{
           try {
            const response = await yelp.get('/search' , {
                params:{
                    limit:50,
                    term: 'shops',
                    latitude:currentLocation.lat,
                    longitude:currentLocation.long
                 }
            })
        setResults(response.data.businesses)
        setError(null)
           } catch (error) {
            setError('Unable to fetch 404!')
           }
    }

    return [fetchRequest ,error,result ]
}
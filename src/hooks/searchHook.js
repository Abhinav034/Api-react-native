import yelp from '../api/yelp'
import React , {useState , useEffect} from 'react'

export default function searchHook (){

    const [result , setResults] = useState([])
    const [error , setError] = useState(null)
    
    const fetchRequest = async (search)=>{
       try {
        const response = await yelp.get('/search' , {
            params:{
               limit:50,
               term: search,
               location:'mississauga' 
            }
        })
         setResults(response.data.businesses)
         setError(null)
       } catch (error) {
          setError('Unable to fetch 404!')
       }
    }
    
    
    useEffect(()=>{
      initialRequest()
    },[])
    
    const initialRequest = async()=>{
           try {
            const response = await yelp.get('/search' , {
                params:{
                    limit:50,
                    term: 'shops',
                    location:'mississauga' 
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
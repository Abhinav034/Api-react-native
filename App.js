import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/searchScreen'
import DetailScreen from './src/screens/detailScreen'
import MapScreen from './src/screens/map'

const navigator = createStackNavigator({
  SearchScreen:SearchScreen,
  DetailScreen:DetailScreen,
  MapScreen: MapScreen,
},{
  initialRouteName: "SearchScreen",
  defaultNavigationOptions:{
    title: "Near You",
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#000'
    },
    
  }
  
})
export default createAppContainer(navigator)


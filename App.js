import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/searchScreen'
import DetailScreen from './src/screens/detailScreen'
const navigator = createStackNavigator({
  SearchScreen:SearchScreen,
  DetailScreen:DetailScreen
},{
  initialRouteName: "SearchScreen",
  defaultNavigationOptions:{
    title: "React Project"
  }
  
})
export default createAppContainer(navigator)


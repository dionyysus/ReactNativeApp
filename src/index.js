/**
 * @format
 */

import {StatusBar} from 'react-native';
import Home from './screens/Home/Home';
import OnBoard from './screens/OnBoard/OnBoard';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import colors from './consts/colors';
import Cart from './screens/Cart/Cart';


const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={colors.dark} />
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="OnBoard" component={OnBoard} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

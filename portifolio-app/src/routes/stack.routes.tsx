import { createStackNavigator } from "@react-navigation/stack"; 

import Home from '../screens/Home/Home'
import Skills from "../screens/Skills/Skills";

const Stack = createStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>

            <Stack.Screen name="Skills" component={Skills} />
        </Stack.Navigator>
    )
}
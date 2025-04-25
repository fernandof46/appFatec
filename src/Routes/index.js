import { createStackNavigator } from "@react-navigation/stack";
import Book from '../pages/Book';
import Calendar from '../pages/Agendamento';
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Sobre from "../pages/Sobre";
import Agendamento from "../pages/Agendamento";

const Stack = createStackNavigator();

const headerStyle = {
    backgroundColor: '#C6C6C6',
    marginBottom: 3,
   
};

const headerTitleStyle = {
    fontSize: 15,
    fontWeight: "bold",
    color: 'black',
};

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: true,
                    title: 'Login',
                    headerStyle: headerStyle,
                    headerTitleStyle: headerTitleStyle,
                    headerTintColor: 'black',
                }}
            />
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{
                    headerShown: true,
                    title: 'Seja bem-vindo(a)!!', 
                    headerStyle: headerStyle,
                    headerTitleStyle: headerTitleStyle,
                    headerTintColor: 'black',
                }}
            />
            
            <Stack.Screen
                name="Agendamento"
                component={Agendamento}
                options={{
                    headerShown: true,
                    title: 'Calendário',
                    headerStyle: headerStyle,
                    headerTitleStyle: headerTitleStyle,
                    headerTintColor: 'black',
                }}
            />
            <Stack.Screen
                name="Book"
                component={Book}
                options={{
                    headerShown: true,
                    title: 'Agenda',
                    headerStyle: headerStyle,
                    headerTitleStyle: headerTitleStyle,
                    headerTintColor: 'black',
                }}
            />
            <Stack.Screen
                name="Sobre"
                component={Sobre}
                options={{
                    headerShown: true,
                    title: 'Sobre',
                    headerStyle: headerStyle,
                    headerTitleStyle: headerTitleStyle,
                    headerTintColor: 'black',
                }}
            />
            
        </Stack.Navigator>
    );
}
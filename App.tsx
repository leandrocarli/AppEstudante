import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/Home";
import React from "react";
import Add from "./src/components/aluno/input/add";
import Edit from "./src/components/aluno/input/Edit";
import Listar from "./src/components/aluno/list/List";


const Stack = createNativeStackNavigator ();

function navigationApp(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Novo" component={Add}/>
        <Stack.Screen name="Editar" component={Edit}/>
        <Stack.Screen name="Listar" component={Listar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = navigationApp;
export default App;
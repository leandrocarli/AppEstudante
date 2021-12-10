import React from "react";
import { isTemplateLiteral } from "@babel/types";
import { FlatList, Text, View } from "react-native";
import { database } from "../../Home";
import firestore from '@react-native-firebase/firestore';
import { Aluno } from "../../../models/Aluno";


interface Input{
    navigation: any
}

function atualizarDados(){

    firestore()
    .collection('estudante')
    .onSnapshot( doctument =>{

        if(database.length > 0) 
            database.splice(0, database.length);
        
        doctument.docs.map((doc) => {
            database.push(doc.data() as Aluno );
        });
        console.log(database);
    });
}


const Listar = ({ navigation } : Input) => {

    React.useEffect(() => {
        const subscribe = navigation.addListener('focus',
        atualizarDados
        );
        return subscribe;
    }, [navigation]);



    return (
        <View style={{ flex: 1 }}>
            <Text>Cadastros</Text>
            <FlatList 
            extraData={[{}]}
            data= {database}
            renderItem={
                ({ item }) => 
                    <Text> {item.nome} </Text>
                }
            />
        </View>
    );
};
export default Listar;
import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import Form from "./Form";
import { database } from "../../Home";
import { Aluno } from "../../../models/Aluno";


function salvar ( aluno: Aluno ){
    console.log("Novo aluno: ",aluno);
    database.push(aluno);
    console.log("DATABASE: ",database);
}


const Add = () => {
    const [aluno, setAluno] = useState<Partial<Aluno>>({}); 


    return (
        <View>
            <Form aluno={aluno as Aluno} setAluno={setAluno} />
            <Button title = 'Salvar'
            onPress={() => {
                salvar(aluno)
            }
        }/>
        </View>
    );
}

export default Add;
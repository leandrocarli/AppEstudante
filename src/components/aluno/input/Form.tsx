import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Aluno } from "../../../models/Aluno";
import DateField from 'react-native-datefield';

interface Input {
    aluno: Aluno
    setAluno: any
};


const Form = ({aluno, setAluno}: Input) => {

    return (
        <View>
            <TextInput placeholder="Nome do aluno"
            value={aluno.nome}
            onChangeText={ text => setAluno ({
                ...aluno,
                nome: Text
            })}
            />
            <TextInput placeholder="Sexo do aluno"
            value={aluno.sexo}
            onChangeText={ text => setAluno ({
                 ...aluno,
                 sexo: Text
             })}
            />
            <TextInput placeholder="Turma do aluno"
            value={aluno.turma}
            onChangeText={ text => setAluno ({
                 ...aluno,
                 turma: Text
             })}
            />
            <DateField 
            defaultValue={aluno.dataNasc}
            labelDate='Dia'
            labelMonth='Mês'
            labelYear='Ano'
            onSubmit={data => setAluno({
            ...aluno,
            dataNasc: data
            })}
            />
            <TextInput placeholder="Endereço do aluno"
            value={aluno.endereco}
            onChangeText={ text => setAluno ({
                 ...aluno,
                 endereco: Text
             })}
            />
            <TextInput placeholder="Filiação do aluno"
            value={aluno.filiacao}
            onChangeText={ text => setAluno ({
                 ...aluno,
                 filiacao: Text
             })}
            />

        </View>
    );
};
export default Form;
import React, { useState } from "react";
import { Button, View } from "react-native";
import { Aluno } from "../../../models/Aluno";
import Form from "./Form";

function editar(){
    console.log("Editar");
}

function Edit(){
const [aluno, setAluno] = useState<Partial<Aluno>>({
    nome: 'Leandro',
    sexo: 'Masculino',
    turma: '1',
    dataNasc: new Date(1992,11,16)
    }); 

    return (<View>
        <Form aluno={aluno as Aluno} setAluno={setAluno} />
        <Button
            title="Salvar Alterações"
            onPress={ editar}
        />
    </View>);
}

export default Edit;
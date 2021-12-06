import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import ResultImc from "./ResultImc/";
import styles from './style';

export default function Form(props) {

const [height, setHeight] = React.useState(null);
const [weight, setWeight] = React.useState(null);
const [messageImc, setMessageImc] = useState("preencha o peso e altura");
const [imc, setImc] = useState(null);
const [textButton, setTextButton] = useState("Calcular");
const [erroMessage, setErroMessage] = useState(null);

function imcCalculator(){
    return setImc((weight/(height * height)).toFixed(2));
}

function verificationImc(){
    if (imc == null) {
        setErroMessage('campo obrigatório')
    }
}

function validationImc(){
    if(weight != null && height != null) {
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular Novamente")
        setErroMessage(null)
        return
    }
    verificationImc()
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("preencha o peso e altura")
}

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.fomrLabel}>Altura</Text>
                <Text style={styles.erroMessage}>{erroMessage}</Text>
                <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder='Ex. 1.75'
                keyboardType='numeric'
                />
                <Text style={styles.fomrLabel}>Peso</Text>
                <Text style={styles.erroMessage}>{erroMessage}</Text>
                <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder='Ex. 75.365'
                keyboardType='numeric'
                />
                <TouchableOpacity
                style={styles.ButtonCalculator}
                onPress={() => {
                    validationImc()
                }}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}
import React from "react";
import  { View, Text, StyleSheet} from 'react-native';

export default function ResultImc(props) {
    return (
        <View style={estilo.resultImc}>
            <Text style={estilo.information}>{props.messageResultImc}</Text>
            <Text style={estilo.numberImc}>{props.resultImc}</Text>
        </View>
    );
}

const estilo = StyleSheet.create({
     resultImc: {
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: 'center',
        width: '100%',
    }, 

    numberImc: {
        fontSize: 48,
        color: '#ff0043',
        fontWeight: 'bold'
    },

    information: {
        fontSize: 18,
        color: '#ff0043',
        fontWeight: 'bold',
    }
})
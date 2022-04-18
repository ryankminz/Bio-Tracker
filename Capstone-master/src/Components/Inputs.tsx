import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

//@ts-nocheck
export interface IInputProps {
    value: any;
    setValue: any;
    placeholder: any;
    secureTextEntry: any;
    containerType: any;
}



const Input: React.FC<IInputProps> = ({ value, setValue, placeholder, secureTextEntry, containerType }) => {
    //Code heres

    //Html here
    return (
        <View style={[styles.container, styles[`container${containerType}`]]} >
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        width: '95%',
        borderColor: '#CFCFCF',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    input: {
        textAlign: 'center',
    },
    containerReport:{
        height:200,
        backgroundColor: '#FFFFFF',
        width: '95%',
        borderColor: '#CFCFCF',
        borderWidth: 1,
        borderRadius: 5,
        textAlign:'left'
    }
})


export default Input;
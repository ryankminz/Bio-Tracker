// @ts-nocheck
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


export interface IButtonProps {
    onPress: any,
    text: any,
    containerType: any,
    textType: any,
}


const Button: React.FC<IButtonProps> = ({ onPress, text, containerType, textType }) => {
    //Code here

    //Html here
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, styles[`container${containerType}`]]}>
            <Text style={[styles.text, styles[`text${textType}`]]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
    },
    text: {
        textAlign: "center",
        borderColor: "#c06eff",
        color: 'black',
    },
    containerSave: {
        marginTop: 50,
        backgroundColor: '#403AFF',
        width: '30%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 10
    },
    textWhite: {
        color: 'white'
    },
    containerCancel: {
        backgroundColor: '#FF4C4C',
        width: '30%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 10
    },
    containerCustom:{
        backgroundColor:'#08bdf4',
        borderColor:'black',
        borderWidth:.5,
        borderRadius:20,
        width:'40%',
        
        alignSelf: 'center'
    },
    containerMeal:{
        backgroundColor:'#08bdf4',
        borderColor:'black',
        borderWidth:.5,
        borderRadius:20,
        width:'100%',
        
        alignSelf: 'center'
    },
    containerCalendar:{
        backgroundColor:'#08bdf4',
        borderColor:'black',
        borderWidth:.5,
        width:'50%',
        alignSelf: 'center'
    },
    containerHelp:{
        backgroundColor:'#08bdf4',
        borderColor:'black',
        borderWidth:.5,
        width:'95%',
        alignSelf: 'center',
        
    },
    containerBack:{
        backgroundColor:'#FF4C4C',
        borderColor:'black',
        borderWidth:.5,
        width:'25%'
    },
    containerSubmit:{
        marginTop: 10,
        backgroundColor: '#403AFF',
        width: '30%',
        alignSelf:'flex-end'
    }

})

export default Button;
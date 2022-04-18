import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {  Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import Button from '../../Components/Buttons';
import Input from "../../Components/Inputs";

const Report = () => {
    //Code here
    const navigation = useNavigation();
    const onBackPress = () => {
        navigation.navigate(`Help` as never, {} as never);
      };

    //Html here
    return (
        <View>
        <Text style={{alignSelf:'center', fontSize:30}}>Report an issue</Text>
        <Input
        placeholder="Report Issue"
          value=''
          setValue=''
          secureTextEntry={null}
          containerType='Report'/>
          <Button
          text="Submit"
          onPress={onBackPress}
          containerType="Submit"
          textType="White"
        />

        
        <View style={{marginTop:240}}>
        <Button
          text="Back"
          onPress={onBackPress}
          containerType="Back"
          textType="White"
        />
        </View>
      </View>
        
    );
};


export default Report;
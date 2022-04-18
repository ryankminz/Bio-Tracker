import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, StyleSheet, Alert, StatusBar } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";
import Input from "../../Components/Inputs";
import SQLite from "react-native-sqlite-storage";
import Button from '../../Components/Buttons';

//npm install @react-native-picker/picker --save

const db = SQLite.openDatabase(
  { name: "LocalBioTrackerDB" },
  () => { },
  (err) => {
    console.log(err);
  }
);


const AddPrescription = () => {

  const navigation = useNavigation();

  //Prescription variables
  const [prescriptionName, setprescriptionName] = useState("");
  const [numOfPills, setNumOfPills] = useState("");
  const [frequency, setFrequency] = useState("");
  const [information, setInformation] = useState("");

    //add prescription to DB
    const addPrescriptiondb = () => {
      db.executeSql(
        "INSERT INTO Prescriptions (PrescriptionName, NumOfPills, Frequency, Information) VALUES (?,?,?,?)",
        [prescriptionName, "# of Pills: " + numOfPills, "Frequency:" + frequency, "Information:" + information]
      );
      console.log(prescriptionName, "# of Pills: " + numOfPills, "Frequency:" + frequency + " " + "Information:" + information);
      navigation.navigate('CalendarScreen' as never);
    };

    const cancel = () => {
      navigation.navigate('CalendarScreen' as never);

  };

  //Html here
  return (
    <View style={styles.root}>
      <StatusBar hidden />
      <SafeAreaView>

        <Input
          placeholder="Enter Prescription Name"
          value={prescriptionName}
          setValue={setprescriptionName}
          secureTextEntry={null}
          containerType=''
        />
        <Input
          placeholder="Enter Number of Pills"
          value={numOfPills}
          setValue={setNumOfPills}
          secureTextEntry={null}
          containerType=''
        />
          <Text style={styles.frequency}>
            Frequency:
          </Text>
          <Picker style={styles.picker}
            selectedValue={frequency}
            onValueChange={(itemValue, itemIndex) =>
              setFrequency(itemValue)}
          >
            <Picker.Item label="Daily" value="daily" />
            <Picker.Item label="Twice a Day" value="twice a Day" />
            <Picker.Item label="Weekly" value="Weekly" />
          </Picker>
        <Input
          placeholder="information"
          value={information}
          setValue={setInformation}
          secureTextEntry={null}
          containerType='details'
        />

      <View style={styles.buttonContainer}>
        <Button
          text="Add Prescription"
          onPress={addPrescriptiondb}
          containerType='Save'
          textType='White'
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          text="Cancel"
          onPress={cancel}
          containerType='Cancel'
          textType='White'
        />
      </View>

      </SafeAreaView>
    </View>



  );
};

const styles = StyleSheet.create({
  frequency: {
    margin: 12,
    alignSelf: "center",
    fontSize: 20,
  },
  picker: {
    width: 200,
    alignSelf: "center",
  },
  root: {
    flex: 1,
    padding: 10,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
});

export default AddPrescription;
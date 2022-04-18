import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, StyleSheet, Alert, Dimensions, StatusBar } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Button from '../../Components/Buttons';
import Input from "../../Components/Inputs";
import SQLite from "react-native-sqlite-storage";
import { Calendar } from 'react-native-calendars';
import { useNavigation } from "@react-navigation/core";

const db = SQLite.openDatabase(
  { name: "LocalBioTrackerDB" },
  () => { },
  (err) => {
    console.log(err);
  }
);

const AddWorkout = () => {

  const navigation = useNavigation();

  //Workout variables
  const [workoutTypeName, setWorkoutTypeName] = useState("");
  const [musclesWorked, setMusclesWorked] = useState("");
  const [frequency, setFrequency] = useState("");
    
  //Workout Types variables
  const [workoutName, setWorkoutName] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");

  const [workoutName2, setWorkoutName2] = useState("");
  const [weight2, setWeight2] = useState("");
  const [reps2, setReps2] = useState("");
  const [sets2, setSets2] = useState("");


    //add prescription to DB
    const addWorkoutdb = () => {
      db.executeSql(
        "INSERT INTO Workouts (WorkoutTypeName, MusclesWorked, Frequency) VALUES (?,?,?)",
        [workoutTypeName, "Muscles Worked:" + musclesWorked, "Frequency:" + frequency]
      );
      console.log(workoutTypeName, "Muscles Worked:" + musclesWorked, "Frequency:" + frequency);
      navigation.navigate('CalendarScreen' as never);

      db.executeSql(
        "INSERT INTO WorkoutTypes (WorkoutName, Weight, Reps, Sets ) VALUES (?,?,?,?)",
        [workoutName, "Weight:" + weight, "Reps:" + reps, "Sets:" + sets]
      );

      db.executeSql(
        "INSERT INTO WorkoutTypes (WorkoutName, Weight, Reps, Sets ) VALUES (?,?,?,?)",
        [workoutName2, "Weight:" + weight2, "Reps:" + reps2, "Sets:" + sets2, ]
      );
    };

    const cancel = () => {
        navigation.navigate('CalendarScreen' as never);

    };

    const newInputField = () => {
      return(
        <View>

        </View>
      )
    };

  //Html here
  return (
    <View style={styles.root}>
      <StatusBar hidden />
      <SafeAreaView>
        
      <Input
          placeholder="Enter Workout Type Name"
          value={workoutTypeName}
          setValue={setWorkoutTypeName}
          secureTextEntry={null}
          containerType=''
        />
        <Input
          placeholder="Enter Muscles Worked"
          value={musclesWorked}
          setValue={setMusclesWorked}
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
          placeholder="Enter Workout Name"
          value={workoutName}
          setValue={setWorkoutName}
          secureTextEntry={null}
          containerType=''        
          />
          <Input
          placeholder="Weight"
          value={weight}
          setValue={setWeight}
          secureTextEntry={null}
          containerType=''
        />
          <Input
          placeholder="Reps"
          value={reps}
          setValue={setReps}
          secureTextEntry={null}
          containerType=''
        />
          <Input
          placeholder="Sets"
          value={sets}
          setValue={setSets}
          secureTextEntry={null}
          containerType=''
        />

          <Button
            text="Add Workout"
            onPress={addWorkoutdb}
            containerType='Save'
            textType='White'
            />

            <Button
            text="Cancel"
            onPress={cancel}
            containerType='Cancel'
            textType='White'
            />        
        </SafeAreaView>
    </View>


  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  // inputLong: {
  //   height: 120,
  //   margin: 12,
  //   borderWidth: 1,
  //   padding: 10,
  // },
  // wName: {
  //   margin: 12,
  //   fontSize: 20,
  //   fontWeight: "bold"
  // },
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
});


export default AddWorkout;
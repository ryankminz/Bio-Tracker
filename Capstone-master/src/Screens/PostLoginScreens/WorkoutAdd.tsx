import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Alert, StatusBar } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
//npm install @react-native-picker/picker --save


//npm install react-native-dropdown-picker

export interface IAddPrescriptionProps { }



const AddPrescription: React.FC<IAddPrescriptionProps> = (props) => {
    //const [text, onChangeText] = React.useState("Useless Text");
    const pName = "Prescription Name";
    const numPills = "Number of Pills";
    const frequency = "Frequency";
    const details = "Comments & Side Effects"
    const [selectedValue, setSelectedValue] = useState("Daily");

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [items, setItems] = useState([
        { label: 'Daily', value: 'daily' },
        { label: 'Daily', value: 'daily' },
        { label: 'Daily', value: 'daily' },
        { label: 'Daily', value: 'daily' },
        { label: 'Daily', value: 'daily' },
    ])

    const onSavePress = () => {

        Alert.alert('SavePress')

    }
    const onCancelPress = () => {

        Alert.alert('CancelPress')

    }

    //Html here
    return (
        <View style={styles.root}>
            <StatusBar hidden />
            <View style={styles.rightContainer}>
                <Text style={styles.pName}>
                    {pName}
                </Text>
                <TextInput
                    style={styles.input}
                //onChangeText={onChangeText}
                //value={text}
                />
                <Text style={styles.numPills}>
                    {numPills}
                </Text>
                <TextInput
                    style={styles.input}
                //onChangeText={onChangeText}
                //value={text}
                />
                <Text style={styles.frequency}>
                    {frequency}
                </Text>
                <DropDownPicker style={styles.container}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    //@ts-ignore
                    setValue={setValue}
                    setItems={setItems}
                />
            </View>
            <Text style={styles.details}>
                {details}
            </Text>
            <TextInput
                style={styles.inputLong}
            //onChangeText={onChangeText}
            //value={text}
            />
            {/* <Button text="Save" onPress={onSavePress} type='B' typeC='W' />
<Button text="Cancel" onPress={onCancelPress} type='G' typeC='W' /> */}

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
    inputLong: {
        height: 120,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    pName: {
        margin: 12,
        fontSize: 20,
        fontWeight: "bold"
    },
    numPills: {
        margin: 12,

        fontSize: 20,
        fontWeight: "bold"
    },
    frequency: {
        margin: 12,

        fontSize: 20,
        fontWeight: "bold"
    },
    details: {
        margin: 12,

        fontSize: 20,
        fontWeight: "bold"
    },
    container: {
        paddingTop: 40,
        height: 50,
        width: 150,
    },
    rightContainer: {
        paddingLeft: '50%'
    },
    root: {
        flex: 1,
        padding: 10
    }
});

export default AddPrescription;
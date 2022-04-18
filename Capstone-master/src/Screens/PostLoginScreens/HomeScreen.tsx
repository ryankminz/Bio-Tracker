import React, { useEffect, useState } from 'react';
import LineChart from '../../Components/LineChart';
import { FlatList, SafeAreaView, StatusBar, TouchableWithoutFeedback, View, Text, StyleSheet, ScrollView } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'LocalBioTrackerDB' }, () => { }, err => { console.log(err) });

const HomeScreen = () => {
    //Code here
    useEffect(() => {
        createTables();
    })

    const createTables = () => {
        db.executeSql("CREATE TABLE IF NOT EXISTS Prescriptions(PrescriptionID INTEGER PRIMARY KEY AUTOINCREMENT, PrescriptionName TEXT, NumOfPills INT, Frequency INT, Information TEXT);")
        db.executeSql("CREATE TABLE IF NOT EXISTS Workouts(WorkoutID INTEGER PRIMARY KEY AUTOINCREMENT, WorkoutTypeName TEXT, MusclesWorked TEXT, Frequency INT);")
        db.executeSql("CREATE TABLE IF NOT EXISTS WorkoutTypes(WorkoutTypesID INTEGER PRIMARY KEY AUTOINCREMENT, WorkoutName TEXT, Weight INT, Reps INT, Sets INT);")
        db.executeSql("CREATE TABLE IF NOT EXISTS Consumed(ConsumedID INTEGER PRIMARY KEY AUTOINCREMENT, Date TEXT, ItemName TEXT, ItemCalories INT);")
        db.executeSql("CREATE TABLE IF NOT EXISTS FoodType(FoodID INTEGER PRIMARY KEY AUTOINCREMENT, FoodName TEXT, Calories INT, Information TEXT);")
        db.executeSql("CREATE TABLE IF NOT EXISTS BeverageType(BeverageID INTEGER PRIMARY KEY AUTOINCREMENT, BeverageName TEXT, Calories INT, Information TEXT);")
        db.executeSql("CREATE TABLE IF NOT EXISTS AccountInfo(AccInfoID INTEGER PRIMARY KEY AUTOINCREMENT, FirstName TEXT, LastName TEXT, Height TEXT, Weight TEXT)")
    }

    let [consumedItems, setconsumedItems] = useState<any>([]);
    let [calorieAmount, setCalorieAmount] = useState();
    let [workoutItems, setworkoutItems] = useState<any>([]);
    let [prescriptionItems, setPrescriptionItems] = useState<any>([]);

    useEffect(() => {
        db.transaction((tx) => {
            var date = new Date();
            var month = date.getUTCMonth() + 1;
            var day = date.getUTCDate();
            var year = date.getUTCFullYear();
            var current = year + "/" + month + "/" + day;
            //sql for food table
            tx.executeSql(
                "SELECT * FROM Consumed WHERE Date = ?",
                [current],
                (tx, results) => {
                    var item = [] as any;
                    for (let i = 0; i < results.rows.length; i++) {
                        item.push(results.rows.item(i));
                    }
                    setconsumedItems(item);
                },
                (err) => {
                    console.log(err);
                }
            );
        });
    }, [consumedItems]);


    useEffect(() => {
        var date = new Date();
        var month = date.getUTCMonth() + 1;
        var day = date.getUTCDate();
        var year = date.getUTCFullYear();
        var current = year + "/" + month + "/" + day;
        db.transaction((tx) => {
            tx.executeSql('SELECT SUM(ItemCalories) AS calories FROM Consumed WHERE Date = ?',
                [current],
                (tx, results) => {
                    setCalorieAmount(results.rows.item(0).calories);
                },
                (err) => {
                    console.log(err);
                });
        });
    }, [consumedItems]);

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM Workouts",
                [],
                (tx, results) => {
                    var item = [] as any;
                    for (let i = 0; i < results.rows.length; i++) {
                        item.push(results.rows.item(i));
                    }
                    setworkoutItems(item);
                },
                (err) => {
                    console.log(err);
                }
            );
        });
    }, [workoutItems]);

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM Prescriptions",
                [],
                (tx, results) => {
                    var item = [] as any;
                    for (let i = 0; i < results.rows.length; i++) {
                        item.push(results.rows.item(i));
                    }
                    setPrescriptionItems(item);
                },
                (err) => {
                    console.log(err);
                }
            );
        });
    }, [prescriptionItems]);
    let foodListView = () => {
        return (
            <View
                style={{
                    height: 0,
                    width: "100%",
                    backgroundColor: "#808080",
                }}
            />
        );
    };

    const foodOnClick = (item: any) => {
        console.log(
            "Selected Item: " + item.Date + item.ItemName + item.ItemCalories
        );
    };

    //Html here
    return (
        <ScrollView nestedScrollEnabled style={styles.root}>
            <StatusBar hidden />
            <LineChart />
            <View style={{ alignSelf: 'center', }}>
                <Text style={{ fontSize: 16 }}>Calories Today</Text>
                <Text style={{ paddingLeft: "10%", fontSize: 12 }}>{calorieAmount}</Text>
            </View>

            <View style={{ paddingBottom:30}}>
                <SafeAreaView style={{ flex: 1 }}>
                    <Text style={{ alignSelf:'center', fontSize: 20 }}>Consumed items</Text>
                    <FlatList
                        nestedScrollEnabled
                        data={consumedItems}
                        ItemSeparatorComponent={foodListView}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableWithoutFeedback onPress={() => foodOnClick(item)}>
                                <View
                                    key={item.id}
                                    style={{ backgroundColor: "#08bdf4", padding: 10, width: "90%", borderRadius: 10, margin: 10,shadowColor:'black', shadowOffset:{width:0, height:2}, shadowOpacity:1,shadowRadius:5,elevation:3 }}>
                                    <Text> {item.ItemName}</Text>
                                    <Text> Calories: {item.ItemCalories}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                    />
                </SafeAreaView>
                <Text style={{ fontSize: 20, alignSelf: 'center' }}>Workouts</Text>
                <SafeAreaView>
                    <FlatList
                        nestedScrollEnabled
                        data={workoutItems}
                        ItemSeparatorComponent={foodListView}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableWithoutFeedback onPress={() => foodOnClick(item)}>
                                <View
                                    key={item.id}
                                    style={{ backgroundColor: "white", padding: 10, width: "90%", borderRadius: 15, marginBottom: 10, marginTop: 10, alignSelf: 'center' }}>
                                    <Text> Workout Name: {item.WorkoutTypeName}</Text>
                                    <Text> Muscles Worked: {item.MusclesWorked}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                    />
                </SafeAreaView>
                <Text style={{ fontSize: 20, alignSelf: 'center' }}>Prescriptions</Text>
                 <SafeAreaView>
                    <FlatList
                        nestedScrollEnabled
                        data={prescriptionItems}
                        ItemSeparatorComponent={foodListView}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableWithoutFeedback onPress={() => foodOnClick(item)}>
                                <View
                                    key={item.id}
                                    style={{ backgroundColor: "white", padding: 10, width: "90%", borderRadius: 15, marginBottom: 10, marginTop: 10, alignSelf: 'center' }}>
                                    <Text> Name: {item.PrescriptionName}</Text>
                                    <Text> {item.NumOfPills}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                    />
                </SafeAreaView>
            </View>

        </ScrollView>

    );
};
const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 10,
    },
    tinyLogo: {
        height: 40,
        width: 40,
    },
    text: {
        padding: 5,
        marginLeft: 5,
    }
});

export default HomeScreen;
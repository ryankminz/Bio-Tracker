import React, { useEffect, useState } from "react";
import Button from "../../Components/Buttons";
import { StyleSheet, View, Text, SafeAreaView, FlatList, TouchableWithoutFeedback, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../../Components/Search";
import SQLite from "react-native-sqlite-storage";


// import { SearchBar } from 'react-native-screens';

const db = SQLite.openDatabase({ name: 'LocalBioTrackerDB' }, () => { }, err => { console.log(err) });


const AddScreen = () => {
  //Code here
  let [foodItems, setItems] = useState<any>([]);
  let [drinkItems, setDrinkItems] = useState<any>([]);

  useEffect(() => {
    db.transaction((tx) => {
      //sql for food table
      tx.executeSql(
        "SELECT * FROM FoodType",
        [],
        (tx, results) => {
          var food = [] as any;
          for (let i = 0; i < results.rows.length; i++) {
            food.push(results.rows.item(i));
          }
          setItems(food);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }, [foodItems]);

  //sql for beverage table
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM BeverageType",
        [],
        (tx, results) => {
          var drink = [] as any;
          for (let i = 0; i < results.rows.length; i++) {
            drink.push(results.rows.item(i));
          }
          setDrinkItems(drink);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }, [drinkItems]);

  //List view for food
  let foodListView = () => {
    return (
      <View
        style={{
          height: 0.1,
          width: "100%",
          backgroundColor: "#808080",
        }}
      />
    );
  };

  //List view for beverages
  let drinkListView = () => {
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

  const navigation = useNavigation();

  const foodOnClick = (item: any) => {
    console.log(
      "Selected Item: " + item.FoodName + item.Calories + item.Information
    );
    var date = new Date();
    var month = date.getUTCMonth() + 1;
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();
    var current = year + "/" + month + "/" + day;
    db.executeSql('INSERT INTO Consumed (Date, ItemName, ItemCalories) VALUES (?,?,?)',
      [current,"Food: " + item.FoodName, item.Calories])
  };

  const drinkOnClick = (item: any) => {
    console.log(     
      "Selected Item: " + item.BeverageName + item.Calories + item.Information
    );
    var date = new Date();
    var month = date.getUTCMonth() + 1;
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();
    var current = year + "/" + month + "/" + day;
    db.executeSql('INSERT INTO Consumed (Date, ItemName, ItemCalories) VALUES (?,?,?)',
      [current, "Drink: " + item.BeverageName, item.Calories])
  };

  const onCustomPress = () => {
    navigation.navigate(`CustomMeal` as never, {} as never);
  };
  //Html here
  return (
    <View style={styles.root}>
      <StatusBar hidden />
      <SearchBar />
      <Button
        text="Custom Meal"
        onPress={onCustomPress}
        containerType="Custom"
        textType=""
        
      />
      <View style={{ flexDirection: "row", marginTop:10, backgroundColor:'white', borderRadius:10, shadowColor:'black', shadowOffset:{width:0, height:2}, shadowOpacity:1, shadowRadius:3,elevation:10}}>
        <SafeAreaView style={{ justifyContent: "flex-start"}}>
          <Text style={{alignSelf:'center'}}>Food</Text>
          <FlatList
            data={foodItems}
            ItemSeparatorComponent={foodListView}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback onPress={() => foodOnClick(item)}>
                <View
                  key={item.id}
                  style={{ backgroundColor:'#08bdf4' , padding: 10, width: "90%", borderRadius: 10,shadowColor:'black', shadowOffset:{width:0, height:2}, shadowOpacity:1, shadowRadius:3,elevation:10,margin:10 }}>
                
                  <Text> Food Name: {item.FoodName}</Text>
                  <Text> Calories: {item.Calories}</Text>
                  <Text> Information{'\n'}{item.Information}</Text>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        </SafeAreaView>


        <SafeAreaView style={{ justifyContent: "flex-end" }}>
        <Text style={{alignSelf:'center'}}>Beverages</Text>
          <FlatList
            data={drinkItems}
            ItemSeparatorComponent={drinkListView}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback onPress={() => drinkOnClick(item)}>
                <View
                  key={item.id}
                  style={{ backgroundColor:'#08bdf4' ,alignSelf:'center', padding: 10, width: "90%",borderRadius:10,shadowColor:'black', shadowOffset:{width:0, height:2}, shadowOpacity:1,shadowRadius:10,elevation:3,margin:10 }}
                >
                  <Text> Drink Name: {item.BeverageName}</Text>
                  <Text> Calories: {item.Calories}</Text>
                  <Text>Information: {'\n'}{item.Information}</Text>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        </SafeAreaView>
      </View>
    </View>
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
  },
  btn: {},
});

export default AddScreen;

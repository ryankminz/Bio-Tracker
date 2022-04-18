import * as React from 'react';
import { View, Alert, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import { Agenda } from 'react-native-calendars';
import Button from '../../Components/Buttons';
import { useNavigation } from '@react-navigation/core';
import { useState } from 'react';
import { Avatar, Card, Paragraph } from 'react-native-paper';

const timeToString = (time:any) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const DatePicker = () => {
  const navigation = useNavigation();

  const [items, setItems] = useState<any>({});

  const handleWorkout = () => {
    navigation.navigate('WorkoutAdd' as never);
  }

  const handlePrescription = () => {
    navigation.navigate('AddPrescription' as never);
  }
  const loadItems = (day:any) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems:any = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item: any) => {
    return (
      <View style={{marginBottom:5}}>
        <StatusBar hidden />
        <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
          <Card>
            <Card.Content>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Paragraph>{item.name}</Paragraph>
                
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>

      </View>
    );
  };


  return (
    <View style={{flex:1}}>
      <Agenda items={items} loadItemsForMonth={loadItems} renderItem={renderItem}/>
      <Button text="Workout Add" onPress={handleWorkout} containerType='Calendar' textType='' />
      <Button text="Prescription Add" onPress={handlePrescription} containerType='Calendar' textType='' />
    </View>
  );
}



export default DatePicker;
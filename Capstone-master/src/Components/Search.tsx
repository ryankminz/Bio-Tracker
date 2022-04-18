import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

export interface ISearchProps {

}

const Search: React.FC<ISearchProps> = (props) => {
    //Code here

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
    //Html here
    return (
        <Searchbar
            placeholder="Search foods here..."
            onChangeText={onChangeSearch}
            value={searchQuery}
            icon={() => <MaterialCommunityIcons name="magnify" size={30} />}
            children={undefined}
            onPressIn={undefined}
            onPressOut={undefined}
            textAlign={undefined}
            //@ts-ignore
            autoComplete={undefined} />
    );
};

const styles = StyleSheet.create({
    root: {
        borderRadius: 15,
        backgroundColor: "#FFFFFF",
        padding: -5,
        margin: 15
    }
})

export default Search;

function setState(arg0: string): { firstQuery: any; FirstQuery: any; } {
    throw new Error('Function not implemented.');
}

import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {getUsers} from "../services/userServices";
import User from "./User";

const Users = () => {

    const [ users, setUsers ] = useState([])

    useEffect(() => {
        getUsers().then(value => setUsers(value) )
    }, [])
    console.log(users)

    return (
        <View style={styles.base}>
            <FlatList data={users} renderItem={({item}) => <User user={item}/>} keyExtractor={item => '' + item.id}/>
        </View>
    );
};
export default Users;

let styles = StyleSheet.create({
});
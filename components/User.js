import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Users = ({user}) => {

    return (
        <View style={[styles.userBox, styles.margins, styles.sizes, styles.align]}>
            <Text>{user.name}</Text>
        </View>
    );
};
export default Users;

let styles = StyleSheet.create({
    userBox: {
        flex: 1,
        backgroundColor: 'green',
    },
    margins: {
        margin: 5
    },
    sizes: {
        height: 150
    },
    align: {
        justifyContent: 'center'
    }

});
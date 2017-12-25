import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Home extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>This is the home page</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    testStyle: {
        color: 'white',
        backgroundColor: 'red'
    }
});
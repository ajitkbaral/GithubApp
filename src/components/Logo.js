import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default class Logo extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 70, height: 70 }}
                    source={require('../images/github.png')}
                />
                <Text style={styles.logoText}>Welcome to Github</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        padding: 8,
        fontSize: 18,
        color: 'white'
    }
});
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

import Logo from "../components/Logo";
import Form from "../components/Form";

export default class Signup extends Component<{}> {

    login() {
        Actions.login();
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Form type="Create an Account" />
                <View style={styles.signupTextContainer}>
                    <Text style={styles.signupText}>Already have an account? </Text>
                    <TouchableOpacity onPress={this.login}>
                        <Text style={styles.signupButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
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
    signupTextContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    signupText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
    },
    signupButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    }
});
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function Home(props) {

    return (
        <View style={styles.container}>
            <Text>Bonjour {props.userUUID} !</Text>
        </View>
    );
}

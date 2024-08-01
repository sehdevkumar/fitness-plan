import { SplashScreen, Stack } from 'expo-router'
import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import DietType from './DietType';

SplashScreen.preventAutoHideAsync();
function DietPage() {

    return (
        <View style={styles.container}>
            <Text style = {styles.PageTitle}>Select Diet Plan</Text>
            <DietType/>
        </View>
    )
}

export default DietPage




const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 'auto'
    },
    PageTitle: {
        fontWeight: '500',
        fontSize: 20 ,
        marginBottom:2
    }
   
});

import { SplashScreen, Stack } from 'expo-router'
import React, { useEffect } from 'react'
import { Text } from 'react-native'

SplashScreen.preventAutoHideAsync();
function DietPage() {
    useEffect(() => {
        SplashScreen.hideAsync();
    }, []);

    return (
        <>
            <Text>Welcome to the Diet Plan</Text>
        </>
    )
}

export default DietPage

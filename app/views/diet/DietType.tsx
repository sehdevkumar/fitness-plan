import Checkbox, { CheckboxHandle } from '@/app/components/Checkbox';
import React, { useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DietType() {
    const checkboxRef = useRef<CheckboxHandle>(null);

    useEffect(() => {
        console.log("Hey")
    }, [checkboxRef.current])

    return (
        <View style={styles.container}>
            <View style={styles.checkBoxContainer}>
                <Checkbox key={'1'} label='Veg' ref={checkboxRef} onChecked={(e) => { console.log("hey") }} initialChecked={false} />
                <Checkbox key={'2'} label='Non-Veg' ref={checkboxRef} onChecked={(e) => { console.log("hey") }} initialChecked={false} />
                <Checkbox key={'3'} label='All' ref={checkboxRef} onChecked={(e) => { console.log("hey") }} initialChecked={false} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        height:'auto'
    },
    checkBoxContainer: {
        flex: 1,
        height: 'auto',
        flexDirection: 'row',
        alignItems: 'baseline', 
        columnGap: 5
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

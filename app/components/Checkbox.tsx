import { Ionicons } from "@expo/vector-icons";
import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type CheckboxProps = {
    initialChecked?: boolean;
    onChecked?: (event: any) => void,
    label?: string
} & React.AllHTMLAttributes<any>;

export type CheckboxHandle = {
    onChecked: (checked: boolean | ((prevState: boolean) => boolean)) => void;
    getValue: () => boolean;
};

const Checkbox = forwardRef<CheckboxHandle, CheckboxProps>((props, ref) => {
    const [checked, setChecked] = useState(props.initialChecked || false);

    useEffect(() => {
        if (!props.onChecked) {
            return
        }
        props?.onChecked(checked);
    }, [checked])

    useImperativeHandle(ref, () => ({
        onChecked: (checked: boolean | ((prevState: boolean) => boolean)) => {
            setChecked(checked);
        },
        getValue: () => checked,
    }), [checked]);

    return (
        <View style={{display:'flex',flexDirection: 'row',columnGap: 5,alignItems: 'center',height:'auto'}}>
            <Pressable
                style={[styles.checkboxBase, checked && styles.checkboxChecked]}
                onPress={() => setChecked(!checked)}>
                {checked && <Ionicons name="checkmark" size={24} color="white" />}
            </Pressable>
            <Text style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>{props.label}</Text>
        </View>
    );
});

const styles = StyleSheet.create({
    checkboxBase: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'coral',
        backgroundColor: 'transparent',
    },
    checkboxChecked: {
        backgroundColor: 'coral',
    },
    appContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    appTitle: {
        marginVertical: 16,
        fontWeight: 'bold',
        fontSize: 24,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxLabel: {
        marginLeft: 8,
        fontWeight: '500',
        fontSize: 18,
    },
});

export default Checkbox;

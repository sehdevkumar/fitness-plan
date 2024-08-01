import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { LandingPageType } from '../types/app-platform-typings'
import { Image } from 'expo-image'
import { blurhash } from '@/app'
const LandingPageItems: LandingPageType[] = [
    {
        link: 'diet',
        src: '/assets/images/diet.jpg',
        isActive: false,
        name: 'diet'
    },
    {
        link: 'exercise',
        src: '/assets/images/fitness.jpg',
        isActive: false,
        name: 'exercise'
    }
]

function Landing() {

    const [getItmes, setItmes] = useState<LandingPageType[]>([])



    useEffect(() => {

        if (LandingPageItems) {
            setItmes(LandingPageItems);
        }
    }, [])


    return (
        <View style={styles.container}>
            {
                getItmes.map(item => {
                    return (
                        <Pressable  style={styles.pressable} key={item.name}>
                            <Image
                                style={styles.image}
                                source={item.src}
                                placeholder={{ blurhash }}
                                contentFit="cover"
                                transition={1000}
                            />
                            <Text style={styles.paragraph}>{item.name}</Text>
                        </Pressable>

                    )
                })
            }
        </View>
    )
}

export default Landing




const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 40,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paragraph: {
        color: '#FFF',
        zIndex: 2,
        fontSize: 20,
        textTransform: 'uppercase'
    },
    pressable: {
        padding: 4,
        width: 150,
        height: 'auto',
        minHeight: 150,
        cursor: 'pointer',
        display: 'flex',
        rowGap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        shadowOpacity : 0.8
    },
    image: {
        flex: 1,
        borderRadius: 10,
        width: '100%',
        height: '100%',
        backgroundColor: '#0553',
        zIndex: 1
    },
});
import React, { useState, useCallback } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Button from './../Shared/Button'
import { useRouter } from 'expo-router'
import ShimmerPlaceholder from 'react-native-shimmer-placeholder'
import { LinearGradient } from 'expo-linear-gradient'
import { useFocusEffect } from '@react-navigation/native'
import Colors from '../../constant/Colors'

export default function NoCourse() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useFocusEffect(
        useCallback(() => {
            setLoading(true); 
            const timer = setTimeout(() => setLoading(false), 1500); 
            return () => clearTimeout(timer); 
        }, [])
    );

    return (
        <View style={{ marginTop: 20 }}>
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.imageContainer}>
                    {loading ? (
                        <ShimmerPlaceholder
                            style={styles.image}
                            shimmerColors={['#e0e0e0', '#ffffff', '#e0e0e0']} 
                            LinearGradient={LinearGradient} 
                        />
                    ) : (
                        <Image style={styles.image} source={require('./../../assets/images/book.png')} />
                    )}
                </View>

                {loading ? (
                    <ShimmerPlaceholder
                        style={{ width: '100%', height: 30, borderRadius: 5, marginVertical: 10 }}
                        shimmerColors={['#e0e0e0', '#ffffff', '#e0e0e0']}
                        LinearGradient={LinearGradient}
                    />
                ) : (
                    <Text style={{ fontFamily: 'outfit-bold', fontSize: 22, textAlign: 'center', marginBottom: 10 }}>
                        You don't have any course yet
                    </Text>
                )}

                {!loading ? (
                    <>
                        <Button text={'+ Create New One'} onPress={() => router.push('/addCourse')} />
                        <Button text={'Explore Existing Course'} type='outline' />
                    </>
                ) : (
                    <>
                        <ShimmerPlaceholder
                            style={styles.placHolder}
                            shimmerColors={['#e0e0e0', Colors.PRIMARY, '#e0e0e0']}
                            LinearGradient={LinearGradient}
                        />
                        <ShimmerPlaceholder
                            style={styles.placHolder}
                            shimmerColors={['#e0e0e0', Colors.WHITE, '#e0e0e0']}
                            LinearGradient={LinearGradient}
                        />
                    </>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        display: 'flex',
        marginTop: 20
    },
    image: {
        width: 260,
        height: 260
    },
    placHolder:{
        width: '100%', height: 50, borderRadius: 5, marginBottom: 10,borderRadius:50
    }
});
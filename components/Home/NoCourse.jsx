import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Button from './../Shared/Button'

export default function NoCourse() {

    return (
        <View style={{ marginTop: 20 }}>
            <View style={{ display: 'flex', alignItems: 'center',justifyContent:'center' }}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('./../../assets/images/book.png' || "https://via.placeholder.com/200")} />
                </View>
                <Text style={{ fontFamily: 'outfit-bold', fontSize: 22, textAlign: 'center', marginBottom: 10 }}>You don't have any course yet</Text>
                <Button text={'+ Create New One'}/>
                <Button text={'Explore Existing Course'} type='outline'/>

            </View>
        </View>
    )
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
})

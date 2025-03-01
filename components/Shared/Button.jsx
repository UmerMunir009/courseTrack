import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Colors from './../../constant/Colors'

export default function Button({ text, type = 'fill', onPress }) {

    return (
        <TouchableOpacity
        onPress={onPress}
        style={{
            width:'100%',
            padding:15,
            backgroundColor:type=='fill'?Colors.PRIMARY:Colors.WHITE,
            marginBottom:10,
            borderWidth:1,
            borderColor:Colors.PRIMARY
        }}
        >
            <Text style={{textAlign:'center',fontSize:18,color:type=='fill'?Colors.WHITE:Colors.PRIMARY}}>{text}</Text>

        </TouchableOpacity>
    )
}


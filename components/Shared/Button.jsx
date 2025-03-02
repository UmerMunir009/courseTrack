import React, { Component } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import Colors from './../../constant/Colors'

export default function Button({ text, type = 'fill', onPress,indicator }) {

    return (
        <TouchableOpacity
        onPress={onPress}
        style={{
            width:'100%',
            padding:15,
            backgroundColor:type=='fill'?Colors.PRIMARY:Colors.WHITE,
            marginBottom:10,
            borderWidth:1,
            borderColor:Colors.PRIMARY,
            borderRadius:50
        }}
        disabled={indicator}
        >
            {!indicator?
            <Text style={{textAlign:'center',fontSize:18,color:type=='fill'?Colors.WHITE:Colors.PRIMARY,fontFamily:'outfit-bold'}}>{text}</Text>:
            <ActivityIndicator size={'small'} color={type=='fill'?Colors.WHITE:Colors.PRIMARY}/>}

        </TouchableOpacity>
    )
}


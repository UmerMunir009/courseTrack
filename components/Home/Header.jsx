import React, { Component, useContext } from 'react'
import { Text, View } from 'react-native'
import { UserDetailContext } from './../../context/UserDetailContext'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Header() {
    const { userDetail, setUserDetail } = useContext(UserDetailContext)

    return (
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}} >
            <View>
                <Text style={{ fontFamily: 'outfit-bold', fontSize: 25 }}>Hello, {userDetail?.name}</Text>
                <Text style={{ fontFamily: 'outfit',fontSize:18 }}>Let's Get Started! </Text>
            </View>
            <View>
            <Ionicons name="settings-outline" size={32}  />
            </View>
      
      </View >
    )
}
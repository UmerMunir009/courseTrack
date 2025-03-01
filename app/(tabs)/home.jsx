import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from './../../components/Home/Header'
import NoCourse from './../../components/Home/NoCourse'

export default function home () {
  
    return (
      <View style={{backgroundColor:"white",flex:1,padding:15}}>
        <Header/>
        <NoCourse/>
    

      </View>
    )
  }


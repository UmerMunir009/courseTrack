import React, { Component } from 'react'
import { Text, View, FlatList, Image } from 'react-native'
import { imageAssets } from './../../constant/Option'
import Colors from '../../constant/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { PraticeOption } from './../../constant/Option';

export default function PracticeSection() {

    return (
        <View style={{ paddingTop: 20 }}>
           
            <Text style={{ fontFamily: 'outfit-bold', fontSize: 28 }}>Practice </Text>

            <FlatList
            style={{paddingTop:10}}
                data={PraticeOption}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View key={index} style={{  height:150,width:150, borderRadius:10, marginLeft: 10, backgroundColor: Colors.BG_GRAY,position:'relative' }} >
                        <View style={{ height: '100%', width: '100%', borderRadius: 10,padding:0 }}>
                            <Image source={item?.image} style={{ height: '100%', width: '100%', resizeMode: 'cover', borderRadius: 10 }} />
                        </View>

                        <Text style={{padding:9 ,fontFamily:'outfit-bold',fontSize:18,position:'absolute',color:Colors.WHITE}}>{item?.name}</Text>

                        
                        
                

                    </View>
                )}
            />
        </View>
    )
}


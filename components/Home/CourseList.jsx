import React, { Component } from 'react'
import { Text, View, FlatList, Image } from 'react-native'
import { imageAssets } from './../../constant/Option'
import Colors from '../../constant/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CourseList({ CourseList }) {

    return (
        <View style={{ paddingTop: 20 }}>
            <Text style={{ fontFamily: 'outfit-bold', fontSize: 28 }}>Courses </Text>

            <FlatList
            style={{paddingTop:10}}
                data={CourseList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View key={index} style={{  width:300, borderRadius: 10, marginLeft: 10, backgroundColor: Colors.BG_GRAY ,paddingBottom:15 }} >
                        <View style={{ height: 150, width: '100%', borderRadius: 5,padding:0 }}>
                            <Image source={imageAssets[item.banner_image]} style={{ height: '100%', width: '100%', resizeMode: 'cover', borderRadius: 5 }} />
                        </View>

                        <Text style={{padding:5 ,fontFamily:'outfit-bold',fontSize:18}}>{item?.courseTitle}</Text>

                        <View style={{display:'flex',flexDirection:'row',alignItems:'center',paddingHorizontal:5,gap:9}}>
                        <Ionicons name="book-outline" size={20} color={Colors.GRAY} />
                        <Text style={{ fontFamily:'outfit-bold',color:Colors.GRAY}}>{item?.chapters?.length} Chapters</Text>
                        </View>
                        
                

                    </View>
                )}
            />
        </View>
    )
}


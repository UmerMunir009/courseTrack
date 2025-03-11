import React, { Component } from 'react'
import { Text, View, FlatList, Image, StyleSheet, } from 'react-native'
import { imageAssets } from './../../constant/Option'
import Colors from '../../constant/Colors'






export default function CourseProgress({ CourseList }) {

    return (
        <View style={{ paddingTop: 20 }}>
            <Text style={{ fontFamily: 'outfit-bold', fontSize: 28 }}>Progress </Text>

            <FlatList
                style={{ paddingTop: 10 }}
                data={CourseList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View key={index} style={styles.mainContainer} >
                        <View style={styles.imgContainer}>
                            <Image source={imageAssets[item.banner_image]} style={styles.imgStyle} />
                        </View>
                        <View style={{ padding: 8, flex: 1 }}>
                            <Text numberOfLines={2} style={{ fontFamily: 'outfit-bold', fontSize: 20, flexWrap: 'wrap', }}>{item?.courseTitle}</Text>
                            <Text style={{ fontFamily: 'outfit-bold', color: Colors.GRAY }}>{item?.chapters?.length} Chapters</Text>
                        </View>
                        <View>
                            

                        </View>





                    </View>
                )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: { width: 320, borderRadius: 10, marginLeft: 10, backgroundColor: Colors.BG_GRAY, paddingBottom: 15, paddingHorizontal: 10, paddingTop: 10, display: 'flex', flexDirection: 'row' },
    imgContainer: { height: 80, width: 80, borderRadius: 5, padding: 0 },
    imgStyle: { height: '100%', width: '100%', resizeMode: 'cover', borderRadius: 5 }
})



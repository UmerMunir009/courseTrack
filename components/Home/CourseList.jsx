import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'

export default function CourseList({ CourseList }) {

    return (
        <View style={{ paddingTop: 20 }}>
            <Text style={{ fontFamily: 'outfit-bold', fontSize: 28 }}> Courses </Text>

            <FlatList
                data={CourseList}
                renderItem={({ item, index }) => (
                    <View key={index} >
                        <Text>{item?.courseTitle}</Text>
                        <Text>{item?.description}</Text>

                    </View>
                )}
            />
        </View>
    )
}


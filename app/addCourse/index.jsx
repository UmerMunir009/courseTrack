import React, { Component, useState, useCallback } from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native'
import ShimmerPlaceholder from 'react-native-shimmer-placeholder'
import { LinearGradient } from 'expo-linear-gradient'
import { useFocusEffect } from '@react-navigation/native'
import Colors from '../../constant/Colors'
import Button from './../../components/Shared/Button'
import { GenerateTopicsAI } from './../../config/AiModel'
import Prompt from './../../constant/Prompt'

export default function NewCourse() {

    const [loading, setLoading] = useState(true);
    const [indicator, setIndicator] = useState(false);
    const [userInput, setUserInput] = useState();
    const [courseTopics, setCouseTopics] = useState([]);

    useFocusEffect(
        useCallback(() => {
            setLoading(true);
            const timer = setTimeout(() => setLoading(false), 1000);
            return () => clearTimeout(timer);
        }, [])
    );
    const generateCourse = async () => {
        console.log('model activated')
        setIndicator(true)
        const PROMPT = userInput + Prompt.IDEA
        const aiResponse = await GenerateTopicsAI.sendMessage(PROMPT)
        const topicIdeas = JSON.parse(aiResponse.response.text());
        console.log(topicIdeas?.course_titles)
        setCouseTopics(topicIdeas?.course_titles)
        setIndicator(false)
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 20, backgroundColor: Colors.WHITE, flex: 1 }}>
            <Text style={styles.mainTxt}>Create New Course </Text>
            <Text style={styles.subMainTxt}>What you want to learn today ?</Text>
            <Text style={styles.subTxt}>Write what course you want to create (Ex. Learn python, java, object oriented programming, digital marking etc...)</Text>
            {!loading ?
                <TextInput
                    style={styles.inputtxt}
                    onChangeText={(value) => setUserInput(value)}
                    numberOfLines={3}
                    multiline={true}
                    placeholder='Write what you want to explore or learn...' /> :
                <ShimmerPlaceholder
                    style={styles.inputtxt}
                    shimmerColors={['#e0e0e0', '#ffffff', '#e0e0e0']}
                    LinearGradient={LinearGradient}

                />
            }

            {!loading ?
                <Button text={'Generate Course'} onPress={() => generateCourse()} indicator={indicator} /> :
                <ShimmerPlaceholder
                    style={styles.placHolder}
                    shimmerColors={['#e0e0e0', Colors.PRIMARY, '#e0e0e0']}
                    LinearGradient={LinearGradient}
                />
            }
            {courseTopics.length!==0 &&
                <Text style={{ fontFamily: 'outfit-bold', marginTop: 10, fontSize: 20 }}>Select all the topics which you want to add in course :</Text>
            }


            <View style={{ marginTop: 8, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 3 }}>
                {courseTopics.map((item) => (
                    <Text style={styles.optiontxt}>{item}</Text>
                ))}
            </View>




        </ScrollView>
    )
}
const styles = StyleSheet.create({
    mainTxt: {
        fontFamily: 'outfit-bold',
        fontSize: 28,
        marginTop: 10

    },
    subMainTxt: {
        marginTop: 5,
        fontFamily: 'outfit',
        fontSize: 22,
        flexWrap: 'wrap'

    },
    subTxt: {
        marginTop: 10,
        fontFamily: 'outfit',
        fontSize: 18,
        flexWrap: 'wrap',
        color: Colors.GRAY

    },
    inputtxt: {
        marginVertical: 20,
        borderWidth: 1,
        borderColor: Colors.GRAY,
        height: 100,
        width: '100%',
        padding: 8,
        borderRadius: 5,
        textAlignVertical: 'top'
    },
    placHolder: {
        width: '100%', height: 50, borderRadius: 5, marginBottom: 10, borderRadius: 50
    },
    optiontxt: {
        fontFamily: 'outfit-bold', padding: 12, borderWidth: 1, marginBottom: 8, borderColor: Colors.WHITE, borderRadius: 15, backgroundColor: Colors.PRIMARY, color: Colors.WHITE

    }

})



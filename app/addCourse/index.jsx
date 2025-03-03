import React, { Component, useState, useCallback, useEffect, useContext } from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView, Pressable, TouchableOpacity, ToastAndroid } from 'react-native'
import ShimmerPlaceholder from 'react-native-shimmer-placeholder'
import { LinearGradient } from 'expo-linear-gradient'
import { useFocusEffect } from '@react-navigation/native'
import Colors from '../../constant/Colors'
import Button from './../../components/Shared/Button'
import { GenerateTopicsAIModel, GenerateCourseAIModel } from './../../config/AiModel'
import Prompt from './../../constant/Prompt'
import { db } from './../../config/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import { UserDetailContext } from './../../context/UserDetailContext'
import { useRouter } from 'expo-router'

export default function NewCourse() {

    const [loading, setLoading] = useState(true);
    const [indicator1, setIndicator1] = useState(false);
    const [indicator2, setIndicator2] = useState(false);
    const [userInput, setUserInput] = useState();
    const [courseTopics, setCouseTopics] = useState([]);
    const [selectedTopics, setSelectedTopics] = useState([]);
    const { userDetail, setUserDetail } = useContext(UserDetailContext)
    const router=useRouter()

    useFocusEffect(
        useCallback(() => {
            setLoading(true);
            const timer = setTimeout(() => setLoading(false), 1000);
            return () => clearTimeout(timer);
        }, [])
    );
    const generateCourseTopics = async () => {
        console.log('model activated')
        setCouseTopics([])
        setIndicator1(true)
        const PROMPT = userInput + Prompt.IDEA
        const aiResponse = await GenerateTopicsAIModel.sendMessage(PROMPT)
        const topicIdeas = JSON.parse(aiResponse.response.text());
        console.log(topicIdeas?.course_titles)
        setCouseTopics(topicIdeas?.course_titles)
        setIndicator1(false)
    }


    const checkOnSelect = (topic) => {
        const alreadySelected = selectedTopics.find((item) => item == topic)
        if (!alreadySelected) {
            setSelectedTopics((prev) => [...prev, topic])
        }
        else {
            const filteredTopics = selectedTopics.filter((item) => item !== topic)
            setSelectedTopics(filteredTopics)
        }
    }
    const isInSelectedList = (topic) => {
        const present = selectedTopics.find((item) => item == topic)
        return present ? true : false

    }
    const generateCourse = async () => {
        console.log('model activated for course generation')
        setIndicator2(true)
        ToastAndroid.show('This will take few seconds',ToastAndroid.SHORT)
        try {
            const PROMPT = selectedTopics + Prompt.COURSE
            const aiResponse = await GenerateCourseAIModel.sendMessage(PROMPT)
            const response = JSON.parse(aiResponse.response.text());
            const courses=response?.courses
            //Course is generated now its time to save in database
            courses?.forEach(async (course) => {
                await setDoc(doc(db, 'Courses', Date.now().toString()), { //setting document id by currect date
                    ...course,
                    createdOn: Date.now(),
                    createdBy: userDetail?.email

                })

            });
            router.push('/(tabs)/home')
            ToastAndroid.show('Course Generated Successfully',ToastAndroid.SHORT)
            setIndicator2(false)
        }
        catch (e) {

            setIndicator2(false)
        }

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
                <Button text={'Generate Topics'} onPress={() => generateCourseTopics()} indicator={indicator1} /> :
                <ShimmerPlaceholder
                    style={styles.placHolder}
                    shimmerColors={['#e0e0e0', Colors.PRIMARY, '#e0e0e0']}
                    LinearGradient={LinearGradient}
                />
            }
            {courseTopics.length !== 0 &&
                <Text style={{ fontFamily: 'outfit-bold', marginTop: 10, fontSize: 20 }}>Select all the topics which you want to add in course :</Text>
            }


            <View style={{ marginVertical: 8, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 3 }}>
                {courseTopics.map((item, index) => (
                    <TouchableOpacity
                        onPress={() => checkOnSelect(item)}>

                        <Text key={index} style={{ ...styles.optiontxt, backgroundColor: isInSelectedList(item) ? Colors.PRIMARY : Colors.WHITE, color: isInSelectedList(item) ? Colors.WHITE : Colors.PRIMARY }}>{item}</Text>

                    </TouchableOpacity>
                ))}
            </View>

            {selectedTopics.length !== 0 &&
                <Button text={'Generate Course'} onPress={() => generateCourse()} indicator={indicator2} />

            }
            <View style={{ height: 200 }}></View>





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
        fontFamily: 'outfit-bold',
        padding: 12,
        borderWidth: 1,
        marginBottom: 8,
        borderColor: Colors.PRIMARY,
        borderRadius: 15,


    }

})



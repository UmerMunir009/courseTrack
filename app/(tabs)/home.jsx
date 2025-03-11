import React, { Component, useEffect, useState, useContext } from 'react'
import { ScrollView, Text, View } from 'react-native'
import Header from './../../components/Home/Header'
import NoCourse from './../../components/Home/NoCourse'
import { db } from './../../config/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { UserDetailContext } from './../../context/UserDetailContext'
import CourseList from '../../components/Home/CourseList'
import PracticeSection from '../../components/Home/PracticeSection'
import CourseProgress from '../../components/Home/CourseProgress'


export default function home() {

  const [courseList, setCourseList] = useState([]);
  const { userDetail, setUserDetail } = useContext(UserDetailContext)
  useEffect(() => {
    userDetail && getCourseList();
  }, [userDetail])

  const getCourseList = async () => {

    setCourseList([]) 
    const q = query(collection(db, "Courses"), where("createdBy", "==", userDetail?.email))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.data())
      setCourseList((prev) => [...prev, doc.data()])

    })
  }


  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1, padding: 15 }}>
      <Header />

      {courseList.length == 0 ?
        <NoCourse /> : 
        <View>
          <CourseProgress CourseList={courseList} />
          <PracticeSection/>
        <CourseList CourseList={courseList} />
        </View>
        }


    </ScrollView>
  )
}


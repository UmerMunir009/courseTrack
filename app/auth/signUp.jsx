import React, { Component, useState } from 'react'
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import Color from './../../constant/Colors'
import { useRouter } from 'expo-router'


export default function signUp() {
    const router=useRouter()
    const [fullName,setFullName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('./../../assets/images/logo.png')} />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.mainText}>Create New Account</Text>
                    <TextInput style={styles.txtInput} onChangeText={(value)=>setFullName(value)} placeholder='FullName'></TextInput>
                    <TextInput style={styles.txtInput} onChangeText={(value)=>setEmail(value)} placeholder='Email'></TextInput>
                    <TextInput style={styles.txtInput}  onChangeText={(value)=>setPassword(value)} secureTextEntry={true} placeholder='Password'></TextInput>
                    <TouchableOpacity

                        style={styles.btn}>
                        <Text style={styles.btnText}>Create Account</Text>
                    </TouchableOpacity>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,flexDirection:'row',marginTop:5}}>
                        <Text style={{ fontFamily: 'outfit',fontSize:16 }}>Already have an account?
                        </Text>
                        <TouchableOpacity onPress={()=>router.push('/auth/signIn')}>
                            <Text style={{ color: Color.PRIMARY, fontFamily: 'outfit-bold',fontSize:16 }}> Sign in</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:50}}></View>
                </View>


            </ScrollView>

        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.WHITE

    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 25
    },
    image: {
        width: 260,
        height: 260
    },
    contentContainer: {
        display: 'flex',
        alignItems: 'center',
        marginHorizontal: 4,
    },
    mainText: {
        fontSize: 30,
        textAlign: "center",
        marginBottom: 15,
        fontFamily: 'outfit-bold',
        fontFamily: 'outfit-bold'
    },
    txtInput: {
        width: '90%',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 5,
        padding: 17,
        fontSize: 18
    },
    btn: {
        width: "80%",
        padding: 15,
        borderRadius: 30,
        backgroundColor: Color.PRIMARY,
        marginTop: 15
    },
    btnText: {
        textAlign: "center",
        color: Color.WHITE,
        fontSize: 18,
        fontFamily: "outfit-bold",
        fontWeight: 'bold'
    },

})




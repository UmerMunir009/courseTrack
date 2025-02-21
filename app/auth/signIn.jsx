import React, { Component, useContext, useState } from 'react'
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput, ToastAndroid, ActivityIndicator } from 'react-native'
import Color from './../../constant/Colors'
import { useRouter } from 'expo-router'
import { auth, db } from './../../config/firebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from 'firebase/firestore'
import { UserDetailContext } from './../../context/UserDetailContext'
import Colors from './../../constant/Colors'


export default function signIn() {
    const router = useRouter()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { userDetail, setUserDetail } = useContext(UserDetailContext)
    const [loading, setLoading] = useState(false);
    


    const onSignInBtnClick = () => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(async (resp) => {
                // Signed in 
                const user = resp.user;
                // console.log(user)
                await getUserData()
                setLoading(false)
                router.replace('/(tabs)/home')
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setLoading(false)
                ToastAndroid.show('Incorrect email and Password!', ToastAndroid.BOTTOM)
            });

    }
    const getUserData = async () => {
        const result = await getDoc(doc(db, 'users', email));
        console.log(result.data());
        setUserDetail(result.data());
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('./../../assets/images/logo.png')} />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.mainText}>Welcome Back</Text>
                    <TextInput style={styles.txtInput} onChangeText={(value) => setEmail(value)} placeholder='Email'></TextInput>
                    <TextInput style={styles.txtInput} onChangeText={(value) => setPassword(value)} secureTextEntry={true} placeholder='Password'></TextInput>
                    <TouchableOpacity
                        onPress={onSignInBtnClick}
                        disabled={loading}
                        style={styles.btn}>
                        {!loading ?
                            <Text style={styles.btnText}>Sign In</Text> :
                            <ActivityIndicator size={'small'} color={Colors.WHITE}></ActivityIndicator>
                        }
                    </TouchableOpacity>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontFamily: 'outfit', fontSize: 16 }}>Dont have an account?
                        </Text>
                        <TouchableOpacity onPress={() => router.push('/auth/signUp')}>
                            <Text style={{ color: Colors.PRIMARY, fontFamily: 'outfit-bold', fontSize: 16 }}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 50 }}></View>
                </View>


            </ScrollView>

        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.WHITE,


    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 100
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




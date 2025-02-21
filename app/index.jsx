import { Text, View, Image, SafeAreaView, StyleSheet, TouchableOpacity,ScrollView } from "react-native";
import Color from './../constant/Colors'
import { useRouter } from "expo-router";

export default function Index() {
  const router=useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('./../assets/images/landing.png')} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.mainText}>Welcome to Coaching App and my dream app</Text>

        <Text style={styles.subText}>Transform your ideas into engaging educational content, effortlessely with AI</Text>
        <TouchableOpacity 
        onPress={()=>router.push('/auth/signUp')}
        style={styles.btn}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>router.push('/auth/signIn')}
        style={styles.btn2}>
          <Text style={styles.btn2Text}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE

  },
  imageContainer: {
    height: "50%",
    width: "100%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contentContainer: {

    flex: 1,
    paddingTop: 15,
    alignItems: "center",
    backgroundColor: Color.PRIMARY,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: 'center'

  },
  mainText: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 15,
    fontFamily:'outfit-bold',
    color: Color.WHITE,
    fontFamily:'outfit-bold'
  },
  subText: {
    fontFamily: "outfit",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
    color: Color.WHITE,
    fontFamily:'outfit',
    paddingHorizontal: 12
  },
  btn: {
    width: "80%",
    padding: 15,
    borderRadius: 30,
    backgroundColor: Color.WHITE,
    marginBottom: 10
  },
  btnText: {
    textAlign: "center",
    color: Color.PRIMARY,
    fontSize: 18,
    fontFamily: "outfit-bold",
    fontWeight: 'bold'
  },
  btn2: {
    width: "80%",
    padding: 15,
    borderRadius: 30,
    backgroundColor: Color.PRIMARY,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Color.WHITE
  },
  btn2Text: {
    textAlign: "center",
    color: Color.WHITE,
    fontSize: 18,
    fontFamily: "outfit-bold",
    fontWeight: 'bold'
  },
})




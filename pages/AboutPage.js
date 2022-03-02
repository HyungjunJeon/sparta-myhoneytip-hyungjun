import React, { useEffect } from "react"
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native"
const imageUrl =
  "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4"
import * as Linking from "expo-linking"

export default function AboutPage({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      title: "소개 페이지",
      headerStyle: {
        backgroundColor: "#262C74",
        shadowColor: "#262C74",
      },
      headerTintColor: "#fff",
    })
  }, [])
  const link = () => {
    Linking.openURL("https://www.instagram.com/maru105kr/")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi! 스파르타코딩 앱개발 반에 오신것을 환영합니다</Text>
      <View style={styles.contentContainer}>
        <Image style={styles.contentImage} source={{ uri: imageUrl }} />
        <Text style={styles.contentTitle}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
        <Text style={styles.contentText}>꼭 완주 하셔서 꼭 여러분것으로 만들어가시길 바랍니다</Text>
        <TouchableOpacity style={styles.contentButton} onPress={() => link()}>
          <Text style={styles.contentButtonText}>여러분의 인스타계정</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262C74",
    height: "100%",
  },
  title: {
    color: "#fff",
    fontSize: 45,
    marginTop: 50,
    alignSelf: "center",
  },
  contentContainer: {
    backgroundColor: "#fff",
    width: "90%",
    height: "70%",
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 20,
  },
  contentImage: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 100,
    borderRadius: 50,
  },
  contentTitle: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
  },
  contentText: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 20,
    marginLeft: 10,
  },
  contentButton: {
    backgroundColor: "#F3B132",
    width: 200,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 20,
  },
  contentButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
})

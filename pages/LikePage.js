import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native"
import { StatusBar } from "expo-status-bar"

import LikeCard from "../components/LikeCard"
import { firebase_db } from "../firebaseConfig"
import Constants from "expo-constants"
import Loading from "../components/Loading"

export default function LikePage({ navigation }) {
  const user_id = Constants.installationId
  const [tip, setTip] = useState([])
  const [ready, setReady] = useState(true)

  useEffect(() => {
    navigation.setOptions({
      title: "꿀팁 찜",
    })

    firebase_db
      .ref("/like/" + user_id)
      .once("value")
      .then((snapshot) => {
        console.log("파이어베이스에서 데이터 가져왔습니다!!")
        let tip = snapshot.val()

        setReady(false)
        if (tip != null) {
          let tip_list = Object.values(tip)
          setTip(tip_list)
        } else {
          setTip([])
        }
      })
  })
  return ready ? (
    <Loading />
  ) : tip.length == 0 ? (
    <Text style={styles.nullText}>찜한 꿀팁이 없어요!</Text>
  ) : (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.likeCardContainer}>
        {tip.map((content, i) => {
          return <LikeCard content={content} key={i} navigation={navigation} />
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  nullText: {
    fontSize: 50,
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
  },
})

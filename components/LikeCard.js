import React from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native"
import { firebase_db } from "../firebaseConfig"
import Constants from "expo-constants"

//MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function Card({ content, navigation }) {
  const user_id = Constants.installationId
  const remove = () => {
    firebase_db
      .ref("/like/" + user_id + "/" + content.idx)
      .remove()
      .then(function () {
        console.log("Remove succeeded.")
      })
      .catch(function (error) {
        console.log("Remove failed: " + error.message)
      })
    navigation.navigate("LikePage")
  }
  return (
    //카드 자체가 버튼역할로써 누르게되면 상세페이지로 넘어가게끔 TouchableOpacity를 사용
    <View
      style={styles.card}
      onPress={() => {
        navigation.navigate("DetailPage", content)
      }}
    >
      <Image style={styles.cardImage} source={{ uri: content.image }} />
      <View style={styles.cardText}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {content.title}
        </Text>
        <Text style={styles.cardDesc} numberOfLines={3}>
          {content.desc}
        </Text>
        <Text style={styles.cardDate}>{content.date}</Text>
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={() => {
              navigation.navigate("DetailPage", { idx: content.idx })
            }}
          >
            <Text style={styles.bottomButtonText}>자세히보기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress={() => remove()}>
            <Text style={styles.bottomButtonText}>찜 해제</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
    paddingBottom: 10,
  },
  cardImage: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  cardDesc: {
    fontSize: 15,
  },
  cardDate: {
    fontSize: 10,
    color: "#A6A6A6",
  },
  bottomButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  bottomButton: {
    borderColor: "deeppink",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: 100,
  },
  bottomButtonText: {
    textAlign: "center",
    color: "deeppink",
    fontSize: 15,
  },
})

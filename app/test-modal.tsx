// app/example-modal.tsx
import dayjs from "dayjs";
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ExampleModal() {
  const timeArr: string[] = [];
  const regex = /\d\d:\d\d:\d\d/g;
  console.log(
    dayjs(new Date().setHours(24, 0, 0, 0)).add(30, "m").format().toString()
  );
  for (let i = 0; i < 12; i++) {
    timeArr.push(
      dayjs(new Date().setHours(24, 0, 0, 0)).add(30, "m").toString()
    );
  }
  console.log(timeArr);
  return (
    <View style={styles.root}>
      <Pressable style={styles.backdrop} onPress={() => router.back()} />
      <View style={styles.card}>
        <Text style={styles.title}>يرجى اختيار الساعة</Text>
        <ScrollView></ScrollView>
        <Pressable style={styles.closeButton} onPress={() => router.back()}>
          <Text style={{ color: "white", fontFamily: "FrutigerArabicBold" }}>
            تأكيد
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backdrop: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  card: {
    width: "85%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.2,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "FrutigerArabicBold",
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#2AB25F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});

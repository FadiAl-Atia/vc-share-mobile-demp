import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

const statusMap = new Map();

statusMap.set("CONFIRMED", () => (
  <View style={styles.status}>
    <Svg height="8" width="8">
      <Circle cx={4} cy={4} r={4} fill="#00C951" />
    </Svg>
    <Text>مؤكد</Text>
  </View>
));

//Change name of the case
statusMap.set("NEED_MORE_FILES", () => (
  <View style={[styles.status, { borderColor: "#AD46FF" }]}>
    <Svg height="8" width="8">
      <Circle cx={4} cy={4} r={4} fill="#AD46FF" />
    </Svg>
    <Text style={{ color: "#AD46FF" }}>اضافة بيانات</Text>
  </View>
));

statusMap.set("CANCELLED", () => {
  <View style={[styles.status, { borderColor: "red" }]}>
    <Svg height="8" width="8">
      <Circle cx={4} cy={4} r={4} fill="red" />
    </Svg>
    <Text style={{ color: "red" }}>ملغي</Text>
  </View>;
});
statusMap.set("WAITING", () => (
  <View style={[styles.status, { borderColor: "#FF6900" }]}>
    <Svg height="8" width="8">
      <Circle cx={4} cy={4} r={4} fill="#FF6900" />
    </Svg>
    <Text style={{ color: "#FF6900" }}>قيد الانتظار</Text>
  </View>
));

export default statusMap;

const styles = StyleSheet.create({
  status: {
    marginLeft: 15,
    borderWidth: 1,
    borderColor: "#2AB25F",
    borderRadius: 100,
    paddingHorizontal: 8,
    justifyContent: "center",
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 4,
  },
});

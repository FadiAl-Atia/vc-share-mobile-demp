import { ReactElement } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

interface StatementProps {
  text: string;
  statementStyles: StyleProp<ViewStyle>;
  statementTextStyle: StyleProp<TextStyle>;
  statementSvg?: ReactElement;
}

export default function Statement({
  text,
  statementStyles,
  statementTextStyle,
  statementSvg,
}: StatementProps) {
  return (
    <View style={statementStyles}>
      <Text style={statementTextStyle}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statementStyle: {
    width: "100%",
    padding: 4,
    borderWidth: 1,
    borderColor: "#2AB25F",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 5,
  },
  statementText: {
    fontFamily: "FrutigerArabicBold",
    color: "#2AB25F",
    textAlign: "right",
    fontSize: 13,
  },
});

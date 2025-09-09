import { ReactElement } from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
import { Button } from "./ui/button";

interface ButtonProps {
  buttonText: string;
  onPressButton: (...args: any[]) => any;
  buttonStyles: StyleProp<ViewStyle>;
  buttonTextStyle: StyleProp<TextStyle>;
  variant: "solid" | "outline" | "link" | undefined;
  buttonSvg: ReactElement;
}

export default function ReservationButton({
  buttonText,
  onPressButton,
  buttonStyles,
  buttonTextStyle,
  buttonSvg,
  variant,
}: ButtonProps) {
  return (
    <Button variant={variant} onPress={onPressButton} style={buttonStyles}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 6,
        }}
      >
        {buttonSvg}
        <Text style={buttonTextStyle}>{buttonText}</Text>
      </View>
    </Button>
  );
}

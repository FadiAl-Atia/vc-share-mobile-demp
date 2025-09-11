import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
import { Input, InputField } from "./ui/input";

interface ProfileInputFieldProps {
  inputFieldStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  label?: string;
  value?: string;
  isEditable?: boolean;
}

export default function ProfileInputField({
  inputFieldStyle,
  labelStyle,
  placeholder,
  label,
  value,
  isEditable,
}: ProfileInputFieldProps) {
  return (
    <View style={inputFieldStyle}>
      <Text style={labelStyle}>{label}</Text>
      <Input>
        <InputField
          placeholder={placeholder}
          value={value}
          placeholderTextColor="#888"
          style={{
            textAlign: "right",
            pointerEvents: isEditable ? "auto" : "none",
          }}
        />
      </Input>
    </View>
  );
}

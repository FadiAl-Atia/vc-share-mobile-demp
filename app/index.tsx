import { SearchIcon } from "@/components/ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { useFonts } from "expo-font";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import cardsData from "./arrayData";

import { useState } from "react";
import { Card } from "./components/speciality-card";

export default function Index() {
  const searchIcon = (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
        stroke="#62748E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.75 15.75L12.525 12.525"
        stroke="#62748E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
  const [loaded] = useFonts({
    FrutigerArabicLight: require("../assets/fonts/FrutigerLTArabic45Light.ttf"),
    FrutigerArabicRoman: require("../assets/fonts/FrutigerLTArabic55Roman.ttf"),
    FrutigerArabicBold: require("../assets/fonts/FrutigerLTArabic65Bold.ttf"),
  });

  if (!loaded) return null;

  // state
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  // handle card in the other component
  const handleCardPress = (cardId: string) => {
    activeCardId === cardId ? setActiveCardId(null) : setActiveCardId(cardId);
  };

  return (
    <View style={styles.layout}>
      <Text style={styles.fontHeading}>اختيار التخصص</Text>
      <Text style={styles.fontSubTitle}>الرجاء قم باختيار التخصص المطلوب.</Text>
      <View style={styles.servicePrice}>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 8 }}
        >
          <Svg width="21" height="20" viewBox="0 0 21 20" fill="none">
            <Path
              d="M17.1673 16.25L12.584 17.25"
              stroke="#2AB25F"
              strokeWidth={1.875}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M12.584 3.33337V12.6834C12.584 12.81 12.6129 12.9349 12.6684 13.0486C12.7239 13.1624 12.8046 13.262 12.9044 13.3399C13.0041 13.4178 13.1203 13.472 13.2442 13.4983C13.368 13.5246 13.4962 13.5223 13.619 13.4917L17.1673 12.6667"
              stroke="#2AB25F"
              strokeWidth={1.875}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M2.98145 16.1258L7.60561 14.99C7.96642 14.8916 8.28365 14.6747 8.50629 14.3742C8.72893 14.0737 8.84404 13.7071 8.83311 13.3333V1.66663"
              stroke="#2AB25F"
              strokeWidth={1.875}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M17.1673 8.33337L3.83398 11.25"
              stroke="#2AB25F"
              strokeWidth={1.875}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>

          <Text
            style={{
              fontFamily: "FrutigerArabicBold",
              fontSize: 12,
              color: "#2AB25F",
            }}
          >
            260
          </Text>
        </View>

        <Text
          style={{
            fontFamily: "FrutigerArabicRoman",
            fontSize: 12,
            color: "#737373",
            marginRight: 8,
          }}
        >
          سعر الخدمة
        </Text>
      </View>
      <View>
        <Input
          style={{ borderRadius: 25, marginTop: 6, height: 40, width: 400 }}
        >
          <InputField
            placeholder="البحث"
            textAlign="right"
            style={{
              writingDirection: "rtl",
              fontSize: 14,
              width: 250,
            }}
          />
          <InputSlot className="pr-3">
            <InputIcon as={SearchIcon} size="sm" />
          </InputSlot>
        </Input>
      </View>

      <ScrollView style={{ marginTop: 9 }}>
        <View style={{ gap: 20 }}>
          {cardsData.map((card) => (
            <Card
              key={card.id}
              cardId={card.id}
              name={card.name}
              description={card.description}
              isActive={activeCardId === card.id}
              onPress={handleCardPress}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fontHeading: {
    fontFamily: "FrutigerArabicBold",
    fontSize: 18,
    marginBottom: 0,
  },
  fontSubTitle: {
    fontFamily: "FrutigerArabicRoman",
    fontSize: 14,
    color: "#62748E",
    marginTop: 0,
  },
  servicePrice: {
    width: 203,
    height: 40,
    backgroundColor: "rgba(42, 178, 95, 0.05)",
    borderWidth: 1,
    borderColor: "#2AB25F",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
    marginTop: 6,
  },
});

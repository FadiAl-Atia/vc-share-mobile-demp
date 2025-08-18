import { useFonts } from "expo-font";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export function Card({
  name,
  description,
  cardId,
  isActive,
  onPress,
  ...props
}: {
  name: string;
  description: string;
  cardId: string;
  isActive: boolean;
  onPress: (cardId: string) => void;
}) {

  //fonts, will move to layout later
  const [loaded] = useFonts({
    FrutigerArabicLight: require("../../assets/fonts/FrutigerLTArabic45Light.ttf"),
    FrutigerArabicRoman: require("../../assets/fonts/FrutigerLTArabic55Roman.ttf"),
    FrutigerArabicBold: require("../../assets/fonts/FrutigerLTArabic65Bold.ttf"),
  });
  //check that fonts loaded correctly, if not, dont render.
  if (!loaded) return null;

  //handle Press
  function handlePress() {
    onPress(cardId);
  }

  //for svg of the specilaity
  const width = 16;
  const height = 16;
  const color = "white";

  return (
    <Pressable onPress={handlePress}>
      <View
        style={[styles.layout, isActive ? styles.layoutActive : styles.layout]}
      >
        <View style={styles.innerLayout}>
          <View style={styles.innerTitle}>
            <View style={isActive ? styles.svgPosition : styles.hidden}>
              <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <Path
                  d="M14.243 4.841L6.50853 12.5755L2.99286 9.05981"
                  stroke="#2AB25F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            </View>

            <Text style={{ marginRight: 8, fontFamily: "FrutigerArabicBold" }}>
              {name}
            </Text>
            <View style={styles.circle}>
              <Svg
                width={width}
                height={height}
                viewBox="0 0 16 16"
                fill="none"
              >
                <Path
                  d="M7.33331 1.33331V2.66665"
                  stroke={color}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M3.33331 1.33331V2.66665"
                  stroke={color}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M3.33331 2H2.66665C2.31302 2 1.97389 2.14048 1.72384 2.39052C1.47379 2.64057 1.33331 2.97971 1.33331 3.33333V6C1.33331 7.06087 1.75474 8.07828 2.50489 8.82843C3.25503 9.57857 4.27245 10 5.33331 10C6.39418 10 7.41159 9.57857 8.16174 8.82843C8.91189 8.07828 9.33331 7.06087 9.33331 6V3.33333C9.33331 2.97971 9.19284 2.64057 8.94279 2.39052C8.69274 2.14048 8.3536 2 7.99998 2H7.33331"
                  stroke={color}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M5.33331 10C5.33331 11.0609 5.75474 12.0783 6.50489 12.8284C7.25503 13.5786 8.27245 14 9.33331 14C10.3942 14 11.4116 13.5786 12.1617 12.8284C12.9119 12.0783 13.3333 11.0609 13.3333 10V8"
                  stroke={color}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M13.3333 7.99998C14.0697 7.99998 14.6667 7.40303 14.6667 6.66665C14.6667 5.93027 14.0697 5.33331 13.3333 5.33331C12.597 5.33331 12 5.93027 12 6.66665C12 7.40303 12.597 7.99998 13.3333 7.99998Z"
                  stroke={color}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.innerDescription}>{description}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  layout: {
    height: 110,
    width: 368,
    borderColor: "#E2E8F0",
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "column",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  innerLayout: {
    flexDirection: "column",
  },
  innerTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    height: 24,
    width: 24,
    borderRadius: 100,
    backgroundColor: "#21387E",
    justifyContent: "center",
    alignItems: "center",
  },
  innerDescription: {
    fontSize: 12,
    marginTop: 8,
    fontFamily: "FrutigerArabicRoman",
  },
  testLayout: {
    flexDirection: "column",
  },
  layoutActive: {
    borderColor: "#2AB25F",
    borderWidth: 2,
    borderRadius: 8,
  },
  svgPosition: {
    position: "relative",
    right: 224,
    height: 26.25,
    width: 26.25,
    borderRadius: 100,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#2AB25F",
  },
  hidden: {
    display: "none",
  },
});

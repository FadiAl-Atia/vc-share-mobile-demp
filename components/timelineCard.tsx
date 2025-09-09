import { ReactSVGElement } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

interface MovementProps {
  title: string;
  movementSvg: ReactSVGElement;
  isLast: boolean;
  description: string;
}

export default function ReservationInfo({
  title,
  movementSvg,
  isLast,
  description,
}: MovementProps) {
  const { width: ScreenWidth } = useWindowDimensions();
  return (
    <View style={styles.movement}>
      <View style={styles.movementTitleAndSVG}>
        <View style={styles.svgCircle}>{movementSvg}</View>
        <View style={styles.movementTitleAndSvgInfo}>
          <Text
            style={{
              fontFamily: "FrutigerArabicBold",
              fontSize: 16,
              textAlign: "right",
              flex: 1,

              minWidth: 150,
            }}
          >
            {title}
          </Text>
          <View
            style={{
              flexDirection: "row-reverse",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Svg
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              style={{ marginTop: 5 }}
            >
              <Path
                d="M4 1V3"
                stroke="#737373"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M8 1V3"
                stroke="#737373"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M9.5 2H2.5C1.94772 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11H9.5C10.0523 11 10.5 10.5523 10.5 10V3C10.5 2.44772 10.0523 2 9.5 2Z"
                stroke="#737373"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M1.5 5H10.5"
                stroke="#737373"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <Text
              style={{
                fontFamily: "FrutigerArabicLight",
                color: "#737373",
                fontSize: 12,
              }}
            >
              - 12/03/2025
            </Text>
            <Svg
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              style={{ marginTop: 5 }}
            >
              <G clipPath="url(#clip0)">
                <Path
                  d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                  stroke="#737373"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M6 3V6L8 7"
                  stroke="#737373"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </G>
              <Defs>
                <ClipPath id="clip0">
                  <Rect width={12} height={12} fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
            <Text
              style={{
                fontFamily: "FrutigerArabicLight",
                color: "#737373",
                fontSize: 12,
              }}
            >
              12:30PM
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "FrutigerArabicLight",
              color: "#737373",
              fontSize: 12,
            }}
          >
            قبل 6 ساعات{" "}
          </Text>
          <View style={styles.movementDescription}>
            <Text
              style={{
                fontFamily: "FrutigerArabicBold",
                fontSize: ScreenWidth > 350 ? 12 : 14,
              }}
            >
              {description}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  movement: {
    width: "90%",
    alignSelf: "center",
    marginTop: 12,
  },
  movementTitleAndSVG: {
    flexDirection: "row-reverse",
    gap: 15,
    padding: 15,
  },
  movementTitleAndSvgInfo: {
    alignItems: "flex-end",
    paddingHorizontal: 7,
    minHeight: 100,
    maxWidth: 250,
  },
  svgCircle: {
    borderWidth: 1,
    height: 40,
    width: 40,
    borderRadius: 50,
    borderColor: "#E5E5E5",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  movementLeftSection: {
    flex: 1,
    height: "100%",
  },
  movementDescription: {
    alignItems: "flex-end",
    justifyContent: "center",
    borderRadius: 8,
    padding: 8,
    marginTop: 8,
    backgroundColor: "#F5F5F5",
    width: "90%",
    writingDirection: "rtl",
    direction: "rtl",
  },
  verticalLine: {
    width: 2,
    height: 200,
    position: "absolute",
    backgroundColor: "#E5E5E5",
    left: 252,
    top: 30,
  },
});

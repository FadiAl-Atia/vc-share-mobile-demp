import markAsReadIcon from "@/assets/icons/markAsReadSvg";
import { ReactSVGElement } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

interface nortificationCardProps {
  title: string;
  movementSvg?: ReactSVGElement;
  isLast: boolean;
  createdAt: Date;
  description: string;
}

export default function notificationCard({
  title,
  movementSvg,
  isLast,
  createdAt,
  description,
}: nortificationCardProps) {
  const { width: ScreenWidth } = useWindowDimensions();

  // Parse the ISO string to Date object
  const createdDate = new Date(createdAt);

  return (
    <View style={styles.movement}>
      <View style={styles.movementTitleAndSVG}>
        <View style={{ flexDirection: "row-reverse", alignItems: "center" }}>
          <View style={styles.svgCircle}>
            <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <Path
                d="M21 7.5V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H8.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M16 2V6"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M8 2V6"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M3 10H8"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M17.5 17.5L16 16.3V14"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <View style={styles.movementTitleAndSvgInfo}>
            <Text
              style={{
                fontFamily: "FrutigerArabicBold",
                fontSize: 14,
                textAlign: "right",
                minWidth: 150,
                marginBottom: 0,
                alignSelf: "flex-end",
              }}
            >
              {title}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            marginLeft: 4,
            backgroundColor: "#E8E8E8",
            borderRadius: 8,
            padding: 4,
            borderColor: "#2AB25F",
            borderWidth: 1,
          }}
        >
          {markAsReadIcon}
        </TouchableOpacity>
      </View>
      <View style={styles.movementDescription}>
        <Text
          style={{
            fontFamily: "FrutigerArabicBold",
            fontSize: ScreenWidth > 350 ? 10 : 12,
            wordWrap: "break-word",
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  movement: {
    width: "90%",
    alignSelf: "center",
    marginTop: 12,
    borderRadius: 8,
    borderColor: "#E4E4E4",
    borderWidth: 1,
  },
  movementTitleAndSVG: {
    flexDirection: "row-reverse",
    paddingHorizontal: 8,
    marginTop: 4,

    alignItems: "center",
    justifyContent: "space-between",
  },
  movementTitleAndSvgInfo: {
    alignItems: "flex-end",
    paddingHorizontal: 7,
  },
  svgCircle: {
    borderWidth: 1,
    height: 36,
    width: 36,
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
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 4,
    marginHorizontal: 8,

    textAlign: "right",
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

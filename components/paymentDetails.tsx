import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function PaymentDetails() {
  return (
    <View style={[styles.container_1, { height: 200 }]}>
      <View style={styles.container_1_title_status}>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={{ fontFamily: "FrutigerArabicBlack", fontSize: 18 }}>
            تفاصيل الدفع
          </Text>
          <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Path
              d="M11 15H13C13.5304 15 14.0391 14.7893 14.4142 14.4142C14.7893 14.0391 15 13.5304 15 13C15 12.4696 14.7893 11.9609 14.4142 11.5858C14.0391 11.2107 13.5304 11 13 11H10C9.4 11 8.9 11.2 8.6 11.6L3 17"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M7 21L8.6 19.6C8.9 19.2 9.4 19 10 19H14C15.1 19 16.1 18.6 16.8 17.8L21.4 13.4C21.7859 13.0354 22.0111 12.5323 22.0261 12.0016C22.0411 11.4709 21.8447 10.9559 21.48 10.57C21.1153 10.1841 20.6123 9.95892 20.0816 9.94392C19.5508 9.92891 19.0359 10.1254 18.65 10.49L14.45 14.39"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M2 16L8 22"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M16 11.9001C17.6016 11.9001 18.9 10.6017 18.9 9.0001C18.9 7.39847 17.6016 6.1001 16 6.1001C14.3983 6.1001 13.1 7.39847 13.1 9.0001C13.1 10.6017 14.3983 11.9001 16 11.9001Z"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M6 8C7.65685 8 9 6.65685 9 5C9 3.34315 7.65685 2 6 2C4.34315 2 3 3.34315 3 5C3 6.65685 4.34315 8 6 8Z"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>
      </View>
      <View style={styles.container_1_information}>
        <Text style={styles.informationTitleValue}>
          <Text style={styles.informationTitle}>المبلغ الكلي : </Text>
          <Text style={{ color: "#2AB25F" }}>
            260
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
          </Text>
        </Text>
        <Text style={styles.informationTitleValue}>
          <Text style={styles.informationTitle}>خصم التأمين : </Text>
          <Text style={{ color: "#737373" }}>
            -100{" "}
            <Svg width="21" height="20" viewBox="0 0 21 20" fill="none">
              <Path
                d="M17.1673 16.25L12.584 17.25"
                stroke="#737373"
                strokeWidth={1.875}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M12.584 3.33337V12.6834C12.584 12.81 12.6129 12.9349 12.6684 13.0486C12.7239 13.1624 12.8046 13.262 12.9044 13.3399C13.0041 13.4178 13.1203 13.472 13.2442 13.4983C13.368 13.5246 13.4962 13.5223 13.619 13.4917L17.1673 12.6667"
                stroke="#737373"
                strokeWidth={1.875}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M2.98145 16.1258L7.60561 14.99C7.96642 14.8916 8.28365 14.6747 8.50629 14.3742C8.72893 14.0737 8.84404 13.7071 8.83311 13.3333V1.66663"
                stroke="#737373"
                strokeWidth={1.875}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M17.1673 8.33337L3.83398 11.25"
                stroke="#737373"
                strokeWidth={1.875}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </Text>
        </Text>
        <Text style={styles.informationTitleValue}>
          <Text style={styles.informationTitle}> المبلغ النهائي : </Text>
          <Text style={{ color: "#2AB25F" }}>
            160{" "}
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
          </Text>{" "}
        </Text>
      </View>
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
  buttons: {
    flexDirection: "row",
    gap: 38,
    marginTop: 14,
    marginBottom: 18,
  },
  container_1: {
    width: "90%",
    marginTop: 11,
    borderRadius: 8,
    borderColor: "#E2E8F0",
    borderWidth: 2,
  },
  container_1_title_status: {
    flexDirection: "row-reverse",
    width: "100%",
    marginTop: 8,
    height: 32,
    paddingRight: 10,
    alignSelf: "flex-end",
    justifyContent: "space-between",
  },
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
  container_1_information: {
    height: 350,
    width: "100%",
    marginTop: 8,
    alignItems: "flex-end",
    padding: 10,
    gap: 10,
  },
  informationTitle: {
    color: "#62748E",
    fontFamily: "FrutigerArabicBold",
  },
  informationTitleValue: {
    fontSize: 16,
    fontFamily: "FrutigerArabicBold",
  },
  serviceType: {
    color: "white",
    fontFamily: "FrutigerArabicBold",
    fontSize: 12,
  },
  serviceTypeContainer: {
    backgroundColor: "#21387E",
    borderRadius: 100,
    borderWidth: 0,
    padding: 6,
  },
  confirmedDate: {
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
  buttonContainer: {
    backgroundColor: "lightgrey",
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  providedData: {
    gap: 15,
    marginTop: 25,
    marginRight: 10,
    paddingBottom: 20,
  },
  dataAll: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  dataBox: {
    backgroundColor: "#F1F5F9",
    padding: 5,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 8,
  },
  scrollContent: {
    paddingHorizontal: 16,
    flexDirection: "row-reverse",
    gap: 12,
  },
  testContent: {
    padding: 10,
    alignItems: "flex-end",
    gap: 10,
    flex: 1,
  },
});

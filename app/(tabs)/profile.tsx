import boxIcon from "@/assets/icons/boxSvg";
import contactUsIcon from "@/assets/icons/contactUsSvg";
import cookieIcon from "@/assets/icons/cookieSvg";
import documentIcon from "@/assets/icons/documentSvg";
import logoutIcon from "@/assets/icons/logoutSvg";
import saveIcon from "@/assets/icons/saveSvg";
import ProfileInputField from "@/components/profileInputField";
import { Button, ButtonText } from "@/components/ui/button";
import useReservationDataConfirmed from "@/hooks/useReservationDataConfirmed";
import { useFonts } from "expo-font";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
export default function Index() {
  const [loaded] = useFonts({
    FrutigerArabicLight: require("../../assets/fonts/FrutigerLTArabic45Light.ttf"),
    FrutigerArabicRoman: require("../../assets/fonts/FrutigerLTArabic55Roman.ttf"),
    FrutigerArabicBold: require("../../assets/fonts/FrutigerLTArabic65Bold.ttf"),
  });

  if (!loaded) return null;

  const { user } = useReservationDataConfirmed();

  return (
    <ScrollView
      contentContainerStyle={styles.layout}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.upperbar}>
        <Text style={styles.fontHeading}>معلومات الحساب</Text>
        <Button
          style={{
            flexDirection: "row-reverse",
            backgroundColor: "transparent",
            gap: 5,
            width: "40%",
            borderColor: "#E2E8F0",
            borderWidth: 1,
            borderRadius: 8,
          }}
        >
          {logoutIcon}
          <ButtonText
            style={{
              color: "black",
              fontFamily: "FrutigerArabicBold",
              fontSize: 12,
            }}
          >
            تسجيل الخروج
          </ButtonText>
        </Button>
      </View>

      <View style={styles.pfpContainer}>
        <Image source={require("../../assets/images/pfp.png")}></Image>
        <Text style={styles.fontHeading}>
          {user.profile.firstName + " " + user.profile.lastName}
        </Text>
        <Button
          style={{
            flexDirection: "row-reverse",
            backgroundColor: "transparent",
            gap: 5,
            width: "40%",
            borderColor: "#E2E8F0",
            borderWidth: 1,
            borderRadius: 8,
          }}
        >
          {boxIcon}
          <ButtonText
            style={{
              color: "black",
              fontFamily: "FrutigerArabicBold",
              fontSize: 12,
            }}
          >
            السجل الطبي
          </ButtonText>
        </Button>
      </View>
      <View style={styles.fieldsContainer}>
        <ProfileInputField
          placeholder="أدخل الاسم الأول"
          value={user.profile.firstName}
          isEditable={true}
          inputFieldStyle={styles.inputField}
          labelStyle={{ fontFamily: "FrutigerArabicBold", fontSize: 12 }}
          label={"الاسم الأول"}
        />
        <ProfileInputField
          placeholder="أدخل الاسم الأخير"
          value={user.profile.lastName}
          isEditable={true}
          inputFieldStyle={styles.inputField}
          labelStyle={{ fontFamily: "FrutigerArabicBold", fontSize: 12 }}
          label={"الاسم الأخير"}
        />
        <ProfileInputField
          placeholder="أدخل اسم الأب"
          value={user.profile.parentName}
          isEditable={true}
          inputFieldStyle={styles.inputField}
          labelStyle={{ fontFamily: "FrutigerArabicBold", fontSize: 12 }}
          label={"اسم الأب (اختياري)"}
        />
        <ProfileInputField
          placeholder="أدخل مكان الإقامة"
          value={user.profile.residency}
          isEditable={true}
          inputFieldStyle={styles.inputField}
          labelStyle={{ fontFamily: "FrutigerArabicBold", fontSize: 12 }}
          label={"مكان الاقامة (اختياري)"}
        />
        <ProfileInputField
          placeholder="أدخل رقم الهاتف"
          value={user.phoneNumber}
          isEditable={true}
          inputFieldStyle={styles.inputField}
          labelStyle={{ fontFamily: "FrutigerArabicBold", fontSize: 12 }}
          label={"الهاتف"}
        />
        <ProfileInputField
          placeholder="أدخل البريد الإلكتروني"
          value={user.profile.email}
          isEditable={true}
          inputFieldStyle={styles.inputField}
          labelStyle={{ fontFamily: "FrutigerArabicBold", fontSize: 12 }}
          label={"البريد الالكتروني"}
        />
        <ProfileInputField
          placeholder="أدخل الرقم الوطني"
          value={user.profile.nationalId}
          isEditable={true}
          inputFieldStyle={styles.inputField}
          labelStyle={{ fontFamily: "FrutigerArabicBold", fontSize: 12 }}
          label={"الرقم الوطني / الاقامة (لربط التأمين)"}
        />
        <ProfileInputField
          placeholder="اختر شركة التأمين"
          value=""
          isEditable={true}
          inputFieldStyle={styles.inputField}
          labelStyle={{ fontFamily: "FrutigerArabicBold", fontSize: 12 }}
          label={"شركة التأمين"}
        />
        <ProfileInputField
          placeholder="اختر الجنس"
          value={user.profile.gender}
          isEditable={true}
          inputFieldStyle={styles.inputField}
          labelStyle={{ fontFamily: "FrutigerArabicBold", fontSize: 12 }}
          label={"الجنس"}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          size="md"
          variant="solid"
          action="primary"
          style={{
            backgroundColor: "#2AB25F",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ButtonText style={{ fontFamily: "FrutigerArabicBold" }}>
            حفظ التغييرات
          </ButtonText>
          {saveIcon}
        </Button>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          gap: 18,
          paddingHorizontal: 25,
          flexDirection: "row-reverse",
        }}
      >
        <View style={styles.cookieCard}>
          <View style={styles.svgCircle}>{contactUsIcon}</View>
          <View style={styles.cookieTextContainer}>
            <Text
              style={[styles.cookieText, { fontFamily: "FrutigerArabicBold" }]}
            >
              شروط الخدمة
            </Text>
            <Text style={styles.cookieText}>
              راجع شروط الخدمة والسياسات الخاصة بالاستخدام
            </Text>
          </View>
        </View>
        <View style={styles.cookieCard}>
          <View style={styles.svgCircle}>{cookieIcon}</View>
          <View style={styles.cookieTextContainer}>
            <Text
              style={[styles.cookieText, { fontFamily: "FrutigerArabicBold" }]}
            >
              سياسة الخصوصية
            </Text>
            <Text style={styles.cookieText}>
              اقرا سياسة الخصوصية الخاصة بنا و معالجة البيانات
            </Text>
          </View>
        </View>
        <View style={styles.cookieCard}>
          <View style={styles.svgCircle}>{documentIcon}</View>
          <View style={styles.cookieTextContainer}>
            <Text
              style={[styles.cookieText, { fontFamily: "FrutigerArabicBold" }]}
            >
              اتصل بنا
            </Text>
            <Text style={styles.cookieText}>
              اذا كانت لديك مشكلة او تريد المزيد من الاستفسارات
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  layout: {
    marginTop: 15,
    alignItems: "center",
    gap: 12,
    paddingBottom: 50,
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
  buttons: {
    flexDirection: "row",
    gap: 38,
    marginTop: 14,
    marginBottom: 18,
  },
  upperbar: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    width: "100%",
  },
  pfpContainer: {
    width: "85%",
    alignItems: "center",
    paddingTop: 18,
    gap: 18,
  },
  fieldsContainer: {
    width: "85%",
    gap: 12,
  },
  inputField: {
    gap: 10,
    alignItems: "flex-end",
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
  },
  cookieCard: {
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 8,
    width: 254,
    height: 120,
    padding: 15,
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    gap: 7,
  },
  svgCircle: {
    backgroundColor: "#DFE0E1",
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cookieTextContainer: {
    height: 100,
    width: 180,
  },
  cookieText: {
    textAlign: "right",
    fontFamily: "FrutigerArabicRoman",
    fontSize: 12,
    wordWrap: "line-break",
  },
});

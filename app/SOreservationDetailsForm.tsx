import riyalIcon from "@/assets/icons/riyalSvg";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import useReservationDataConfirmed from "@/hooks/useReservationDataConfirmed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Label } from "@react-navigation/elements";
import { useForm } from "@tanstack/react-form";
import { differenceInYears } from "date-fns";
import Checkbox from "expo-checkbox";
import * as DocumentPicker from "expo-document-picker";
import { router } from "expo-router";
import { useEffect, useState } from "react";

import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { z } from "zod";

export default function Index() {
  //State
  const [document, setDocument] = useState<PickedFile[]>([]);
  type PickedFile = DocumentPicker.DocumentPickerAsset;
  const [reservationType, setReservationType] = useState<string>();
  const { width } = useWindowDimensions();
  const [hurry, setHurry] = useState(false);
  const { user } = useReservationDataConfirmed();

  //Schema
  const formSchema = z.object({
    name: z.string().min(2, "الاسم مطلوب").max(32),
    sex: z.string(),
    age: z.string().min(2, "يجب أن يكون العمر لا يقل عن 18 عاما"),
    symptopms: z.string().min(1, "يرجى وصف الحالة بدقة أكبر"),
    document: z
      .array(
        z.custom<DocumentPicker.DocumentPickerAsset>(
          (val) => typeof val === "object" && val !== null,
          { message: "يرجى ارفاق المستندات الصحيحة" }
        )
      )
      .nullable(),
    type: z.string(),
    quick: z.boolean(),
  });

  type form = z.infer<typeof formSchema>;
  function handleHurry(value: boolean) {
    setHurry(value);
    SOform.setFieldValue("quick", value);
  }
  //Documents Methods
  const pickDocument = async () => {
    const response = await DocumentPicker.getDocumentAsync({
      multiple: true,
    });
    setDocument(response.assets ?? []);
    SOform.setFieldValue("document", response.assets ?? null);
  };

  function deleteDocument(key: number) {
    setDocument(document.filter((_, i) => i != key));
  }

  useEffect(() => {
    const fetchReservationType = async () => {
      try {
        const result = await AsyncStorage.getItem("ReservationType");
        if (result) {
          setReservationType(result);
          SOform.setFieldValue("type", result);
        }
      } catch (error) {
        console.error("Error fetching reservation type:", error);
      }
    };

    fetchReservationType();
  }, []);

  //Form Hook
  const SOform = useForm({
    defaultValues: {
      name: `${user.profile.firstName + " " + user.profile.lastName}`,
      age: `${Math.abs(differenceInYears(new Date(), user.profile.birthDate))}`,
      sex: `${user.profile.gender === "male" ? "ذكر" : "أنثى"}`,
      symptopms: "",
      document: null as DocumentPicker.DocumentPickerAsset[] | null,
      type: "",
      quick: false,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      await AsyncStorage.setItem("formData", JSON.stringify(value));
      await AsyncStorage.setItem(
        "form_documents",
        JSON.stringify(value.document)
      );
      router.push("/SOpickDateAndTime");
    },
    validators: {
      onChange: formSchema,
    },
  });

  return (
    <KeyboardAvoidingView
      style={styles.layout}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <Text style={styles.fontHeading}>وصف الأعراض</Text>
      <Text style={styles.fontSubTitle}>
        الرجاء تعبئة البيانات و ارفاق الملفات ان وجدت
      </Text>
      <View style={styles.servicePrice}>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 8 }}
        >
          <Text
            style={{
              fontFamily: "FrutigerArabicRoman",
              fontSize: 12,
              color: "#737373",
            }}
          >
            , المدة المتوقعة للرد : 10 أيام
          </Text>
          {riyalIcon}
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
          سعر الخدمة العادي :
        </Text>
      </View>
      <View style={[styles.servicePrice, { marginTop: 15 }]}>
        <Text
          style={{
            fontFamily: "FrutigerArabicBold",
            fontSize: 10,
            color: "#737373",
            marginRight: 8,
          }}
        >
          للطلب المستعجل سيتم إضافة: 200 ريال، المدة المتوقعة للرد: 2 أيام
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={[styles.form, { width: width * 0.9 }]}
        keyboardShouldPersistTaps="handled"
      >
        {/* Name */}
        <SOform.Field
          name="name"
          children={(field) => (
            <View style={styles.fieldRow}>
              <Label style={styles.labelStyle}>الاسم</Label>
              <Input
                style={[
                  styles.inputFull,
                  { backgroundColor: "#F5F5F5", pointerEvents: "none" },
                ]}
              >
                <InputField
                  placeholder="محمد علي"
                  variant="outline"
                  value={field.state.value}
                  onChangeText={field.handleChange}
                  onBlur={field.handleBlur}
                  style={[styles.textRTL, { color: "#737373" }]}
                />
              </Input>
              {field.state.meta.errors.length > 0 && <Text>Error</Text>}
            </View>
          )}
        />

        {/* Age */}
        <SOform.Field
          name="age"
          children={(field) => (
            <View style={styles.fieldRow}>
              <Label style={styles.labelStyle}>العمر</Label>
              <Input
                style={[
                  styles.inputFull,
                  { backgroundColor: "#F5F5F5", pointerEvents: "none" },
                ]}
              >
                <InputField
                  placeholder="22"
                  variant="outline"
                  value={field.state.value}
                  onChangeText={field.handleChange}
                  onBlur={field.handleBlur}
                  keyboardType="numeric"
                  style={[styles.textRTL, { color: "#737373" }]}
                />
              </Input>
            </View>
          )}
        />

        {/* Sex */}
        <SOform.Field
          name="sex"
          children={(field) => (
            <View style={styles.fieldRow}>
              <Label style={styles.labelStyle}>الجنس</Label>
              <Input
                style={[
                  styles.inputFull,
                  { backgroundColor: "#F5F5F5", pointerEvents: "none" },
                ]}
              >
                <InputField
                  placeholder="ذكر"
                  variant="outline"
                  value={field.state.value}
                  onChangeText={field.handleChange}
                  onBlur={field.handleBlur}
                  style={[
                    styles.textRTL,
                    { fontWeight: "bold", color: "#737373" },
                  ]}
                />
              </Input>
            </View>
          )}
        />

        {/* Symptoms */}
        <SOform.Field
          name="symptopms"
          children={(field) => (
            <View style={styles.fieldRow}>
              <Label style={styles.labelStyle}>وصف الأعراض</Label>
              <Input style={[styles.inputFull, styles.symptopms]}>
                <InputField
                  placeholder="اعاني من ارتفاع في درجة الحرارة و الم في الحلق..."
                  variant="outline"
                  value={field.state.value}
                  onChangeText={field.handleChange}
                  onBlur={field.handleBlur}
                  multiline
                  numberOfLines={6}
                  style={[styles.textRTL, styles.textArea]}
                />
              </Input>
            </View>
          )}
        />

        {/*In a hurry? */}
        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={hurry}
            onValueChange={handleHurry}
            color={hurry ? "#2AB25F" : undefined}
          />
          <Text style={{ fontFamily: "FrutigerArabicBold" }}>الطلب مستعجل</Text>
        </View>
        <Button size="md" variant="outline" onPress={pickDocument}>
          <Text>ارفاق الملفات</Text>
        </Button>
        <Text
          style={{
            fontFamily: "FrutigerArabicRoman",
            fontSize: 12,
            color: "#737373",
            marginTop: 0,
          }}
        >
          PDF, PNG, JPG
        </Text>
        <View style={styles.outerContainer}>
          {document.map((e, key) => (
            <View style={styles.fileContainer} key={key}>
              <View style={styles.fileInnerContainer}>
                <Text
                  style={{ fontFamily: "FrutigerArabicBold", color: "#2AB25F" }}
                >
                  {e.name}
                </Text>
                <Button
                  onPress={() => deleteDocument(key)}
                  style={{ backgroundColor: "#2AB25F" }}
                >
                  <ButtonText
                    style={{
                      fontFamily: "FrutigerArabicBold",
                      color: "white",
                    }}
                  >
                    حذف
                  </ButtonText>
                </Button>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.buttons}>
          <Button
            size="md"
            variant="solid"
            action="primary"
            style={{
              backgroundColor: "white",
            }}
          >
            <ButtonText
              style={{
                color: "black",
                fontWeight: "normal",
                fontFamily: "FrutigerArabicBold",
              }}
            >
              الرجوع
            </ButtonText>
          </Button>
          <Button
            size="md"
            variant="solid"
            action="primary"
            style={{ backgroundColor: "#2AB25F" }}
            onPress={() => SOform.handleSubmit()}
          >
            <ButtonText style={{ fontFamily: "FrutigerArabicBold" }}>
              متابعة
            </ButtonText>
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    marginTop: 68,
    alignItems: "center",
  },
  fontHeading: {
    fontFamily: "FrutigerArabicBold",
    fontSize: 18,
  },
  fontSubTitle: {
    fontFamily: "FrutigerArabicRoman",
    fontSize: 14,
    color: "#62748E",
    marginTop: 4,
  },
  form: {
    direction: "rtl",
    writingDirection: "rtl",
    marginTop: 24,
    gap: 12,
    alignSelf: "center",
    alignItems: "center",
  },
  fieldRow: {
    width: 300,
    alignSelf: "center",
  },

  inputFull: {
    width: "100%",
  },
  textRTL: {
    textAlign: "right",
    writingDirection: "rtl",
    fontFamily: "FrutigerArabicRoman",
  },
  textArea: {
    textAlignVertical: "top",
    paddingTop: 10,
    lineHeight: 22,
  },
  symptopms: {
    height: 139,
  },
  labelStyle: {
    alignSelf: "flex-start",
    fontFamily: "FrutigerArabicBold",
    marginBottom: 6,
    fontSize: 14,
  },
  buttons: {
    flexDirection: "row",
    gap: 38,
    marginTop: 14,
    marginBottom: 50,
    justifyContent: "center",
  },
  fileContainer: {
    flexDirection: "row",
    fontSize: 4,
  },
  fileInnerContainer: {
    borderRadius: 8,
    fontSize: 8,
    flexDirection: "row",
    gap: 15,
  },
  outerContainer: {
    gap: 10,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
  servicePrice: {
    width: "85%",
    height: 40,
    backgroundColor: "rgba(42, 178, 95, 0.05)",
    borderWidth: 1,
    borderColor: "#2AB25F",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
    marginTop: 6,
  },
});

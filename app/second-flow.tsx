import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Label } from "@react-navigation/elements";
import { useForm } from "@tanstack/react-form";
import * as DocumentPicker from "expo-document-picker";
import { router } from "expo-router";
import { useState } from "react";
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
  const { width } = useWindowDimensions();

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
  });

  type form = z.infer<typeof formSchema>;

  //Documents Methods
  const pickDocument = async () => {
    const response = await DocumentPicker.getDocumentAsync({
      multiple: true,
    });
    setDocument(response.assets ?? []);
    form.setFieldValue("document", response.assets ?? null);
  };

  function deleteDocument(key: number) {
    setDocument(document.filter((_, i) => i != key));
  }

  //Form Hook
  const form = useForm({
    defaultValues: {
      name: "",
      age: "",
      sex: "",
      symptopms: "",
      document: null as DocumentPicker.DocumentPickerAsset[] | null,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      await AsyncStorage.setItem("formData", JSON.stringify(value));
      router.push("/third-flow");
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

      <ScrollView
        contentContainerStyle={[styles.form, { width: width * 0.9 }]}
        keyboardShouldPersistTaps="handled"
      >
        {/* Name */}
        <form.Field
          name="name"
          children={(field) => (
            <View style={styles.fieldRow}>
              <Label style={styles.labelStyle}>الاسم</Label>
              <Input style={styles.inputFull}>
                <InputField
                  placeholder="محمد علي"
                  variant="outline"
                  value={field.state.value}
                  onChangeText={field.handleChange}
                  onBlur={field.handleBlur}
                  style={styles.textRTL}
                />
              </Input>
              {field.state.meta.errors.length > 0 && <Text>Error</Text>}
            </View>
          )}
        />

        {/* Age */}
        <form.Field
          name="age"
          children={(field) => (
            <View style={styles.fieldRow}>
              <Label style={styles.labelStyle}>العمر</Label>
              <Input style={styles.inputFull}>
                <InputField
                  placeholder="22"
                  variant="outline"
                  value={field.state.value}
                  onChangeText={field.handleChange}
                  onBlur={field.handleBlur}
                  keyboardType="numeric"
                  style={styles.textRTL}
                />
              </Input>
            </View>
          )}
        />

        {/* Sex */}
        <form.Field
          name="sex"
          children={(field) => (
            <View style={styles.fieldRow}>
              <Label style={styles.labelStyle}>الجنس</Label>
              <Input style={[styles.inputFull, { backgroundColor: "#F5F5F5" }]}>
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
        <form.Field
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
            onPress={() => form.handleSubmit()}
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
    marginBottom: 18,
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
});

import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { Label } from "@react-navigation/elements";
import { useForm } from "@tanstack/react-form";
import * as DocumentPicker from "expo-document-picker";
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
  type PickedFile = DocumentPicker.DocumentPickerAsset;

  const { width } = useWindowDimensions();
  const [files, setFiles] = useState<PickedFile[]>([]);

  function deleteDocument(key: number) {
    setFiles(files.filter((_, i) => i != key));
  }

  //The schema must be the same as the form
  const formSchema = z.object({
    name: z.string().min(2, "Please provide a valid name").max(32),
    sex: z.string(),
    age: z.string().min(2, "You have to be 18 years old"),
    symptopms: z.string().min(1, "Please provide a proper description"),
    document: z
      .array(
        z.custom<DocumentPicker.DocumentPickerAsset>(
          (val) => typeof val === "object" && val !== null,
          { message: "Please attach a valid document" }
        )
      )
      .min(1, { message: "Please attach at least one document" })
      .nullable(),
  });

  const form = useForm({
    defaultValues: {
      name: "محمد علي",
      age: "18",
      sex: "ذكر",
      symptopms: "اعاني من ارتفاع في درجة الحرارة و الم في الحلق ",
      document: null as DocumentPicker.DocumentPickerAsset[] | null,
    },
    onSubmit: ({ value }) => {
      console.log(`👤 Name: ${value.name}`);
      console.log(`📅 Age: ${value.age}`);
      console.log(`⚧ Sex: ${value.sex}`);
      console.log(`📝 Symptoms: ${value.symptopms}`);
      console.log("📂 Document:", value.document);
    },
    validators: {
      onChange: formSchema,
    },
  });

  const pickDocument = async () => {
    const response = await DocumentPicker.getDocumentAsync({
      multiple: true,
    });
    const responseFiltered = response.assets?.map((e) => e.name) ?? [];
    setFiles(response.assets ?? []);
    form.setFieldValue("document", response.assets ?? null);
    console.log(response);
  };
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
              <Text></Text>
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
              Continue
            </ButtonText>
          </Button>
        </View>

        <Button size="md" variant="solid" onPress={pickDocument}>
          <Text>Upload</Text>
        </Button>
        <View>
          {files.map((e, key) => (
            <Text>
              {e.name} {key}
              <Button onPress={() => deleteDocument(key)}>
                <ButtonText>Delete</ButtonText>
              </Button>
            </Text>
          ))}
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
  },
  fieldRow: {
    width: "100%",
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
  },
  buttons: {
    flexDirection: "row",
    gap: 38,
    marginTop: 14,
    marginBottom: 18,
    justifyContent: "center",
  },
});

import * as DocumentPicker from "expo-document-picker";

export default interface form {
  name: string;
  age: number;
  sex: string;
  symptopms: string;
  document: DocumentPicker.DocumentPickerAsset[];
}

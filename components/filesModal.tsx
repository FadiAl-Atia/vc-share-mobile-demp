import { Button } from "@/components/ui/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as DocumentPicker from "expo-document-picker";
import * as Sharing from "expo-sharing";
import React, { useEffect, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

type FileModalProps = {
  visible: boolean;
  onClose: () => void;
  reservationId: string;
};

export default function FileModal({
  visible,
  onClose,
  reservationId,
}: FileModalProps) {
  const [files, setFiles] = useState<any[]>([]);
  const storageKey = reservationId ? `documents_${reservationId}` : "documents";
  const getFiles = async () => {
    const result = await AsyncStorage.getItem(storageKey);
    setFiles(result ? JSON.parse(result) : null);
    console.log(`The result is :${result}`);
  };

  function deleteFile(key: number) {
    setFiles(files.filter((_, i) => i != key));
  }

  const viewFile = async (key: number) => {
    const file = files[key];
    await Sharing.shareAsync(file.uri, {});
  };
  const addFiles = async () => {
    try {
      const newFiles = await DocumentPicker.getDocumentAsync({
        multiple: true,
        type: ["application/pdf", "image/png", "image/jpeg"],
      });

      console.log(newFiles);
      setFiles((prevItems) => [
        ...prevItems,
        ...(newFiles.assets ? newFiles.assets : []),
      ]);
    } catch (e) {
      console.error("You picked wrong type");
    }
  };

  useEffect(() => {
    if (visible) {
      getFiles();
    }
  }, [visible]);

  useEffect(() => {
    const store = async () => {
      await AsyncStorage.setItem(
        `documents_${reservationId}`,
        JSON.stringify(files)
      );
    };
    store();
  }, [files]);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.root}>
        <Pressable style={styles.backdrop} onPress={onClose} />
        <View style={styles.card}>
          <Text style={styles.title}>البيانات المرفقة</Text>
          <View
            style={{
              flexDirection: "row-reverse",
              gap: 8,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "FrutigerArabicBold",
                fontSize: 12,
              }}
            >
              التخصص المختار :
            </Text>
            <View
              style={{
                backgroundColor: "#F5F5F5",
                padding: 8,
                borderWidth: 1,
                borderColor: "#E5E5E5",
                borderRadius: 8,
              }}
            >
              <Text style={{ fontFamily: "FrutigerArabicLight", fontSize: 12 }}>
                طب العظام
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <Text
              style={{
                fontFamily: "FrutigerArabicBold",
                fontSize: 16,
                marginTop: 12,
              }}
            >
              الملفات المرفقة
            </Text>
            <Button
              onPress={addFiles}
              style={[styles.showButton, styles.addButton]}
            >
              <Svg width={16} height={16} viewBox="0 0 20 20" fill="none">
                <Path
                  d="M8.33337 12.9165H11.6667"
                  stroke="#171717"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M10 11.25L10 14.5833"
                  stroke="#171717"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M8.10663 2.5H6.25C5.21447 2.5 4.375 3.33947 4.375 4.375V15.625C4.375 16.6605 5.21447 17.5 6.25 17.5H13.75C14.7855 17.5 15.625 16.6605 15.625 15.625V10M8.10663 2.5C9.14217 2.5 10 3.33947 10 4.375V6.25C10 7.28554 10.8395 8.125 11.875 8.125H13.75C14.7855 8.125 15.625 8.96447 15.625 10M8.10663 2.5C11.1816 2.5 15.625 6.96642 15.625 10"
                  stroke="#171717"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </Button>
          </View>

          <View style={styles.fileList}>
            {files.length > 0 ? (
              files?.map((file, key) => (
                <View key={key} style={styles.fileItem}>
                  <Text style={styles.fileName}>
                    {file.name ?? String(file.file.name)}
                  </Text>
                  <Button
                    onPress={() => viewFile(key)}
                    style={styles.showButton}
                  >
                    <View
                      style={{
                        flexDirection: "row-reverse",
                        gap: 6,
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Svg
                        width={12}
                        height={12}
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <Path
                          d="M5.83333 1.75391C4.11497 1.7726 3.156 1.88173 2.51884 2.51889C1.75 3.28773 1.75 4.52517 1.75 7.00004C1.75 9.47492 1.75 10.7124 2.51884 11.4812C3.28769 12.25 4.52513 12.25 7 12.25C9.47487 12.25 10.7123 12.25 11.4812 11.4812C12.1002 10.8622 12.2208 9.93939 12.2443 8.31158"
                          stroke="#0A0A0A"
                          strokeWidth={1.05}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <Path
                          d="M12.25 1.75H8.3125M12.25 1.75V5.6875M12.25 1.75L7.4375 6.5625"
                          stroke="#0A0A0A"
                          strokeWidth={1.05}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </Svg>
                    </View>
                  </Button>
                </View>
              ))
            ) : (
              <View style={styles.emptyState}>
                <Text style={styles.emptyStateText}>لم يتم ارفاق ملفات</Text>
              </View>
            )}
          </View>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>اغلاق</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backdrop: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  card: {
    width: "85%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "FrutigerArabicBold",
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "white",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  closeButtonText: {
    color: "black",
    fontFamily: "FrutigerArabicBold",
    fontSize: 10,
  },
  fileItem: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    gap: 25,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 8,
    width: "100%",
    alignSelf: "stretch",
  },

  fileList: {
    flexWrap: "wrap",
    width: "100%",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E5E5E5",
    marginTop: 8,
  },
  fileName: {
    fontSize: 11,
    fontFamily: "FrutigerArabicBold",
    color: "#0A0A0A",
    flexShrink: 1,
  },
  showButton: {
    marginLeft: 12,
    backgroundColor: "white",
    borderRadius: 6,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  emptyState: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 12,

    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  emptyStateText: {
    fontFamily: "FrutigerArabicBold",
    fontSize: 14,
    color: "#666",
  },
  addButton: {
    backgroundColor: "#F5F5F5",
    borderWidth: 0,
  },
});

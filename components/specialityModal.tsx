import type Speciality from "@/models/Speciality";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

export default function SpecialityModal({ visible, onClose }: ModalProps) {
  const [speciality, setSpeciality] = useState<Speciality>();

  const getSpeciality = async () => {
    const result = await AsyncStorage.getItem("specialityModal");
    setSpeciality(result ? JSON.parse(result) : null);
  };

  useEffect(() => {
    if (visible) {
      getSpeciality();
    }
  }, [visible]);
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
          <View
            style={{
              flexDirection: "row-reverse",
              width: "90%",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.title}>{speciality?.name}</Text>
            <TouchableOpacity onPress={onClose}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row-reverse",
              gap: 8,
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#F5F5F5",
                padding: 8,
                borderWidth: 1,
                borderColor: "#E5E5E5",
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  fontFamily: "FrutigerArabicRoman",
                  fontSize: 14,
                  direction: "rtl",
                }}
              >
                {speciality?.description}
              </Text>
            </View>
          </View>
          <View style={styles.servicePrice}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 8,
              }}
            >
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
              سعر الخدمة
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "center",
              alignItems: "center",
              gap: 15,
            }}
          >
            <TouchableOpacity
              style={[
                styles.closeButton,
                { borderWidth: 0, backgroundColor: "#21387E" },
              ]}
            >
              <Text style={styles.closeButtonText}>حجز موعد مع طبيب</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.closeButton,
                { borderWidth: 0, backgroundColor: "#2A9D90" },
              ]}
            >
              <Text style={styles.closeButtonText}>احصل على رأي طبي ثاني</Text>
            </TouchableOpacity>
          </View>
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
    fontSize: 15,
    wordWrap: "break-word",
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
    color: "white",
    fontFamily: "FrutigerArabicBold",
    fontSize: 10,
  },
  fileItem: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-around",
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
  servicePrice: {
    width: "80%",
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
});

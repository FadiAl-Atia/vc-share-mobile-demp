import "@/global.css"; //This is for web, you can ignore it for react native.
import { Tabs } from "expo-router";
import React from "react";
import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#2AB25F",
          height: 80,
        },
        tabBarItemStyle: { paddingVertical: 6 },
        tabBarButton: (props: PressableProps) => {
          const { children, ...rest } = props;
          return (
            <Pressable {...rest} android_ripple={null}>
              {children}
            </Pressable>
          );
        },
      }}
      initialRouteName="home"
    >
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.activeIcon : styles.inActiveIcon}>
              <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <Path
                  d="M10.2681 21C10.4436 21.304 10.6961 21.5565 11.0001 21.732C11.3041 21.9075 11.649 21.9999 12.0001 21.9999C12.3511 21.9999 12.696 21.9075 13 21.732C13.3041 21.5565 13.5565 21.304 13.7321 21"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M3.26176 15.326C3.13112 15.4692 3.04491 15.6473 3.01361 15.8385C2.98231 16.0298 3.00728 16.2261 3.08546 16.4034C3.16365 16.5808 3.29169 16.7316 3.45401 16.8375C3.61633 16.9434 3.80594 16.9999 3.99976 17H19.9998C20.1936 17.0001 20.3832 16.9439 20.5456 16.8381C20.708 16.7324 20.8363 16.5818 20.9146 16.4045C20.993 16.2273 21.0182 16.0311 20.9872 15.8398C20.9561 15.6485 20.8702 15.4704 20.7398 15.327C19.4098 13.956 17.9998 12.499 17.9998 8.00003C17.9998 6.40873 17.3676 4.88261 16.2424 3.75739C15.1172 2.63217 13.5911 2.00003 11.9998 2.00003C10.4085 2.00003 8.88234 2.63217 7.75712 3.75739C6.6319 4.88261 5.99976 6.40873 5.99976 8.00003C5.99976 12.499 4.58876 13.956 3.26176 15.326Z"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.activeIcon : styles.inActiveIcon}>
              <Svg width={29} height={24} viewBox="0 0 29 24" fill="none">
                <Path
                  d="M22.6667 21V19C22.6667 17.9391 22.175 16.9217 21.2998 16.1716C20.4247 15.4214 19.2377 15 18 15H11C9.76233 15 8.57535 15.4214 7.70018 16.1716C6.82501 16.9217 6.33334 17.9391 6.33334 19V21"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M14.5 11C17.0773 11 19.1667 9.20914 19.1667 7C19.1667 4.79086 17.0773 3 14.5 3C11.9227 3 9.83334 4.79086 9.83334 7C9.83334 9.20914 11.9227 11 14.5 11Z"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="allSpecialities"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.activeIcon : styles.inActiveIcon}>
              <Svg width={28} height={28} viewBox="0 0 28 28" fill="none">
                <Path
                  d="M12.8333 2.33334V4.66668"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M5.83331 2.33334V4.66668"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M5.83331 3.5H4.66665C4.04781 3.5 3.45432 3.74583 3.01673 4.18342C2.57915 4.621 2.33331 5.21449 2.33331 5.83333V10.5C2.33331 12.3565 3.07081 14.137 4.38357 15.4497C5.69632 16.7625 7.4768 17.5 9.33331 17.5C11.1898 17.5 12.9703 16.7625 14.2831 15.4497C15.5958 14.137 16.3333 12.3565 16.3333 10.5V5.83333C16.3333 5.21449 16.0875 4.621 15.6499 4.18342C15.2123 3.74583 14.6188 3.5 14 3.5H12.8333"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M9.33331 17.5C9.33331 19.3565 10.0708 21.137 11.3836 22.4497C12.6963 23.7625 14.4768 24.5 16.3333 24.5C18.1898 24.5 19.9703 23.7625 21.2831 22.4497C22.5958 21.137 23.3333 19.3565 23.3333 17.5V14"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M23.3333 14C24.622 14 25.6667 12.9553 25.6667 11.6667C25.6667 10.378 24.622 9.33334 23.3333 9.33334C22.0447 9.33334 21 10.378 21 11.6667C21 12.9553 22.0447 14 23.3333 14Z"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="reservationDetails"
        options={{
          title: "Reservation",
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.activeIcon : styles.inActiveIcon}>
              <Svg width={29} height={28} viewBox="0 0 29 28" fill="none">
                <Path
                  d="M9.83331 2.33334V7.00001"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M19.1667 2.33334V7.00001"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M22.6667 4.66666H6.33333C5.04467 4.66666 4 5.71133 4 6.99999V23.3333C4 24.622 5.04467 25.6667 6.33333 25.6667H22.6667C23.9553 25.6667 25 24.622 25 23.3333V6.99999C25 5.71133 23.9553 4.66666 22.6667 4.66666Z"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M4 11.6667H25"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M9.83331 16.3333H9.84498"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M14.5 16.3333H14.5117"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M19.1667 16.3333H19.1784"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M9.83331 21H9.84498"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M14.5 21H14.5117"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M19.1667 21H19.1784"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.activeIcon : styles.inActiveIcon}>
              <Svg width={28} height={28} viewBox="0 0 28 28" fill="none">
                <Path
                  d="M17.5 24.5V15.1667C17.5 14.8572 17.3771 14.5605 17.1583 14.3417C16.9395 14.1229 16.6428 14 16.3333 14H11.6667C11.3572 14 11.0605 14.1229 10.8417 14.3417C10.6229 14.5605 10.5 14.8572 10.5 15.1667V24.5"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M3.5 11.6667C3.49992 11.3273 3.57389 10.9919 3.71675 10.684C3.85962 10.3761 4.06793 10.1031 4.32717 9.88401L12.4938 2.88518C12.915 2.52924 13.4486 2.33395 14 2.33395C14.5514 2.33395 15.085 2.52924 15.5062 2.88518L23.6728 9.88401C23.9321 10.1031 24.1404 10.3761 24.2832 10.684C24.4261 10.9919 24.5001 11.3273 24.5 11.6667V22.1667C24.5 22.7855 24.2542 23.379 23.8166 23.8166C23.379 24.2542 22.7855 24.5 22.1667 24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V11.6667Z"
                  stroke={focused ? "#2AB25F" : "white"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  activeIcon: {
    backgroundColor: "white",
    borderRadius: 1000,
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  inActiveIcon: {
    backgroundColor: "#2AB25F",
    borderRadius: 1000,
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
  },
});

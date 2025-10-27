import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, usePathname } from "expo-router";

export default function BottomTabs() {
  const router = useRouter();
  const pathname = usePathname(); 

  const tabs = [
    { name: "Chats", route: "/chat", icon: "chatbubble" },
    { name: "Internal", route: "/internal", icon: "people-outline" },
    { name: "People", route: "/people", icon: "people" },
    { name: "Settings", route: "/settings", icon: "settings-outline" },
  ];

  return (
    <View style={styles.bottomTabs}>
      {tabs.map((tab) => {
        const isActive = pathname === tab.route; 
        return (
          <TouchableOpacity
            key={tab.name}
            onPress={() => {
                if (!isActive) router.push(tab.route);
                    }}
            style={styles.tabButton}
          >
            <Ionicons name={tab.icon} size={24} color={isActive ? "#A855F7" : "#D1C4E9"} />
            <Text style={[styles.tabText, { color: isActive ? "#A855F7" : "#D1C4E9" }]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
  },
  tabButton: { alignItems: "center" },
  tabText: { fontSize: 12, marginTop: 4 },
});

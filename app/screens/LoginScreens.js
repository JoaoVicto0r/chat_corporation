import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import BottomTabs from "../../components/bottomTabs";
export default function ChatScreen() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("Chats");
  const router = useRouter();

  const tabs = ["Chats", "Internal", "People", "Settings"];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chats</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="create-outline" size={24} color="#A855F7" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="options-outline" size={24} color="#A855F7" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#fff"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={{ color: "#aaa" }}>Nenhuma conversa ainda</Text>
      </View>
    
        <BottomTabs />
    
      {/* Bottom Tabs 
      <View style={styles.bottomTabs}>
  {tabs.map((tab) => (
    <TouchableOpacity
      key={tab}
      onPress={() => {
        setActiveTab(tab); 
        if (tab === "Chats") router.push("/chat");       
        else if (tab === "Internal") router.push("/internal"); 
        else if (tab === "People") router.push("/People");     
        else if (tab === "Settings") router.push("/settings"); 
      }}
      style={styles.tabButton}
    >
      <Ionicons
        name={
          tab === "Chats"
            ? "chatbubble"
            : tab === "Internal"
            ? "people-outline"
            : tab === "People"
            ? "people"
            : "settings-outline"
        }
        size={24}
        color={activeTab === tab ? "#A855F7" : "#D1C4E9"}
      />
      <Text style={[styles.tabText, { color: activeTab === tab ? "#A855F7" : "#D1C4E9" }]}>
        {tab}
      </Text>
    </TouchableOpacity>
    
  ))}
</View>
*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: { fontSize: 24, fontWeight: "bold", color: "#A855F7" },
  headerIcons: { flexDirection: "row" },
  iconButton: { marginLeft: 16 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#A855F7",
    marginHorizontal: 16,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 8,
  },
  searchInput: { flex: 1, color: "#fff" },
  content: { flex: 1, justifyContent: "center", alignItems: "center" },
  bottomTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  tabButton: { alignItems: "center" },
  tabText: { fontSize: 12, marginTop: 4 },
});

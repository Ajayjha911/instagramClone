import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { setLanguage } from "src/utils/I18n";

export default function SelectLanguage({ navigation }) {
  const data = [
    { name: "English", code: "en", id: 1 },
    { name: "Hindi", code: "hi", id: 2 },
  ];
  const handleChange = ({ code }) => {
    setLanguage({ langCode: code });
    navigation.goBack();
  };
  return (
    <View style={style.container}>
      {data.map((lan) => {
        return (
          <View>
            <Pressable
              style={style.textContainer}
              onPress={() => handleChange({ code: lan.code })}
            >
              <Text style={style.text}>{lan.name}</Text>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    gap: 6,
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 20,
    color: "blue",
  },
});

import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import MainNavigator from "./src/navigators/MainNavigators";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./src/redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import i18n from "src/utils/I18n";
import { getLocales } from "expo-localization";
const App = () => {
  const deviceLanguage = getLocales()[0].languageCode;
  console.log("deviceLanguage--->", deviceLanguage);
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: "black" }}
          edges={["right", "left", "top"]}
        >
          <StatusBar barStyle="light-content" />
          <GestureHandlerRootView style={{ flex: 1 }}>
            <MainNavigator />
          </GestureHandlerRootView>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

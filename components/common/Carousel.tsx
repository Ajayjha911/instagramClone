import React from "react";
import { Image, View, useWindowDimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";

type props = {
  DATA: { img: string }[];
};
const Carousel = ({ DATA }: props) => {
  console.log(DATA);
  const { height, width } = useWindowDimensions();
  const renderItem = ({ item, index }) => {
    return (
      <View style={{ width: width, height: 300 }}>
        <Image source={item.img} style={{ height: 300, width: width }} />
      </View>
    );
  };
  return (
    <FlatList data={DATA} renderItem={renderItem} horizontal pagingEnabled />
  );
};

export default Carousel;

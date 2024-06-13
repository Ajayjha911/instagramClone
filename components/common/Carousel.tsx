import React, { useState } from "react";
import { Image, View, useWindowDimensions, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

type props = {
  DATA: { img: string }[];
};
const Carousel = ({ DATA }: props) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const { height, width } = useWindowDimensions();
  const RenderItem = ({ item, index }) => {
    return (
      <View style={{ width: width, height: 300 }}>
        <Image source={item.img} style={{ height: 300, width: width }} />
      </View>
    );
  };

  const renderDots = (item) => {
    return (
      <View
        style={{
          height: 7,
          width: 7,
          backgroundColor: item.index === activeIndex ? "red" : "white",
          marginLeft: 4,
          borderRadius: 50,
        }}
      >
        <Text></Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.floor(
            Math.floor(event.nativeEvent.contentOffset.x) /
              Math.floor(event.nativeEvent.layoutMeasurement.width)
          );
          // work with: index
          setActiveIndex(index);
        }}
        data={DATA}
        renderItem={RenderItem}
        horizontal
        pagingEnabled
      />
      <View style={{ position: "absolute", bottom: 5, left: width / 2 }}>
        <FlatList data={DATA} renderItem={renderDots} horizontal />
      </View>
    </View>
  );
};

export default Carousel;

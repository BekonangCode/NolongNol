import React from "react";
import { Button, Alert, Text, TouchableOpacity} from "react-native";
import style from "../style/buttonST";

const Tombol = () => {
  return (
    <TouchableOpacity style={style.tombol}
      onPress={() => Alert.alert("Kamu menekan tombol")}>
    <Text style = {style.tulisan}> Klik Saya </Text>
    </TouchableOpacity>
  );
};

export default Tombol;
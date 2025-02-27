import { Text, TouchableOpacity, Image, } from "react-native";
import React from "react";


let Card = ( ) => {
    return (
        <TouchableOpacity style={{backgroundColor: 'white', padding: 10, borderRadius: 10, width: 200, margin: 5,}}>
             <Image source={{uri: 'https://media.geeksforgeeks.org/wp-content/uploads/20210724024414/135deg2-660x322.png'}} style={{width: 200, height: 100, borderRadius: 10,}}/>
            <Text style={{fontSize: 20, textAlign: 'center',}}>Ini Gambar</Text>
            <Text style={{fontSize: 14, textAlign: 'center',}}>Ini Deskripsi Gambar</Text>
            
        </TouchableOpacity>
    )
}

export default Card;

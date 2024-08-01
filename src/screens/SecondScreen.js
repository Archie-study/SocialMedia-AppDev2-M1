import React from "react";
import { View, Text } from 'react-native'

const SecondScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lavender'}}>
            <View style={{backgroundColor: 'skyblue'}}>
                <Text>Mobile Legends</Text>
            </View>

            <View style={{backgroundColor: 'cornflowerblue'}}>
                <Text>PUBG</Text>
            </View>
        </View>
    )
}

export default SecondScreen
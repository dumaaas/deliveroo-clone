import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Currency from "react-currency-formatter"

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);

    if(items.length === 0) return null;
    
    return (
        <View className="absolute z-50 w-full bottom-10">
        <TouchableOpacity onPress={() => navigation.navigate("Basket")} className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1">
            <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
                {items.length}
            </Text>
            <Text className="flex-1 text-lg font-extrabold text-center text-white">
                View Basket
            </Text>
            <Text className="text-lg font-extrabold text-white">
                <Currency quantity={basketTotal} currency="GBP"/>
            </Text>
        </TouchableOpacity>
        </View>
    )
}

export default BasketIcon
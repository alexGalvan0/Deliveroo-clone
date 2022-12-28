import { SafeAreaView, Text, View, Image, TextInput } from 'react-native';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentIcon
} from "react-native-heroicons/outline"

const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,

        })
    }, [])
    return (
        <SafeAreaView className='bg-white'>
            <Text className="text-red-500">
                {/* header */}
                <View className="flex-row pb-3 items-center mx-4 space-x-2">
                    <Image
                        source={{
                            uri: 'https://links.papareact.com/wru'
                        }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full" />
                    <View className='flex-1'>
                        <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                        <Text className='font-bold text-xl'>Current Location
                            <ChevronDownIcon size={20} color="#00CBB" />
                        </Text>
                    </View>
                    <UserIcon size={35} color="#00CBB" />
                </View>
                <View>
                    <View className='flex-row'>
                        <MagnifyingGlassIcon />
                        <TextInput placeholder='Restaurants and cusinies' keyboardType='default' />
                    </View>

                </View>
            </Text>
        </SafeAreaView>
    )
}

export default HomeScreen
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imageUrl, title }) => {
    return (
        <TouchableOpacity>
            <Image
                source={{
                    uri:imageUrl,
                }}
                className="h-20 w-20rounded"
            />
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard
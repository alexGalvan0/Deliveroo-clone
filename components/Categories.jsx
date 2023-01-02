import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import { useState, useEffect } from 'react'
import sanityClient, { urlFor } from '../sanity'

const Categories = () => {
  const [categories, setCategoriles] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`
    *[_type == 'category']
    `).then(data => {
      setCategoriles(data)
    })
  }, [])
  console.log(categories)
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}

    >
      {categories.map((category => (
        <CategoryCard
          key={category._id}
          imageUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      )))}


    </ScrollView>
  )
}

export default Categories
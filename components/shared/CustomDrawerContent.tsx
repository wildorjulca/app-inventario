import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'


const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
        <View>
            <Text>Hola</Text>
        </View>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

export default CustomDrawerContent
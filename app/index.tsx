import React from 'react'
import { Redirect } from 'expo-router'
import MainLayout from '@/components/MainLayout'
import AuthProvider from '@/context/authContexto'

const index = () => {
    return (
        <AuthProvider>
        <MainLayout />
        </AuthProvider>
    )
    // return <Redirect href={'/(Drawer)/Home'} />
}

export default index
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

interface Props {
    title: string;
    icons: string;
    iconSize?: number;
    iconColor?: string; // Color dinámico para el ícono y el borde
    fondo: 'primary' | 'infoBold' | 'violet' | 'succes' | 'infoRigth';
}

const CutsomCardHome = ({ title, icons, iconSize = 24, iconColor = "black", fondo }: Props) => {
    const theme = {
        primary: 'bg-[#eaeaff]',    // Color para 'primary'
        infoBold: 'bg-[#fff0da]',   // Color para 'infoBold'
        violet: 'bg-[#fbebf8]',     // Color para 'violet'
        succes: 'bg-[#ebf5e9]',    // Color para 'succes'
        infoRigth: 'bg-[#fffae7]', // Color para 'infoRigth'
    }[fondo];

    return (
        <TouchableOpacity
        >
            <View style={{ borderColor: iconColor }} // Aplica el color del ícono al borde
                className={`${theme} w-[65px] h-[65px] rounded-full justify-center items-center border-2`}>
                <AntDesign className='font-bold' name={icons} size={iconSize} color={iconColor} />
            </View>
            <Text className='text-center font-semibold text-[12px]'>{title}</Text>
            {/* Ícono con color dinámico */}
        </TouchableOpacity>
    );
};

export default CutsomCardHome;
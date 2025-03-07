import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient'; // Importa LinearGradient

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    // <LinearGradient
    // colors={['#e2e8f0', '#cbd5e1', '#94a3b8']} // Degradado de grises
    // start={{ x: 0, y: 0 }} // Dirección del degradado (arriba a la izquierda)
    // end={{ x: 1, y: 1 }} // Dirección del degradado (abajo a la derecha)
    // style={{ flex: 1 }} // Ocupa todo el espacio disponible
    // >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }} // Asegura que el contenido ocupe todo el espacio disponible
        keyboardShouldPersistTaps="handled" // Maneja el teclado correctamente
      >
        {/* Contenedor de la imagen (mitad superior) */}
        <View className="flex-1 bg-slate-50">
          <Image
            source={require("../../../assets/images/phan-mem-tang-truong-ban-hang-lazada.png")}
            className="w-full "
            resizeMode='contain'
          />
        </View>

        {/* Contenedor del formulario (mitad inferior) */}
        <View className="w-full p-6 h-[400px] bg-slate-100 rounded-t-[40px] mt-4 relative bottom-5 gap-3">
          {/* Campo de usuario */}
          <Text className="text-neutral-400 text-lg">Usuario</Text>
          <TextInput
            placeholder="Email Address or user"
            className="rounded-xl bg-white p-3 px-4 py-5 "
          />

          {/* Campo de contraseña */}
          <Text className="text-neutral-400 text-lg">Password</Text>
          <View className="rounded-lg bg-gray-100 flex-row items-center">
            <TextInput
              placeholder="Password"
              className="flex-1 bg-white px-3 py-5 relative rounded-xl"
              secureTextEntry={!showPassword} // Alterna entre ocultar/mostrar
            />
            {/* Botón para mostrar/ocultar contraseña */}
            <TouchableOpacity className='absolute right-4' onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? <Eye size={24} color="gray" /> : <EyeOff size={24} color="gray" />}
            </TouchableOpacity>
          </View>

          {/* Botón de inicio de sesión */}
          <TouchableOpacity className="bg-blue-500 py-3 rounded-lg mt-4">
            <Text className="text-white text-center text-lg">Sign In</Text>
          </TouchableOpacity>

          {/* Enlace para crear cuenta */}
          <Text className="text-center mt-4">
            Don't have an account?{' '}
            <Text
              className="text-blue-600 font-bold"
              onPress={() => router.push('/(Stack)/register')}
            >
              Create Account
            </Text>
          </Text>
        </View>
      </ScrollView>
    // </LinearGradient>
  );
};

export default LoginScreen;
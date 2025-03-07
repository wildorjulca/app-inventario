import React from 'react';
import { Stack } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const _layoutStack = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
            backgroundColor: "#f8fafc"
        },
        headerStyle: {
          backgroundColor: '#f8fafc',
       
        },
        headerTintColor: '#000', // Color del texto y botones
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        headerTitleAlign: 'center', // Centrar el título
        headerShadowVisible: false, // Sin sombra en la cabecera
        // headerBackTitleVisible: false, // Ocultar texto del botón de retroceso
      }}
    >
      <Stack.Screen
        name="Login/index"
        options={{
          title: 'Iniciar Sesión',
          animation: 'fade_from_bottom', // Animación
          headerRight: () => (
            <Button
              onPress={() => alert('Botón derecho')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
      <Stack.Screen
        name="Register"
        options={{
          title: 'Registro',
          headerShown: false, // Ocultar cabecera
        }}
      />
    </Stack>
  );
};

export default _layoutStack;
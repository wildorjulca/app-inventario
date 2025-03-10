import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from '@/components/shared/CustomDrawerContent'; // Importa tu componente personalizado
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '@/context/authContexto';


export default function Layout() {
  return (

    <Drawer
      drawerContent={CustomDrawerContent} // Personaliza el contenido del Drawer
      screenOptions={{
        // drawerInactiveTintColor: "indigo",
        drawerContentStyle: {
          backgroundColor: "#fff"
        },
        headerShadowVisible: false,
        headerShown: true, // Muestra el encabezado
        drawerPosition: 'left', // Posición del Drawer (izquierda o derecha)
      }}
    >
      <Drawer.Screen
        name="Home/index" // Nombre de la ruta
        options={{
          // headerShown: false,
          drawerLabel: 'Home', // Texto en el Drawer
          title: 'Dashboard', // Título en el encabezado

          drawerIcon:({color,size})=> (
            <Ionicons name="home" size={size} color={color} />
            
          )
        }}
      />
      <Drawer.Screen
        name="ajustes/index" // Nombre de la ruta
        options={{
          // headerShown: false,
          drawerIcon: ({color,size})=>(
            <Ionicons name="settings-sharp" size={size} color={color} />
          ),
          drawerLabel: 'Ajustes', // Texto en el Drawer
          title: 'Ajustes personalizar', // Título en el encabezado
        }}
      />
    </Drawer>

  );
}
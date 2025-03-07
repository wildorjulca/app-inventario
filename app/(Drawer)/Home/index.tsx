import { View, Text } from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import CutsomCardHome from '@/components/shared/CutsomCardHome'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const data = {
  labels: ["Enero", "Febrero", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["Rainy Days"] // optional
};
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const HomeScreen = () => {
  return (
    <>
      <View className=' gap-4  bg-white flex-1'>
        {/* Card customButtom */}
      <View className='flex w-full flex-row gap-4 py-2 px-2'>
      <CutsomCardHome
          fondo='primary'
          title="Data"
          icons="table"
          iconSize={25}
          iconColor='#747bfc'
        />
        <CutsomCardHome
          fondo='infoBold'
          title="Home"
          icons="home"
          iconSize={25}
          iconColor='#ff9c2a'
        />
        <CutsomCardHome
          fondo='violet'
          title="Orders"
          icons="database"
          iconSize={25}
          iconColor='#efc7ea'
        />
      </View>
      {/* Estadisticas grafico */}
      <View className='p-2 bg-white'>
      <Text className='text-[20px] font-bold mb-2 text-slate-800'>Overview</Text>
      <LineChart
        data={{
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 32} // Ajusta el ancho
        height={220}
        yAxisLabel='$'
        yAxisSuffix='k'
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#ffffff', // Fondo blanco
          backgroundGradientFrom: '#ffffff', // Sin degradado
          backgroundGradientTo: '#ffffff', // Sin degradado
          decimalPlaces: 2,
          color: (opacity = 1) => `#5e94c2`, // Color de la línea (azul)
          labelColor: (opacity = 1) => `#5e94c2`, // Color de las etiquetas (azul)
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#fff', // Borde blanco para los puntos
          },
          propsForLabels: {
            fontSize: 12,
            fontWeight: 'bold',
            fill: '#5e94c2', // Color de los números y meses (azul)
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
      </View>
    
    </>

  )
}

export default HomeScreen

{/* <Ionicons name="home" size={size} color={color} /> */ }
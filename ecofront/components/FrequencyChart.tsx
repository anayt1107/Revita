import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

interface FrequencyChartProps {}

const FrequencyChart: React.FC<FrequencyChartProps> = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0, 0], 
        color: (opacity = 1) => `rgba(52, 152, 219, ${opacity})`, 
        strokeWidth: 2 
      },
      {
        data: [10, 10, 10, 10, 10, 10, 10],
        color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`, // Transparent
      }
    ],
  };

  return (
    <View style={styles.container}>

      <BarChart
        data={data}
        width={350}
        height={220} 
        fromZero={true} 
        withInnerLines={false} 
        yAxisLabel=""       // Add prefix to Y-axis labels
        yAxisSuffix=""      // Add suffix to Y-axis labels
        yAxisInterval={1} 
        withVerticalLabels={true} 
        
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0, 
          color: (opacity = 1) => `rgba(52, 152, 219, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#fff',
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
    marginRight: 50, 
    justifyContent:'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default FrequencyChart;
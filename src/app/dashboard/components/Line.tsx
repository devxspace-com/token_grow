import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
      color: 'white'
    }
  },
  scales: {
    x: {
      ticks: {
        color: 'white', // Set the color of the labels on the x-axis
      },
    },
    y: {
      ticks: {
        color: 'white', // Set the color of the labels on the y-axis
      },
    },
  },

};

const labels = ['BNB', 'BTC', 'ETH', 'XRP', 'MATIC'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [5, 8, 23, 39, 50],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      color: 'white'
    },
  ],
};

export function Linegraph() {
  return <Line options={options} data={data} />;
}
export default Linegraph;
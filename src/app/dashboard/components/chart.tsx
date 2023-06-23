'use client';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: 'Investment Growth',
    },
  },
};

const labels = ['BNB', 'BTC', 'ETH', 'XRP', 'MATIC'];
const barColors = ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(255, 205, 86, 0.5)', 'rgba(153, 102, 255, 0.5)']

export const data = {
  labels,
  datasets: [
    {
      label: 'Coin',
      data: [10, 20, 30, 40, 50],
      backgroundColor: barColors,
      borderWidth: 1,
    }
  ],
};

const barchar = () => {
  return <Bar options={options} data={data} />;
}

export default barchar;


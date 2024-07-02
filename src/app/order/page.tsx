'use client';
import OrderItem from '@/components/orderItem';
import { foods } from '@/data/foods';
import { PhoneIcon } from '@heroicons/react/24/solid';

import React, { useState } from 'react';

const OrderPage = () => {
  const [portions, setPortions] = useState<{ [key: string]: number }>(
    {}
  );

  const updatePortion = (name: string, value: number) => {
    setPortions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <main className=" p-24">
      <div className="flex border-2 border-gray-300 flex-col justify-center items-center gap-10 p-2">
        <h1 className="uppercase text-2xl font-bold text-red-400 tracking-wide w-full text-center">
          Pesan Sekarang
        </h1>
        {foods.map((food) => {
          return (
            <OrderItem
              key={food.id}
              food={food}
              updatePortion={updatePortion}
            />
          );
        })}
        <button
          onClick={() => console.log(portions)}
          type="button"
          className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center inline-flex items-center me-2 py-2 px-3 gap-2">
          Kirim Pesanan
        </button>
      </div>
    </main>
  );
};

export default OrderPage;

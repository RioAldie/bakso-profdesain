'use client';
import React, { useState } from 'react';
import Food from './food';
import { foods } from '@/data/foods';
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/solid';

const OrderItem = ({
  food,
  updatePortion,
}: {
  food: any;
  updatePortion: (id: string, value: number) => void;
}) => {
  const [value, setValue] = useState(0);

  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 1);
      updatePortion(food.id, value - 1);
    }
  };
  const handleIncrement = () => {
    if (value < 10) {
      setValue(value + 1);
      updatePortion(food.id, value + 1);
    }
  };

  return (
    <div className="w-full flex flex-row justify-center gap-28">
      <Food name={food.name} price={food.harga} image={food.image} />
      <div className="flex flex-row gap-10 items-center">
        <button
          onClick={handleDecrement}
          className="bg-red-500  rounded-lg">
          <MinusCircleIcon className="text-white size-5" />
        </button>

        <p> {value} </p>
        <button
          onClick={handleIncrement}
          className="bg-red-500  rounded-lg">
          <PlusCircleIcon className="text-white size-5" />
        </button>
      </div>
    </div>
  );
};

export default OrderItem;

'use client';
import OrderItem from '@/components/orderItem';
import { useAuth } from '@/context/authContext';
import { foods } from '@/data/foods';
import { createOrder } from '@/lib/actions';
import { getUserFromLocal } from '@/lib/service';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { redirect, useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';

const OrderPage = () => {
  const [userActive, setUserActive] = useState<string | null>(null);
  const [portions, setPortions] = useState<{ [key: string]: number }>(
    {
      bakso_lava: 0,
      bakso_ori: 0,
      es_jeruk: 0,
      es_teh: 0,
      mie_bakso: 0,
    }
  );

  const { userId } = useAuth();
  const router = useRouter();
  if (userId === null && userActive === null) {
    redirect('/login');
  }

  const updatePortion = (id: string, value: number) => {
    setPortions((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleOrder = async () => {
    const res = await createOrder(
      userId,
      portions.bakso_lava,
      portions.bakso_ori,
      portions.mie_bakso,
      portions.es_jeruk,
      portions.es_teh
    );

    router.push('/profile');
  };

  useEffect(() => {
    let user = localStorage.getItem('userId');

    console.log(user);
    setUserActive(user);
  }, []);
  return (
    <main className=" p-24 flex  flex-col justify-center items-center">
      <div className="flex border-2 border-gray-300 flex-col justify-center items-center gap-10 p-20">
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
          onClick={handleOrder}
          type="button"
          className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center inline-flex items-center me-2 py-2 px-3 gap-2">
          Kirim Pesanan
        </button>
      </div>
    </main>
  );
};

export default OrderPage;

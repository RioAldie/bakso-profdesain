'use client';
import OrderHistory from '@/components/orderHistory';
import { useAuth } from '@/context/authContext';
import { getOrder } from '@/lib/actions';
import { orderProps } from '@/lib/type';
import {
  ArchiveBoxIcon,
  ArrowLeftStartOnRectangleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const { userId } = useAuth();
  const [orders, setOrders] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const data = await getOrder(userId);

        setOrders(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [userId, isChange]);
  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p>Error:</p>;

  return (
    <section className="pt-24 px-[6.25%] text-navy h-fit transition-all mb-20 sm:mb-12">
      <div className="border p-4 rounded-lg mt-2 flex justify-between tab:flex-col">
        <div className="flex items-center">
          <UserCircleIcon className="size-9 text-red-500" />
          <div className="ms-3">
            <div className="font-semibold text-lg">sherlin</div>
          </div>
        </div>
        <div className="tab:mt-4 items-center flex gap-3 tab:justify-center">
          <Link href={'/login'}>
            <button className=" sm:p-2 bg-white-100 hover:bg-white-300 rounded-lg text-sm flex w-24 h-10 flex-row items-center">
              <ArrowLeftStartOnRectangleIcon className="size-6 text-red-500" />
              <p className="font-medium text-red-500">Logout</p>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {orders.data?.map((order: orderProps) => {
          return (
            <OrderHistory
              key={order.id}
              mie_bakso={order.mie_bakso}
              bakso_lava={order.bakso_lava}
              bakso_ori={order.bakso_ori}
              es_jeruk={order.es_jeruk}
              es_teh={order.es_teh}
              id={order.id}
              setIsChange={setIsChange}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProfilePage;

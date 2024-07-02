'use client';
import { deleteOrder } from '@/lib/actions';
import { orderProps } from '@/lib/type';
import { revalidatePath } from 'next/cache';
import { useRouter } from 'next/navigation';
import React from 'react';

const OrderHistory = (props: orderProps) => {
  const {
    bakso_lava,
    bakso_ori,
    mie_bakso,
    es_jeruk,
    es_teh,
    id,
    setIsChange,
  } = props;

  const router = useRouter();

  const handleDelete = async () => {
    const res = await deleteOrder(id);

    setIsChange((prev: boolean) => !prev);
  };
  return (
    <div className="border p-4 rounded-lg mt-2 flex justify-between tab:flex-col items-center">
      <div className="w-full h-8 flex-row flex gap-2">
        <p className="border bg-slate-200 p-1">
          Bakso Lava: {bakso_lava}
        </p>
        <p className="border bg-slate-200 p-1">
          Bakso Original: {bakso_ori}
        </p>
        <p className="border bg-slate-200 p-1">
          Mie Bakso: {mie_bakso}
        </p>
        <p className="border bg-slate-200 p-1">Es Teh: {es_jeruk}</p>
        <p className="border bg-slate-200 p-1">Es Jeruk: {es_teh}</p>
      </div>
      <div className="flex flex-row">
        <button
          type="button"
          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
          Edit
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="focus:outline-none text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-red-900">
          Hapus
        </button>
      </div>
    </div>
  );
};

export default OrderHistory;

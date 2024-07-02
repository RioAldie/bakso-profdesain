'use server';

import { revalidatePath } from 'next/cache';
import prisma from './client';
import { redirect } from 'next/navigation';
import { orderProps } from './type';

export const createAccount = async (formData: FormData) => {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;
  const recentUser = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });

  if (recentUser) {
    return { status: 401, message: 'username sudah digunakan' };
  }
  try {
    await prisma.user.create({
      data: {
        username,
        password,
      },
    });
  } catch (err) {
    console.log(err);
    return 'Something went wrong!';
  }
  revalidatePath('/login');
};

export const login = async (username: string, password: string) => {
  try {
    const recentUser = await prisma.user.findFirst({
      where: {
        username: username,
        password: password,
      },
    });

    if (!recentUser) {
      return { status: 404, message: 'username tidak ditemukan' };
    }

    return { status: 200, data: recentUser };
  } catch (err) {
    console.log(err);
    throw new Error('Something went wrong!');
  }
};

export const createOrder = async (
  userId: string,
  bakso_lava: any | 0,
  bakso_ori: any | 0,
  mie_bakso: any | 0,
  es_jeruk: any | 0,
  es_teh: any | 0
) => {
  try {
    await prisma.order.create({
      data: {
        userId,
        bakso_lava,
        bakso_ori,
        mie_bakso,
        es_jeruk,
        es_teh,
      },
    });

    return { status: 200, message: 'berhasil' };
  } catch (err) {
    console.log(err);
    return { status: 404, message: 'gagal menambahkan pesanan' };
  }
};

export const getOrder = async (userId: string) => {
  console.log(userId, 'hi');
  try {
    const orders = await prisma.order.findMany({
      where: {
        userId: userId,
      },
    });

    if (!orders) {
      return { status: 300, message: 'data kosong' };
    }
    return { status: 200, data: orders };
  } catch (error) {
    return { status: 404, message: 'gagal memuat pesanan' };
  }
};
export const deleteOrder = async (id: number) => {
  try {
    const orders = await prisma.order.delete({
      where: {
        id: id,
      },
    });

    if (!orders) {
      return { status: 300, message: 'data kosong' };
    }
    return { status: 200 };
  } catch (error) {
    return { status: 404, message: 'gagal memuat pesanan' };
  }
};

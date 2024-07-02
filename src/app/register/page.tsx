'use client';
import { createAccount } from '@/lib/actions';
import Link from 'next/link';
import React from 'react';

const RegisterPage = () => {
  return (
    <main className=" p-24">
      <form
        action={(formData) => createAccount(formData)}
        className="max-w-sm mx-auto">
        <h2 className="text-2xl text-red-500">Daftar Akun</h2>
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 ">
            Your username
          </label>
          <input
            type="username"
            id="username"
            name="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:focus:ring-red-500 dark:focus:border-red-500"
            placeholder=""
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 ">
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:focus:ring-red-500 dark:focus:border-red-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
          Daftar
        </button>
        <p className="text-center mt-5">
          Sudah punya akun?{' '}
          <Link href={'/login'} className="text-red-500">
            masuk disini
          </Link>
        </p>
      </form>
    </main>
  );
};

export default RegisterPage;

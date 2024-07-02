'use client';

import { useAuth } from '@/context/authContext';
import { login } from '@/lib/actions';

import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginPage = () => {
  let { loginUser } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await login(username, password);

    if (res.status === 404) {
      return setError(true);
    }

    loginUser(res.data?.id);

    router.push('/');
  };
  return (
    <main className=" p-24">
      <form onSubmit={handleLogin} className="max-w-sm mx-auto">
        <h2 className="text-2xl text-red-500">Login</h2>
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 ">
            Your username
          </label>
          <input
            type="username"
            onChange={(e) => setUsername(e.target.value)}
            id="username"
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
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:focus:ring-red-500 dark:focus:border-red-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
          Submit
        </button>{' '}
        {error && <p>Password atau Email Salah</p>}
        <p className="text-center mt-5">
          Belum punya akun?{' '}
          <Link href={'/register'} className="text-red-500">
            daftar disini
          </Link>
        </p>
      </form>
    </main>
  );
};

export default LoginPage;

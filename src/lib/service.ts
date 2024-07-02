'use client';

export const getUserFromLocal = () => {
  let userId = localStorage.getItem('userId');

  return userId;
};

'use client';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface AuthContextType {
  userId: string | null;
  loginUser: () => void;
}

export const AuthContext = createContext<AuthContextType | any>(
  undefined
);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [userId, setUserId] = useState<string | null>(null);

  const loginUser = (userId: string) => {
    JSON.stringify(localStorage.setItem('userId', userId));
    setUserId(userId);
  };

  useEffect(() => {
    let recentUserId = localStorage.getItem('userId');

    if (recentUserId) {
      setUserId(userId);
    }
  }, []);
  console.log(userId);
  return (
    <AuthContext.Provider value={{ userId, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

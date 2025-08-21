"use client"

import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import Container from '@/components/shared/container/Container';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/Feature/user-slice';
import { useRouter } from 'next/navigation';

export default function App() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser({
      email: 'lisa@gmail.com',
    }));
    router.push('/');
  };
  return (
    <Container className="my-10 lg:my-16">
      <div className="w-full max-w-md space-y-6 bg-white">
        {/* Welcome Message */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">Welcome back!</h1>
        <p className="text-base mb-8 text-center font-semibold text-gray-700">
          lisa@gmail.com <Link href="/switch-account" className="underline">Switch account</Link>
        </p>

        {/* Password Input */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Link href="/reset-password" className="text-sm cursor-pointer hover:underline">
              Forgot password
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
          />
        </div>

        {/* Sign In Button */}
        <Button
          onClick={handleSubmit}
          className="px-8 py-6 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200 w-full"
        >
          Sign in
        </Button>
      </div>
    </Container>
  );
}

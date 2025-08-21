import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI button is available
import { Input } from '@/components/ui/input'; // Assuming Shadcn UI input is available
import { Eye, EyeOff } from 'lucide-react'; // For eye icons

export default function PasswordModalContents() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 p-6 flex items-start justify-center">
      <div className="w-full max-w-4xl space-y-6 bg-white p-8 rounded-lg shadow-sm">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
          Password
        </h1>

        {/* Password Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-base text-gray-600 mb-6">
              Create a password or modify your existing one.
            </p>

            {/* Current password */}
            <div className="mb-4">
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Current password
              </label>
              <Input
                id="currentPassword"
                type="password"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
              />
            </div>

            {/* New password */}
            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                New password
              </label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type="password"
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12 pr-10"
                />
                <Eye size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" />
              </div>
            </div>

            {/* Confirm password */}
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-start gap-4">
              <Button
                variant="outline"
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
              >
                Cancel
              </Button>
              <Button
                className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary transition-colors duration-200"
              >
                Save
              </Button>
            </div>
          </div>

          {/* Right side - New password with crossed eye (interpreted as an alternative or visual cue) */}
          <div className="hidden md:flex flex-col items-center justify-center">
            <label htmlFor="newPasswordAlt" className="block text-sm font-medium text-gray-700 mb-1">
              New password
            </label>
            <div className="relative w-full">
              <Input
                id="newPasswordAlt"
                type="password"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500 h-12 pr-10"
              />
              <EyeOff size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function ShopFilter({ path }) {
  return (
    <div className="">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4">
        {/* Filter Options */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 w-full sm:w-auto flex-1">
          {/* Vehicle Select */}
          <Select>
            <SelectTrigger className="w-full bg-secondary text-sm">
              <SelectValue placeholder="Any Vehicle" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">All Makes</SelectItem>
              <SelectItem value="audi">Audi</SelectItem>
              <SelectItem value="bmw">BMW</SelectItem>
              <SelectItem value="mercedes">Mercedes</SelectItem>
            </SelectContent>
          </Select>

          {/* All Models Button */}
          <button className="w-full px-3 py-2 text-sm font-medium rounded-md bg-secondary text-gray-600 hover:text-gray-900">
            All Models
          </button>

          {/* Location Button */}
          <button className="w-full px-3 py-2 text-sm font-medium rounded-md bg-secondary text-gray-600 hover:text-gray-900">
            RH15 9NF
          </button>

          {/* Year/Model Select */}
          <Select>
            <SelectTrigger className="w-full bg-secondary text-sm">
              <SelectValue placeholder="2022 BMW X3" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="x3-2022">2022 BMW X3</SelectItem>
              <SelectItem value="x3-2021">2021 BMW X3</SelectItem>
              <SelectItem value="x3-2020">2020 BMW X3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Action Button */}
        <div className="w-full sm:w-auto">
          <Link href={path || "#"}>
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary text-white px-6 py-2 text-sm">
              Find Parts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

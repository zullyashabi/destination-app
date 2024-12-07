'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { SearchFilters } from '@/types';

export default function SearchForm() {
  const router = useRouter();
  const [filters, setFilters] = useState<SearchFilters>({
    budget: 1000,
    type: [],
    activities: [],
    duration: 7
  });

  const destinationTypes = [
    { label: 'Beach', value: 'beach' },
    { label: 'Mountain', value: 'mountain' },
    { label: 'City', value: 'city' },
    { label: 'Countryside', value: 'countryside' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchParams = new URLSearchParams({
      ...filters,
      type: filters.type.join(','),
      activities: filters.activities.join(',')
    });
    router.push(`/results?${searchParams.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Budget (per person)</label>
          <input
            type="range"
            min="100"
            max="10000"
            value={filters.budget}
            onChange={(e) => setFilters({ ...filters, budget: parseInt(e.target.value) })}
            className="w-full"
          />
          <div className="text-center">${filters.budget}</div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Destination Type</label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {destinationTypes.map((type) => (
              <label key={type.value} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={type.value}
                  onChange={(e) => {
                    const newTypes = e.target.checked
                      ? [...filters.type, type.value]
                      : filters.type.filter((t) => t !== type.value);
                    setFilters({ ...filters, type: newTypes });
                  }}
                  className="rounded"
                />
                <span>{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Duration (days)</label>
          <input
            type="number"
            min="1"
            max="30"
            value={filters.duration}
            onChange={(e) => setFilters({ ...filters, duration: parseInt(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Find Destinations
        </button>
      </div>
    </form>
  );
} 
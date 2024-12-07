import React from 'react';
import SearchForm from '@/components/SearchForm';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <SearchForm />
      </div>
    </main>
  );
} 
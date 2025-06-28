import React from 'react'
import Header from './Header'
import Footer from './Footer'


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="bg-gray-500 min-w-full min-h-[95vh] px-4 py-8">
        {children}
      </main>
      <Footer />
    </>
  )
}

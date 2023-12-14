import React from 'react'
import MyNav from '../components/MainLayoutComponents/MyNav'
import Footer from '../components/MainLayoutComponents/Footer'

export default function MainLayout({children}) {
  return (
    <>
    <MyNav />
    {children}
    <Footer />
    </>
  )
}

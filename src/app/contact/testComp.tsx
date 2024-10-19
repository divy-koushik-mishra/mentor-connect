"use client";
import { getAllContactSubmissions } from '@/lib/appwrite';
import React from 'react'

const TestComp = () => {
   console.log(getAllContactSubmissions());
    // getAllContactSubmissions()
  return (
    <div>testComp</div>
  )
}

export default TestComp
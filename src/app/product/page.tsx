"use client";
import React from 'react'
import { RequireAuth } from '../(auth)/_components/requireAuth';

const product = () => {
  return (
    <div>product</div>
  )
}

export default RequireAuth(product);
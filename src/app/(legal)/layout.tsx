"use client"

import React from 'react'

const LegalLayout = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="md:col-span-3">
          {children}
        </div>
      </div>
    </div>
  )
}

export default LegalLayout 
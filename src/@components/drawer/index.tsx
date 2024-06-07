'use client'
import React from 'react'
import DrawerLib from 'react-modern-drawer'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}
const Drawer = (props: DrawerProps) => {
  return (
    <DrawerLib
      open={props.isOpen}
      onClose={props.onClose}
      direction='right' 
      size={400}
      lockBackgroundScroll={true} 
    >
      <div  style={{    height: '100%',     overflowY: 'auto',   }}  > 
      {props.children}
      </div>
    </DrawerLib>
  )
}

export default Drawer
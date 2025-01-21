import MyAccount from '@/app/Component/account'
import Navbar from '@/app/Component/header'
import React from 'react'

function Account() {
  return (
    <div>
      <Navbar />
        <MyAccount />
    </div>
  )
}

export default Account
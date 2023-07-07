import React from 'react'
import { store } from '@/stores'

function ProfileBar() {
  const { user } = store.getState().user
  console.log(user)

  return (
    <div>
      Active user: <b>{user.name}</b>
    </div>
  )
}

export default ProfileBar

import { store } from '@/stores'

export function ProfileBar() {
  const { user } = store.getState().user

  return (
    <div>
      Active user: <b>{user.name}</b>
    </div>
  )
}

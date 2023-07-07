import '@/styles.css'

import { Header } from '@/components/header'

import StoreProvider from '@/stores/store-provider'

import { Rubik } from 'next/font/google'

import { store } from '@/stores'

import { fetchUser } from '@/stores/user-store'

const BodyFont = Rubik({
  subsets: ['latin'],
})

export default async function RootLayout({ children }) {
  await store.dispatch(fetchUser())
  const { user } = store.getState().user

  return (
    <html>
      <body className={BodyFont.className}>
        <StoreProvider
          preloadedState={{
            user: {
              user,
            },
          }}
        >
          <Header />
          <main>{children}</main>
        </StoreProvider>
      </body>
    </html>
  )
}

import { ReactNode } from 'react'

interface MainProps {
  children?: ReactNode
}
export const Main = ({ children }: MainProps) => {
  return <main className="flex min-h-screen flex-col">{children}</main>
}

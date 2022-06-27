import { ContentfulMain } from '../../../types'

export const Main = ({ title }: ContentfulMain) => {
  return <main className="flex min-h-screen flex-col">{title}</main>
}

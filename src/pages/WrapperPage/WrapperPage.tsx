import { FC, ReactNode } from 'react'
import Header from '../../components/organisms/Header/Header'

type WrapperPageProps = {
  children: ReactNode
}

const WrapperPage: FC<WrapperPageProps> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

export default WrapperPage

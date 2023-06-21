import React, { FC, ReactNode } from 'react'
import Header from '../../components/organisms/Header/Header'

type WrapperPageProps = {
  children: ReactNode
}

const WrapperPage: FC<WrapperPageProps> = React.memo(({ children }) => (
  <>
    <Header />
    <main className='flex-shrink-0 flex-fill d-flex flex-column'>{children}</main>
  </>
))

export default WrapperPage

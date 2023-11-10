import type { NextPage } from 'next'

import { TopContainer } from '~/components/Containers/TopContainer'
import { DefaultLayout } from '~/components/Layouts/DefaultLayout'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <TopContainer />
    </DefaultLayout>
  )
}

export default Home

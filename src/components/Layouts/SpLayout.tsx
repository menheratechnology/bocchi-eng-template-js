import { ReactElement, ReactNode } from 'react'

import { PageHead } from '~/components/Head'
import { FlexBox } from '~/components/Base/FlexBox'

type Props = {
  children?: ReactNode
}

export const SpLayout = ({ children }: Props): ReactElement => (
  <FlexBox>
    <PageHead />
    <FlexBox
      style={{
        minHeight: '100vh',
        width: 500,
        maxWidth: 500,
      }}
    >
      {children}
    </FlexBox>
  </FlexBox>
)

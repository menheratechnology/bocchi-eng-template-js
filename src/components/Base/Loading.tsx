import { FlexBox } from '~/components/Base/FlexBox'

export const LoadingAnimation = (): React.ReactElement => (
  <FlexBox height="100%" justify="center" align="center">
    loading
  </FlexBox>
)

export const LoadingOverlay = (): React.ReactElement => (
  <FlexBox
    height="100vh"
    width="100vw"
    style={{
      backdropFilter: 'blur(3px)',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
    }}
  >
    <LoadingAnimation />
  </FlexBox>
)

import { render } from '@testing-library/react'

import { ActionButton } from '.'

const setup = () => {
  const defaultProps = {
    complete: false,
    onClick: jest.fn(),
  }
  const utils = render(<ActionButton {...defaultProps}>test</ActionButton>)
  return utils
}

describe('ActionButton', () => {
  it('should render', () => {
    const { asFragment } = setup()
    expect(asFragment()).toMatchSnapshot()
  })
})

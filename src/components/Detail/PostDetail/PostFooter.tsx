import styled from '@emotion/styled'
import React from 'react'
import { colors } from '../../../styles'

type Props = {}

const Footer: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <a href="/">← Back</a>
      <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑ Top
      </a>
    </StyledWrapper>
  )
}

export default Footer

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  color: ${colors.gray10};
  a {
    margin-top: 0.5rem;
    cursor: pointer;

    :hover {
      color: ${colors.gray12};
    }
  }
`

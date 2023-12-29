import styled from '@emotion/styled'
import React from 'react'
import { colors } from '../../styles'
import { COLOR_SET } from './constants'

export const getColorClassByName = (name: string): string => {
  try {
    let sum = 0
    name.split('').forEach((alphabet) => (sum = sum + alphabet.charCodeAt(0)))
    const colorKey = sum
      .toString(8)
      ?.[sum.toString(8).length - 1].toUpperCase()
    return COLOR_SET[colorKey]
  } catch {
    return COLOR_SET[0]
  }
}

interface Props {
  children: string
}

const Tag: React.FC<Props> = ({ children }) => {
  return (
    <StyledWrapper style={{ backgroundColor: getColorClassByName(children) }}>
      {children}
    </StyledWrapper>
  )
}

export default Tag

const StyledWrapper = styled.div`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 50px;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  color: ${colors.gray12};
  cursor: pointer;
  white-space: nowrap;
`

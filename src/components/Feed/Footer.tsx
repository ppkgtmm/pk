import { config as CONFIG } from '../../constants/projects'
import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../../styles'

const d = new Date()
const y = d.getFullYear()
const from = +CONFIG.since

interface Props {
  className?: string
}

const Footer = ({ className }: Props) => {
  return (
    <StyledWrapper className={className}>
      <a
        href={`https://github.com/${CONFIG.profile.github}`}
        target="_blank"
        rel="noreferrer"
      >
        © {CONFIG.profile.name} {from === y || !from ? y : `${from} - ${y}`}
      </a>
    </StyledWrapper>
  )
}

export default Footer

const StyledWrapper = styled.div`
  a {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    display: block;
    text-align: center;
    color: ${colors.gray10};
  }
`

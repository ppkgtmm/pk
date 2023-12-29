import styled from '@emotion/styled'
// import { useRouter } from 'next/router'
import React from 'react'
import { colors } from '../../styles'

interface Props {
  children: string
}

const Tag: React.FC<Props> = ({ children }) => {
  // const router = useRouter()

  // const handleClick = (value: string) => {
  //   router.push(`/?tag=${value}`)
  // }
  return <StyledWrapper>{children}</StyledWrapper>
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
  color: ${colors.gray10};
  background-color: ${colors.gray3};
  cursor: pointer;
  white-space: nowrap;
`

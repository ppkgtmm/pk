import React from 'react'
import CategorySelect from './CategorySelect'
import OrderButtons from './OrderButtons'
import styled from '@emotion/styled'
import { colors } from '../../../styles'

const FeedHeader = () => {
  return (
    <StyledWrapper>
      <CategorySelect />
      <OrderButtons />
    </StyledWrapper>
  )
}

export default FeedHeader

const StyledWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.gray6};
`

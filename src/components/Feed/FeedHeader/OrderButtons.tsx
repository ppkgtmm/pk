import styled from '@emotion/styled'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { colors } from '../../../styles'

type TOrder = 'asc' | 'desc'

const OrderButtons = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const currentOrder = searchParams.get('order') ?? ('desc' as TOrder)

  const handleClickOrderBy = (order: TOrder) => {
    searchParams.delete('order')
    if (currentOrder === order) {
      return
    }
    searchParams.append('order', order)
    setSearchParams(searchParams)
  }
  return (
    <StyledWrapper>
      <a
        data-active={currentOrder === 'desc'}
        onClick={() => handleClickOrderBy('desc')}
      >
        Desc
      </a>
      <a
        data-active={currentOrder === 'asc'}
        onClick={() => handleClickOrderBy('asc')}
      >
        Asc
      </a>
    </StyledWrapper>
  )
}

export default OrderButtons

const StyledWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  a {
    cursor: pointer;
    color: ${colors.gray10};

    &[data-active='true'] {
      font-weight: 700;

      color: ${colors.gray12};
    }
  }
`

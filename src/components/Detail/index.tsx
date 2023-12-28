import PostDetail from './PostDetail'
import styled from '@emotion/styled'
import type { TPost } from '../../types'

interface Props {
  data: TPost
}

const Detail = ({ data }: Props) => {
  return (
    <StyledWrapper>
      <PostDetail data={data} />
    </StyledWrapper>
  )
}

export default Detail

const StyledWrapper = styled.div`
  padding: 2rem 0;
`

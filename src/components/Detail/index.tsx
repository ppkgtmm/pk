import PostDetail from './PostDetail'
import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import { posts } from '../../constants'
import { colors } from '../../styles'

function findPost(slug: string) {
  return posts.filter((post) => post.slug === slug)?.[0]
}

const Detail = () => {
  const params = useParams()
  return (
    <StyledWrapper>
      <PostDetail data={findPost(params.slug!)} />
    </StyledWrapper>
  )
}

export default Detail

const StyledWrapper = styled.div`
  padding: 2rem 0;
  background-color: ${colors.gray1};
`

import PostHeader from './PostHeader'
import Footer from './PostFooter'
import Category from '../../../components/Category'
import styled from '@emotion/styled'
import type { TPost } from '../../../types'
import Markdown from 'react-markdown'

interface Props {
  data: TPost
}

const PostDetail = ({ data }: Props) => {
  return (
    <StyledWrapper>
      <article>
        <div style={{ marginBottom: '0.5rem' }}>
          <Category>{data.category}</Category>
        </div>
        <PostHeader data={data} />
        <div>
            <Markdown></Markdown>
        </div>
        <Footer />
      </article>
    </StyledWrapper>
  )
}

export default PostDetail

const StyledWrapper = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-radius: 1.5rem;
  max-width: 56rem;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  > article {
    margin: 0 auto;
    max-width: 42rem;
  }
`

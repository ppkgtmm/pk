import { FeedHeader } from './FeedHeader'
import Footer from './Footer'
import styled from '@emotion/styled'
import TagList from './TagList'
import MobileProfileCard from './MobileProfileCard'
import ProfileCard from './ProfileCard'
import ContactCard from './ContactCard'
import PostList from './PostList'
import { Global } from '../Global'
import { useSearchParams } from 'react-router-dom'
import type { tag } from '../../types'
import { defaultCategory } from '../../constants/projects'

const HEADER_HEIGHT = 73

const Feed = () => {
  const [searchParams] = useSearchParams({
    category: defaultCategory,
    order: 'desc'
  })
  const currentTag = searchParams.get('tag') as tag
  const currentCategory = searchParams.get('category')!
  const currentOrder = searchParams.get('order')!

  return (
    <StyledMain>
      <Global />
      <StyledWrapper>
        <div className="lt">
          <TagList />
        </div>
        <div className="mid">
          <MobileProfileCard />
          <div className="tags">
            <TagList />
          </div>
          <FeedHeader />
          <PostList
            tag={currentTag}
            category={currentCategory}
            order={currentOrder}
          />
          <div className="footer">
            <Footer />
          </div>
        </div>
        <div className="rt">
          <ProfileCard />
          <ContactCard />
          <div className="footer">
            <Footer />
          </div>
        </div>
      </StyledWrapper>
    </StyledMain>
  )
}

export default Feed

const StyledWrapper = styled.div`
  grid-template-columns: repeat(12, minmax(0, 1fr));

  padding: 2rem 0;
  display: grid;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem 0;
  }

  > .lt {
    display: none;
    overflow: scroll;
    position: sticky;
    grid-column: span 2 / span 2;
    top: ${HEADER_HEIGHT - 10}px;
    height: calc(100vh - ${HEADER_HEIGHT}px);

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: 1024px) {
      display: block;
    }
  }

  > .mid {
    grid-column: span 12 / span 12;

    @media (min-width: 1024px) {
      grid-column: span 7 / span 7;
    }

    > .tags {
      display: block;

      @media (min-width: 1024px) {
        display: none;
      }
    }

    > .footer {
      padding-bottom: 2rem;
      @media (min-width: 1024px) {
        display: none;
      }
    }
  }

  > .rt {
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    display: none;
    overflow: scroll;
    position: sticky;
    top: ${HEADER_HEIGHT - 10}px;

    @media (min-width: 1024px) {
      display: block;
      grid-column: span 3 / span 3;
    }

    .footer {
      padding-top: 1rem;
    }
  }
`
const StyledMain = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1120px;
  padding: 0 1rem;
`

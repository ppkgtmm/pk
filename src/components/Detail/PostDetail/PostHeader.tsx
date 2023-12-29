import Tag from '../../Tag'
import type { TPost } from '../../../types'
import styled from '@emotion/styled'
import { colors } from '../../../styles'

interface Props {
  data: TPost
}

const PostHeader = ({ data }: Props) => {
  return (
    <StyledWrapper>
      <h1 className="title capitalize">{data.title}</h1>
      {
        <nav>
          {/* <div className="top">
            <div className="date capitalize">{data.start_date}</div>
          </div> */}
          <div className="mid">
            {data.tags && (
              <div className="tags">
                {data.tags.map((tag: string) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}
          </div>
          {data.thumbnail && (
            <div className="thumbnail max-w-screen-sm mx-auto rounded-md">
              <img
                src={data.thumbnail}
                // fill
                alt={data.title}
                style={{ width: 'inherit' }}
              />
            </div>
          )}
        </nav>
      }
    </StyledWrapper>
  )
}

export default PostHeader

const StyledWrapper = styled.div`
  .title {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    color: ${colors.gray12}
  }
  nav {
    margin-top: 1rem;
    color: ${colors.gray11};
    > .top {
      display: flex;
      margin-bottom: 0.75rem;
      gap: 0.75rem;
      align-items: center;
      .author {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }
      .hr {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
        align-self: stretch;
        width: 1px;
        background-color: ${colors.gray10};
      }
      .date {
        @media (min-width: 768px) {
          margin-left: 0;
        }
      }
    }
    > .mid {
      display: flex;
      margin-bottom: 1rem;
      align-items: center;
      .tags {
        display: flex;
        overflow-x: auto;
        flex-wrap: nowrap;
        gap: 0.5rem;
        max-width: 100%;
      }
    }
    .thumbnail {
      overflow: hidden;
      position: relative;
      margin-bottom: 1.75rem;
      background-color: ${colors.gray4};
    }
  }
`

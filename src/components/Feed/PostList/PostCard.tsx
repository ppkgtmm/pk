import Tag from '../../Tag'
import type { TPost } from '../../../types'
import Category from '../../Category'
import styled from '@emotion/styled'
import { colors } from '../../../styles'

interface Props {
  data: TPost
}
// export function formatDate(date: string, local: string) {
//   const d = new Date(date)
//   const options: Intl.DateTimeFormatOptions = {
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric'
//   }
//   const res = d.toLocaleDateString(local, options)
//   return res
// }

const PostCard = ({ data }: Props) => {
  const category = data?.category

  return (
    <StyledWrapper href={`/${data.link}`}>
      <article>
        {data.thumbnail && (
          <div className="thumbnail">
            <img
              src={data.thumbnail}
              // fill
              alt={data.title}
              style={{ width: 'inherit' }}
            />
          </div>
        )}
        <div data-thumb={!!data.thumbnail} className="content">
          <header className="top">
            <h2 className='capitalize'>{data.title}</h2>
          </header>
          <div className="date capitalize">
            <div className="content">{data?.start_date}</div>
            <span className="content"> | </span>
            {category && <Category>{category}</Category>}
          </div>
          <div className="summary">
            <p>{data.summary}</p>
          </div>
          <div className="tags overflow-scroll">
            {data.tags?.map((tag: string, idx: number) => (
              <Tag key={idx}>{tag}</Tag>
            ))}
          </div>
        </div>
      </article>
    </StyledWrapper>
  )
}

export default PostCard

const StyledWrapper = styled.a`
  article {
    overflow: hidden;
    position: relative;
    margin-bottom: 1.5rem;
    border-radius: 1rem;
    background-color: white;
    transition-property: box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;

    @media (min-width: 768px) {
      margin-bottom: 2rem;
    }

    :hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }

    > .thumbnail {
      position: relative;
      width: 100%;
    }
    > .content {
      padding: 1rem;

      &[data-thumb='false'] {
        padding-top: 3.5rem;
      }
      > .top {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media (min-width: 768px) {
          flex-direction: row;
          align-items: baseline;
        }
        h2 {
          margin-bottom: 0.5rem;
          font-size: 1.125rem;
          line-height: 1.75rem;
          font-weight: 500;

          cursor: pointer;

          @media (min-width: 768px) {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
        }
      }
      > .date {
        display: flex;
        margin-bottom: 1rem;
        gap: 0.5rem;
        align-items: center;
        .content {
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: ${colors.gray10};
          @media (min-width: 768px) {
            margin-left: 0;
          }
        }
      }
      > .summary {
        margin-bottom: 1rem;
        p {
          display: none;
          line-height: 2rem;
          color: ${colors.gray11};

          @media (min-width: 768px) {
            display: block;
          }
        }
      }
      > .tags {
        display: flex;
        gap: 0.5rem;
        scrollbar-width: none;
        -ms-overflow-style: none;
        ::-webkit-scrollbar {
          width: 0;
          height: 0;
        }
      }
    }
  }
`

import styled from '@emotion/styled'
import { useSearchParams } from 'react-router-dom'
import { Emoji } from '../Emoji'
import { colors } from '../../styles'
import { tags } from '../../constants'

const TagList = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentTag = searchParams.get('tag')

  const handleClickTag = (tag: string) => {
    searchParams.delete('tag')
    if (currentTag === tag) {
      setSearchParams(searchParams)
      return
    }
    searchParams.append('tag', tag)
    setSearchParams(searchParams)
  }
  return (
    <StyledWrapper>
      <div className="top">
        <Emoji>🏷️</Emoji> Tags
      </div>
      <div className="list">
        {tags
          .sort((a, b) => a.length - b.length)
          .map((key) => (
            <a
              key={key}
              data-active={key === currentTag}
              onClick={() => handleClickTag(key)}
              className="capitalize"
            >
              {key}
            </a>
          ))}
      </div>
    </StyledWrapper>
  )
}

export default TagList

const StyledWrapper = styled.div`
  .top {
    display: none;
    padding: 0.25rem;
    margin-bottom: 0.75rem;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  .list {
    display: flex;
    margin-bottom: 1.5rem;
    gap: 0.25rem;
    overflow: scroll;

    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    @media (min-width: 1024px) {
      display: block;
    }

    a {
      display: block;
      padding: 0.25rem;
      padding-left: 1rem;
      padding-right: 1rem;
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: ${colors.gray10};
      flex-shrink: 0;
      cursor: pointer;

      :hover {
        background-color: ${colors.gray3};
      }
      &[data-active='true'] {
        color: ${colors.gray12};
        background-color: ${colors.gray4};

        :hover {
          background-color: ${colors.gray4};
        }
      }
    }
  }
`

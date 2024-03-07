// import useDropdown from '../../../hooks/useDropdown'
// import { MdExpandMore } from 'react-icons/md'
import styled from '@emotion/styled'
// import { useSearchParams } from 'react-router-dom'
import { colors } from '../../../styles'
import { categories } from '../../../constants'

const CategorySelect = () => {
  // const [searchParams, setSearchParams] = useSearchParams()
  // const DEFAULT_CATEGORY = categories[0]
  // const [dropdownRef, opened, handleOpen] = useDropdown()

  // const currentCategory = searchParams.get('category') ?? DEFAULT_CATEGORY

  // const handleOptionClick = (category: string) => {
  //   searchParams.delete('category')
  //   searchParams.append('category', category)
  //   setSearchParams(searchParams)
  // }
  return (
    <StyledWrapper>
      <div
        // ref={dropdownRef}
        className="wrapper capitalize"
        // onClick={handleOpen}
      >
        {categories.slice(-2, -1)}
        {/* {currentCategory} <MdExpandMore /> */}
      </div>
      {/* {opened && (
        <div className="content">
          {categories
            .sort((a, b) => a.length - b.length)
            .map((key, idx) => (
              <a
                className="item capitalize"
                key={idx}
                onClick={() => handleOptionClick(key)}
              >
                {key}
              </a>
            ))}
        </div>
      )} */}
    </StyledWrapper>
  )
}

export default CategorySelect

const StyledWrapper = styled.div`
  position: relative;
  > .wrapper {
    display: flex;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    gap: 0.25rem;
    align-items: center;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    cursor: pointer;
  }
  > .content {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 40;
    padding: 0.25rem;
    border-radius: 0.75rem;
    background-color: ${colors.gray2};
    color: ${colors.gray10};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    > .item {
      padding: 0.25rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      white-space: nowrap;
      cursor: pointer;

      :hover {
        background-color: ${colors.gray4};
      }
    }
  }
`

import styled from '@emotion/styled'
import { colors } from '../styles'

interface Props {
  children: string
  readOnly?: boolean
}

const Category: React.FC<Props> = ({ readOnly = false, children }: Props) => {
  return (
    <StyledWrapper
      style={{
        cursor: readOnly ? 'default' : 'pointer'
      }}
    >
      {children}
    </StyledWrapper>
  )
}

export default Category

const StyledWrapper = styled.div`
  width: fit-content;
  font-size: 0.875rem;
  line-height: 1.25rem;
  opacity: 0.9;
  color: ${colors.gray10};
`

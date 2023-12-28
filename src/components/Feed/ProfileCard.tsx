import { config as CONFIG } from '../../constants'
import styled from '@emotion/styled'
import { Emoji } from '../Emoji'
import { colors } from '../../styles'

const ProfileCard = () => {
  return (
    <StyledWrapper>
      <div className="title">
        <Emoji>💻</Emoji> Profile
      </div>
      <div className="content">
        <div className="top">
          <img src="./avatar.png" alt="" className="h-[11rem]" />
        </div>
        <div className="mid">
          <div className=" name">{CONFIG.profile.name}</div>
          <div className="role">{CONFIG.profile.role}</div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default ProfileCard

const StyledWrapper = styled.div`
  padding: 0.25rem;
  > .title {
    padding: 0.25rem;
    margin-bottom: 0.5rem;
  }
  > .content {
    margin-bottom: 2rem;
    border-radius: 1rem;
    width: 100%;
    background-color: white;
    @media (min-width: 768px) {
      padding: 1rem;
    }
    @media (min-width: 1024px) {
      padding: 1rem;
    }
    .top {
      display: flex;
      justify-content: center;
      &:after {
        content: '';
        display: block;
      }
    }
    .mid {
      display: flex;
      padding: 0.25rem;
      padding-bottom: 0.75rem;
      flex-direction: column;
      align-items: center;
      .name {
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-style: italic;
        font-weight: 700;
      }
      .role {
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: ${colors.gray11};
      }
    }
  }
`

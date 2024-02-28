import { config as CONFIG } from '../../constants/index'
import { FaMedium, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'
import styled from '@emotion/styled'
import { colors } from '../../styles'

const ContactCard = () => {
  return (
    <>
      <StyledTitle>💬 Contact</StyledTitle>
      <StyledWrapper>
        <a
          href={`mailto:${CONFIG.profile.email}`}
          rel="noreferrer"
          target="_blank"
          style={{ overflow: 'hidden' }}
        >
          <FaEnvelope className="icon" />
          <div className="name">email</div>
        </a>
        <a
          href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedin className="icon" />
          <div className="name">linkedin</div>
        </a>
        <a
          href={`https://github.com/${CONFIG.profile.github}`}
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub className="icon" />
          <div className="name">github</div>
        </a>
        <a
          href={`https://medium.com/${CONFIG.profile.medium}`}
          rel="noreferrer"
          target="_blank"
        >
          <FaMedium className="icon" />
          <div className="name">medium</div>
        </a>
      </StyledWrapper>
    </>
  )
}

export default ContactCard

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.5rem;
`
const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${colors.gray12};
  a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${colors.gray2};
    cursor: pointer;

    :hover {
      color: ${colors.gray2};
      background-color: rgba(256, 256, 256, .05);
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`

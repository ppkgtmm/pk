import { config as CONFIG } from '../../constants/index'
import React from 'react'
import { BsMedium, BsGithub } from 'react-icons/bs'
import { HiEnvelope } from 'react-icons/hi2'
import { AiFillLinkedin } from 'react-icons/ai'
import styled from '@emotion/styled'
import { colors } from '../../styles'

const ContactCard = () => {
  return (
    <>
      <StyledTitle>💬 Contact</StyledTitle>
      <StyledWrapper>
        {
          <a
            href={`https://github.com/${CONFIG.profile.github}`}
            rel="noreferrer"
            target="_blank"
          >
            <BsGithub className="icon" />
            <div className="name">github</div>
          </a>
        }
        {
          <a
            href={`mailto:${CONFIG.profile.email}`}
            rel="noreferrer"
            target="_blank"
            style={{ overflow: 'hidden' }}
          >
            <HiEnvelope className="icon" />
            <div className="name">email</div>
          </a>
        }
        {
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiFillLinkedin className="icon" />
            <div className="name">linkedin</div>
          </a>
        }
        {
          <a
            href={`https://medium.com/${CONFIG.profile.medium}`}
            rel="noreferrer"
            target="_blank"
          >
            <BsMedium className="icon" />
            <div className="name">medium</div>
          </a>
        }
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
  background-color: ${'white'};
  a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${colors.gray12};
    cursor: pointer;

    :hover {
      color: ${colors.gray12};
      background-color: ${colors.gray2};
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

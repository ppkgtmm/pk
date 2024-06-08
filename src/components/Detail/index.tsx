import { useParams } from 'react-router-dom'
import { projects } from '../../contents'
import Markdown from 'markdown-to-jsx'
import { useState, useEffect, useCallback } from 'react'
const Detail = () => {
  const params = useParams()
  const [content, setContent] = useState('')

  const fetchContent = useCallback(async () => {
    const response = await fetch(projects[params.slug!])
    const md = await response.text()
    setContent(md)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [params.slug!])

  useEffect(() => {
    void fetchContent().catch()
  }, [params.slug!])
  return (
    <div>
      <div className='prose-styled details'>
        <Markdown>{content}</Markdown>
      </div>
    </div>
  )
}

export default Detail

// const StyledWrapper = styled.div`
//   padding: 2rem 0;
//   background-color: ${colors.gray1};
// `

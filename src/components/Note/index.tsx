import styled from '@emotion/styled'
import Markdown from 'react-markdown'
import { useState, useEffect, useCallback } from 'react'
import { notes as contents } from '../../contents'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { useParams } from 'react-router-dom'

const Note = (props: Record<string, unknown>) => {
  const params = useParams()
  const [content, setContent] = useState('')

  const fetchContent = useCallback(async () => {
    const response = await fetch(contents[params.slug!])
    const md = await response.text()
    setContent(md)
  }, [])

  useEffect(() => {
    void fetchContent().catch()
  }, [])

  return (
    <StyledWrapper>
      <article>
        <div className='prose-styled'>
          <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={{
            table(props) {
              const { node, ...rest } = props
              return <div className='table-container'> <table {...rest} /> </div>
            },
            aside: (props) => {
              return (
                <div className='p-4 bg-gray-100 rounded-md flex mb-6'>
                  <div className='mr-2'>💡</div>
                  {props.children}
                </div>
              )
            }
          }}>{content}</Markdown>
        </div>
      </article>
    </StyledWrapper>
  )
}

export default Note

const StyledWrapper = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-radius: 1.5rem;
  max-width: 57rem;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  > article {
    margin: 0 auto;
    max-width: 47rem;
  }
`

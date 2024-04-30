import styled from '@emotion/styled'
// import Markdown from 'react-markdown'
import Markdown, { RuleType } from 'markdown-to-jsx'
import { useState, useEffect, useCallback } from 'react'
import { notes as contents } from '../../contents'
// import rehypeRaw from 'rehype-raw'
import { useParams } from 'react-router-dom'

interface IAside {
  children: Array<{ text: string }>
}

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
          <Markdown options={{
            renderRule(next, node, renderChildren, state) {
              if (node.type === RuleType.htmlBlock && node.tag === 'aside') {
                return (
                  <div className='p-4 bg-gray-100 rounded-md flex mb-6' key={state.key}>
                    <div className='mr-2'>💡</div>
                    {node.children?.map((elem, idx) => {
                      return <span key={idx}> {(elem as any as IAside).children.map(val => val.text).concat()}
                      </span>
                    })}
                  </div>
                )
              }
              return next()
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

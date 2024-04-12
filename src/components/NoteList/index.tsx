import styled from '@emotion/styled'
import { notes } from '../../constants/notes'

const NoteList = (props: Record<string, unknown>) => {
  return (
    <StyledWrapper>
      <article>
        <div className='prose-styled'>
          {
            notes.map((note, idx) => {
              return <div key={idx}>
                <a href={`#/notes/${note.slug}`} className='not-prose text-black hover:bg-gray-100 rounded-md flex px-4 py-1'>
                  <span className='mr-2'>📝</span>
                  <span>{note.title}</span>
                </a>
              </div>
            })
          }
        </div>
      </article>
    </StyledWrapper>
  )
}

export default NoteList

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

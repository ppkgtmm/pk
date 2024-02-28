import type { ReactNode } from 'react'
import Markdown from 'react-markdown'
import type { Element } from 'react-markdown/lib'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Props {
  content: string
}
interface CodeProps {
  node?: Element
  children?: ReactNode
}
const PostContent = ({ content }: Props) => {
  return (
    <div className="prose-styled">
      {/* <Markdown>{content}</Markdown> */}
      <Markdown
        components={{
          code({ node, children }: CodeProps) {
            console.log(node, children)
            const className = node?.properties.className
            const match = /language-(\w+)/.exec((className as string) || '')
            const start = node?.position?.start.line
            const end = node?.position?.end.line
            if (match) {
              return (
                <SyntaxHighlighter style={oneDark} language={match[1]} PreTag={'div'}>
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              )
            }
            if (end === start) {
              return <code>{children}</code>
            }
            // return (
            //   <pre className="prose-pre">
            //     <code {...props}>{children}</code>
            //   </pre>
            // )
            return ''
          }
        }}
      >
        {content}
      </Markdown>
    </div>
  )
}

export default PostContent

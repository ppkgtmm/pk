import { defaultCategory, posts } from '../../../constants/projects'
import PostCard from './PostCard'
import type { tag } from '../../../types'

function getPosts(tag: tag, category: string, order: string) {
  let newFilteredPosts = posts
  // tag
  if (tag) {
    newFilteredPosts = newFilteredPosts.filter((post) =>
      post?.tags?.includes(tag)
    )
  }
  // category
  if (category !== defaultCategory) {
    newFilteredPosts = newFilteredPosts.filter(
      (post) => post?.category === category
    )
  }
  // order
  newFilteredPosts.sort((a, b) => a.id - b.id)
  if (order === 'desc') {
    newFilteredPosts.reverse()
  }
  return newFilteredPosts
}
interface Props {
  tag: tag
  category: string
  order: string
}
const PostList = (props: Props) => {
  const filteredPosts = getPosts(props.tag, props.category, props.order)
  return (
    <>
      <div className="my-2">
        {filteredPosts?.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </div>
    </>
  )
}

export default PostList

import { render,screen } from '@testing-library/react'
import BlogBody from './BlogBody'
import userEvent from '@testing-library/user-event'

let container
let handleLikesUpdate
const blog = { title : 'for testing',
  author: 'ayman',
  url : 'https://localhost:5002',
  likes: 0,
  user : {
    username: 'fad'
  }

}

beforeEach(() => {
  handleLikesUpdate = vi.fn()
  container = render(
    <BlogBody blog = {blog} handleLikesUpdate={handleLikesUpdate} />
  ).container
})

test('if we presss the button like the handle function get called twice', async() => {
  const user  = userEvent.setup()
  const likeButton  = screen.getByText('like')
  await user.click(likeButton)
  await user.click(likeButton)
  expect(handleLikesUpdate.mock.calls).toHaveLength(2)
})

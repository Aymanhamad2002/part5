import { render,screen } from '@testing-library/react'
import Blog from './Blog'
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
    <Blog blog = {blog} handleLikesUpdate={handleLikesUpdate} />
  ).container
})
test('show the author and the title ', () => {
  const div = container.querySelector('.titleAndAuthor')
  expect(div).toBeDefined()
})
test('the body information is not shown ',() => {
  const div = container .querySelector('.bodyShow')
  expect(div).toBeNull()
})
test ('if we presss the button view the body will appear',async  () => {
  const viewButton  = screen.getByText('view')
  const user  = userEvent.setup()
  await user.click(viewButton)
  const div = container.querySelector('.bodyShow')
  expect(div).toBeDefined

})


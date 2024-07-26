import AddForm from './AddForm'
import {render,screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('<AddForm update parent state on submit', async () => {
  const onCreate = vi.fn()
  render(<AddForm onCreate={onCreate}/>)
  const user = userEvent.setup()
  const titleInput = screen.getByPlaceholderText('title')
  const authorInput =  screen.getByPlaceholderText('author')
  const urlInput =  screen.getByPlaceholderText('url')
  const createButton = screen.getByText('create')

  await user.type(titleInput,'test')
  await user.type(authorInput,'ayman')
  await user.type(urlInput,'https::localhost')
  await user.click(createButton)
  expect(onCreate.mock.calls).toHaveLength(1)
  expect(onCreate.mock.calls[0][0].title).toBe('test')
  expect(onCreate.mock.calls[0][0].author).toBe('ayman')
  expect(onCreate.mock.calls[0][0].url).toBe('https::localhost')
  expect()



})
const {test,describe,beforeEach,expect} = require('@playwright/test')
const {loginFunc,createFunc,logoutFunc,likeFunc} = require('./helper.js')
const { log } = require('console')
const exp = require('constants')

describe('Blog app' , () => {
    beforeEach( async({page,request}) => {
        await request.post('/api/testing/reset')
        await request.post('/api/users',{
            data:{
                username: 'ayman',
                name: 'ayman hamad',
                password: 'ayman2002$'
            }
        })
        await request.post('/api/users',{
          data:{
            username:'nour',
            name: "nour hamad",
            password: 'ayman2002$'
          } 
        })
       await  page.goto('/')
    })
  test('login form is shown ', async({page}) => {
    const logindiv = await page.locator('.loginForm')
    await expect(logindiv).toBeVisible()
  })
  describe('login', () => {
    test('suceeds with correct credentials', async ({page}) => {
        await loginFunc(page,'ayman','ayman2002$')
        await expect(page.getByText('ayman logged in')).toBeVisible()
    })
    test('fails with wrong credentials',async ({page}) => {
      await loginFunc(page,'ayman','ttttttt')
      await expect(page.getByText('wrong username or password')).toBeVisible()
      
    })
  })
  describe('When logged in' ,() => {
    beforeEach(async ({ page }) => {
      await loginFunc(page,'ayman','ayman2002$')
    })
    test('a new blog can be created', async({ page }) => {
      await createFunc(page,'fortesting','playwright','http://playwright')
      await expect(page.getByText('fortesting playwright')).toBeVisible()

    })
    describe('when blog create ', () => {
      beforeEach(async ({page}) => {
        await createFunc(page,'another for testing','playwright','https://localhost:2222')

      })
      test('a blog can be liked ',async ({page}) => {
        
        const divElement = await page.getByText('another for testing playwright')
        await divElement.getByRole('button',{name:'view'}).click()
        await page.getByRole('button',{name : 'like' }).click()
        const likesDiv = await page.locator('.likes')
        await expect(likesDiv).toContainText('likes 1')
  
  
      })
      test('a blog can be removed ', async({page}) => {
        const divElement = await page.getByText('another for testing playwright')
        await divElement.getByRole('button',{name:'view'}).click()
        await page.on('dialog',async (dialog) => {
          await dialog.accept()

        })
        await page.getByRole('button',{name : 'remove' }).click()

        await expect(page.getByText('another for testing playwright')).not
        .toBeVisible()

      })
      test('a new user cant  see the remove button' ,async ({page})=> {
        await logoutFunc(page)
        await loginFunc(page,'nour','ayman2002$')
        const divElement = await page.getByText('another for testing playwright')
        await divElement.getByRole('button',{name:'view'}).click()
        expect(divElement.getByRole('button',{name:'remove'})).not.toBeVisible()     

      })
  
    })
    describe('When multiple blog is created and liked',() => {
      beforeEach(async({page}) => {
        await createFunc(page,'test1','fadi','https//:localhost')
        let promiseArray = []
         for(let i = 0 ; i< 5; i++){
          promiseArray[i] = await likeFunc(page,'test1','fadi')
        }
        await Promise.all(promiseArray)
        await createFunc(page,'test2','rony','https//:localhost//22')
        for(let i = 0 ; i< 3 ; i++){
          promiseArray[i] = await likeFunc(page,'test2','rony')
        }
        await Promise.all(promiseArray)
        await createFunc(page,'test3','melissa','https://localhost//3333')

      })
      test('blogs are sorted from highest like to bottom', async({page}) => {
        const blogs = await page.locator('.blogClass')
        await expect(blogs.nth(0)).toContainText('test1 fadi')
        await expect(blogs.nth(1)).toContainText('test2 rony')
        await expect(blogs.nth(2)).toContainText('test3 melissa')
      })
    })
    
  })


})
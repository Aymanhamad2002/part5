const loginFunc = async (page,username,password) => {
    await page.getByTestId('username').fill(username)
    await page.getByTestId('password').fill(password)
    await page.getByRole('button',{name:'login'}).click()


}
const logoutFunc = async(page) => {
    await page.getByRole('button',{name: 'logout'}).click()
}
const createFunc = async (page, title, author, url) => {
    console.log('Clicking addBlog button');
    await page.getByRole('button', { name: 'addBlog' }).click();
    
    console.log('Filling title');
    await page.getByTestId('title').fill(title);
    
    console.log('Filling author');
    await page.getByTestId('author').fill(author);
    
    console.log('Filling url');
    await page.getByTestId('url').fill(url);
    
    console.log('Clicking create button');
    await page.getByRole('button', { name: 'create' }).click();
    
    console.log('Waiting for text to appear');
    await page.getByText(`${title} ${author}`).waitFor({ timeout: 15000 });
    console.log('Text appeared');
}
const likeFunc = async(page,title, author) => {
    const divElement = await page.getByText(`${title} ${author}`)
    
    await divElement.getByRole('button',{name:'view'}).click()
    

    await page.getByRole('button',{name : 'like' }).click()
    await divElement.getByRole('button',{name : 'hide'}).click()
    
}


module.exports = {loginFunc,createFunc,logoutFunc,likeFunc}
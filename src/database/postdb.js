const posts = [
    {
        id: 1,
        title: 'First Post',
        description: 'This is the first book'
    },
    {
        id: 2,
        title: 'Second Post',
        description: 'This is the second book'
    },
    {
        id: 3,
        title: 'Third Post',
        description: 'This is the third book'
    },
    {
        id: 4,
        title: 'Fourth Post',
        description: 'This is the fourth book'
    },
]


export const addPost = (newPost) => {
    posts.push(newPost)
    console.log(posts)
}

export const getPosts = () => {
    return posts;
}
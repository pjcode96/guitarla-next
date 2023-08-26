export const getPosts = () => {
    return fetch('http://127.0.0.1:1331/api/posts?populate=image')
        .then((res) => res.json())
}
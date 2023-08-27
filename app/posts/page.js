import { getPosts } from "../api/posts"
import PostList from "../components/postList/postList";
import Post from "../components/post/post";

export default async function PostsPage() {
    const response = await getPosts();
    const posts = response.data
    return (
        <main>
            <h2 className="heading">Blog</h2>
            <PostList>
                {posts.length > 0 &&
                    posts.map(
                        (post) => {
                            return (
                                <Post
                                    key={post.id}
                                    post={post}
                                />
                            )
                        }
                    )
                }

            </PostList>
        </main>
    )
}
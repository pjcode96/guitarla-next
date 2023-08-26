import styles from './postList.module.css'

function PostList({ children }) {
    return (
        <div className={`${styles.posts__grid} container`}>
            {children}
        </div>
    )
}

export default PostList
import Link from 'next/link'
import Image from 'next/image'
import styles from './post.modules.css'

function Post({ post }) {

    const { title, content, publishedAt, image, slug } = post.attributes
    return (
        <div className={styles.post}>
            <Image
                className={styles.post__image}
                src={image.data.attributes.url}
                alt={`Imagen del post ${title}`}
                width='30'
                height='30'
            />
            <div className={styles.post__resume}>
                <h3 className={styles.post__title}>{title}</h3>
                <p className={styles.post__publishDate}>{publishedAt}</p>
                <p className={styles.post__content}>{content}</p>
                <Link href={slug} className={styles.post__button}>Leer Post</Link>
            </div>
        </div>
    )
}

export default Post
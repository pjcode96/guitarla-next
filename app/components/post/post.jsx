import Link from 'next/link'
import Image from 'next/image'
import styles from './post.module.css'
import LinkButton from '../button/linkButton'
import { getFormattedDate } from '@/app/utils/helpers'

function Post({ post }) {

    const { title, content, publishedAt, image, slug } = post.attributes
    return (
        <div className={styles.post}>
            <Image
                className={styles.post__image}
                src={image.data.attributes.url}
                alt={`Imagen del post ${title}`}
                width='300'
                height='300'
            />
            <div className={styles.post__resume}>
                <h3 className={styles.post__title}>{title}</h3>
                <p className={styles.post__publishDate}>{getFormattedDate(publishedAt)}</p>
                <p className={styles.post__content}>{content}</p>
                <LinkButton
                    to={`posts/${post.id}`}
                >Leer Post</LinkButton>
            </div>
        </div>
    )
}

export default Post
import styles from './article.module.scss';

export const Article = ({ imageUrl, title }) => {
    return(
        <article className={styles.article} title={title}>
            <div className={styles.imageHolder}>
                <img src={imageUrl} alt={title}/>
            </div>
            <h3>{title}</h3>
        </article>
    )
}
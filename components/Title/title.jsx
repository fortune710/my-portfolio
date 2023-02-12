import styles from './title.module.scss';

export const SectionTitle = ({ name }) => {
    return(
        <div className={styles.title}>
            <h2>{name}</h2>
            <hr/>
        </div>
    )
}
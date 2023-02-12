import styles from './contact.module.scss';

export const ContactInformation = () => {
    return(
        <section id='contact-me' className={styles.contactMeSection}>
            <h2>Get In Touch</h2>
            <p>
                I'm currently looking for new opportunities, and my inbox is always open.
                If you reach out, I'll definetely get back to you as soon as possible.
            </p>

            <a href="mailto:fortunealebiosu710@gmail.com">
                <button className={styles.sendMessageButton}>
                    Send a Message
                </button>
            </a>
        </section>
    )
}
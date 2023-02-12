import styles from './section.module.scss';
import { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';

export const Section = ({ children, gradientStart, gradientMiddle, gradientEnd, icon, className, titleId }) => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef
    });
    
    return(
        <section aria-describedby={titleId} ref={sectionRef} className={`${className} ${styles.section}`}>
            <motion.div 
                className={styles.gradient}
                style={{ 
                    backgroundImage: `linear-gradient(to bottom, ${gradientStart}, ${gradientEnd})`,
                    scaleY: scrollYProgress
                }}
            />
            <div>
                { children }
            </div>
        </section>
    )
}
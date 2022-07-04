import styles from './circle.module.css'

const CirleStatus = ({ fill, text }) => {
    if (fill === 'full' || fill === 'empty') {
        const backgroundColor = fill === 'full' ? '#000' : '#fff';
        const border = fill === 'full' ? 'none' : '1px solid #ccc';
        return (
            <div className={styles.circleContainer}>
                <span
                    className={styles.circle}
                    style={{ backgroundColor, border }}
                ></span>
                {text && <p>{text}</p>}
            </div>
        )
    } else if (fill === 'half') {
        return (
            <div className={styles.circleContainer}>
                <span className={styles.circle} style={{ overflow: 'hidden' }}>
                    <div style={{ backgroundColor: '#000', height: '50%' }}></div>
                    <div style={{ backgroundColor: '#fff', height: '50%' }}></div>
                </span>
                {text && <p>{text}</p>}
            </div>
        )
    }
}

export default CirleStatus
import styles from './circle.module.css'

const CirleStatus = ({ fill, text }) => {
    return (
        <div className={styles.circleContainer}>
            <span
                className={styles.circle}
                style={{
                    backgroundColor: fill ? '#000' : '#fff',
                    border: fill ? 'none' : '1px solid #ccc'
                }}
            ></span>
            {text && <p>{text}</p>}
        </div>
    )
}

export default CirleStatus
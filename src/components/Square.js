const Square = ({value, handleClick, index}) => {

const styles = {
    button: {
        width: '100px',
        height: '100px',
        fontSize: '46px'
    }
}

    return (
        <button style={styles.button} onClick={() => handleClick(index)}>
            {value}
        </button>
    )
}

export default Square
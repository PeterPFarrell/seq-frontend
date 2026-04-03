import React from "react";
import styles from './VoteDisplay.module.css'

const VoteDisplay = ({votes}) => {
    let voteColor = 'var(--color-nuetral)'
    if (votes > 0) voteColor = 'var(--color-positive)'
    if (votes < 0) voteColor = 'var(--color-negative)'

    function handleUp() {
        console.log("updoot")
    }
    function handleDown() {
        console.log("downdoot");
    }

    return (
        <div>
            <p align='right'>
                <i style={{color: voteColor}}>{votes} updoots</i>
                <button onClick={handleUp} className={styles.button}>
                    <img src="src/assets/updoot.png" className={styles.img}/>
                </button>
                <button onClick={handleDown} className={styles.button}>
                    <img src="src/assets/downdoot.png" className={styles.img}/>
                </button>

            </p>
        </div>
    );
}

export default VoteDisplay
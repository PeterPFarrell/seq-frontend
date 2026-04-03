import React from "react";
import styles from './VoteDisplay.module.css'

const VoteDisplay = ({votes,onVote}) => {
    let voteColor = 'var(--color-nuetral)'
    if (votes > 0) voteColor = 'var(--color-positive)'
    if (votes < 0) voteColor = 'var(--color-negative)'

    return (
        <div>
            <p align='right'>
                <i style={{color: voteColor}}>{votes} updoots</i>
                <button onClick={() => onVote(true)} className={styles.button}>
                    <img src="src/assets/updoot.png" className={styles.img}/>
                </button>
                <button onClick={() => onVote(false)} className={styles.button}>
                    <img src="src/assets/downdoot.png" className={styles.img}/>
                </button>

            </p>
        </div>
    );
}

export default VoteDisplay
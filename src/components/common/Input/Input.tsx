import styles from "./Input.module.css";
import React from "react";

type TInputProps = {
    answer: boolean
    dataCell: string
    onChange: (dataCell: string) => void
}

const Input: React.FC<TInputProps> = props => {

    const {
        answer,
        dataCell,
        onChange,
    } = props

    return (
        <div className={styles.input__wrapper}
             onClick={()=>onChange(dataCell)}>
            <div className={styles.input__circle}>
                {
                    answer && <div className={styles.input__selected}/>
                }
            </div>
        </div>
    )
}

export default Input
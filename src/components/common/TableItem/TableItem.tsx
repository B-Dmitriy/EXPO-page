import styles from "../../Main/Main.module.css";
import Input from "../Input/Input";
import React from "react";

type TTableItemProps = {
    id: number
    question: string
    answer: boolean[]
    setLineState: (id: number, answer: boolean[]) => void
}

const TableItem: React.FC<TTableItemProps> = props => {

    const {
        id,
        question,
        answer,
        setLineState
    } = props

    const inputHandler = (dataCell: string) => {
        switch (dataCell) {
            case 'input1':
                return setLineState(id, [true, false, false])
            case 'input2':
                return setLineState(id, [false, true, false])
            case 'input3':
                return setLineState(id, [false, false, true])
            default:
                return
        }
    }

    return (
        <tr className={styles.main__table_row}>
            <td>{id}</td>
            <td>{question}</td>
            <td><Input dataCell={'input1'} answer={answer[0]} onChange={inputHandler}/></td>
            <td><Input dataCell={'input2'} answer={answer[1]} onChange={inputHandler}/></td>
            <td><Input dataCell={'input3'} answer={answer[2]} onChange={inputHandler}/></td>
        </tr>
    )
}

export default TableItem
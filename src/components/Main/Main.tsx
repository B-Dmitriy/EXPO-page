import React from 'react';
import styles from './Main.module.css'
import mascot from './../../assets/img/mascot.png'
import poligon from './../../assets/img/polygon.png'


const Main = (props: any) => {

    const {
        tableState,
        setLineState
    } = props

    return (
        <div className={styles.main__wrapper}>
            <div className={styles.main__mascotBlock}>
                <div className={styles.main__mascotBlock_text}>Commençons à dessiner ton avenir!</div>
                <img className={styles.main__mascotBlock_poligon} src={poligon} alt="poligon"/>
                <img className={styles.main__mascotBlock_mascot} src={mascot} alt="mascot"/>
            </div>
            <div className={styles.main__tableBlock}>
                <table className={styles.main__table}>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Les énoncés suivants me correpsondent</th>
                        <th>A<br/>Pas du tout</th>
                        <th>B<br/>Un peu</th>
                        <th>C<br/>Beaucoup</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        tableState.map((i: any) => {
                            return <TableItem key={i.id}
                                              id={i.id}
                                              question={i.question}
                                              answer={i.answer}
                                              setLineState={setLineState}
                            />
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}


const TableItem = (props: any) => {

    const {
        id,
        question,
        answer,
        setLineState
    } = props

    const inputHandler = (e: any) => {
        switch (e) {
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

const Input = (props: any) => {

    const {
        answer,
        dataCell,
        onChange,
    } = props

    return (
        <div className={styles.input__wrapper}
             onClick={()=>onChange(dataCell)}>
            {
                answer && <div className={styles.input__circle}></div>
            }
        </div>
    )
}

export default Main;
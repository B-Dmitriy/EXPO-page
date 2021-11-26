import React from 'react';
import styles from './Main.module.css'
import dotsStyles from './MainDots.module.css'
import mascot from './../../assets/img/mascot.png'
import poligon from './../../assets/img/polygon.png'
import progressBar from './../../assets/img/progressBar.png'
import TableItem from '../common/TableItem/TableItem';
import { TTableStateItem } from '../../App';

type TMainProps = {
    tableState: Array<TTableStateItem>
    setLineState: (id: number, answer: boolean[]) => void
}

const Main: React.FC<TMainProps> = props => {

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
                <div className={dotsStyles.main__turquoise_dot}/>
                <div className={dotsStyles.main__yellow_dot}/>
                <div className={dotsStyles.main__brown_dot}/>
                <div className={dotsStyles.main__red_dot}/>
                <div className={dotsStyles.main__orange_secondDot}/>
                <div className={dotsStyles.main__green_dot}/>
                <div className={dotsStyles.main__red_secondDot}/>
                <div className={dotsStyles.main__brown_secondDot}/>
                <div className={dotsStyles.main__yellow_secondDot}/>
                <div className={dotsStyles.main__blue_secondDot}/>
                <div className={dotsStyles.main__green_secondDot}/>
                <div className={dotsStyles.main__orange_thirdDot}/>
                <div className={dotsStyles.main__red_thirdDot}/>
                <div className={dotsStyles.main__brown_thirdDot}/>
                <div className={dotsStyles.main__yellow_thirdDot}/>
                <div className={dotsStyles.main__blue_thirdDot}/>
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
                <div className={styles.main__progressBar}>
                    <div className={styles.main__progressBar_counter}>1/11</div>
                    <div className={styles.main__progressBar_text}>Ton avenir se dessine...</div>
                </div>
                <img className={styles.main__progressBar_img} src={progressBar} alt="progress"/>
            </div>
        </div>
    )
}

export default Main;
import React, {useState} from 'react';
import './App.css';
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export type TTableStateItem = {
    id: number
    question: string
    answer: boolean[]
}

function App() {

    const [tableState, setTableState] = useState<Array<TTableStateItem>>([
        {id: 1, question: `J'aime être en contact avec les animaux`, answer: [false, false, false]},
        {id: 2, question: `Je préfère travailler à l'intérieur`, answer: [false, false, false]},
        {id: 3, question: `Je peux faire des tâches même si j'ai les mains sales`, answer: [false, false, false]},
        {id: 4, question: `J'aime dessiner et les activités créatrices`, answer: [false, false, false]},
        {id: 5, question: `Je peux m'adapter à des horaires irréguliers`, answer: [false, false, false]},
    ])

    const setLineState = (id: number, answer: boolean[]) => {
        setTableState(tableState.map((i: any) => i.id === id
            ? {...i, answer: answer}
            : i)
        )
    }

    return (
        <div className="app__wrapper">
            <div className="app__container">
                <Header/>
                <Main tableState={tableState}
                      setLineState={setLineState}
                />
            </div>
            <Footer />
        </div>
    );
}

export default App;

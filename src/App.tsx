import React, {useState} from 'react';
import './App.css';
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

function App() {

    const [state, setState] = useState<any>([
        {id: 1, question: `J'aime être en contact avec les animaux`, answer: [false, false, false]},
        {id: 2, question: `Je préfère travailler à l'intérieur`, answer: [false, false, false]},
        {id: 3, question: `Je peux faire des tâches même si j'ai les mains sales`, answer: [false, false, false]},
        {id: 4, question: `J'aime dessiner et les activités créatrices`, answer: [false, false, false]},
        {id: 5, question: `Je peux m'adapter à des horaires irréguliers`, answer: [false, false, false]},
    ])

    //@ts-ignore
    window.state = state

    const setLineState = (id: string, answer: boolean[]) => {
        setState(state.map((i: any) => i.id === id ? {...i, answer: answer} : i))
    }

    return (
        <div className="app__wrapper">
            <div className="app__container">
                <Header/>
                <Main tableState={state}
                      setLineState={setLineState}
                />
            </div>
        </div>
    );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import CardList from './CardList';
import useArbitraryValue from './hook/useArbitraryValue';

export interface ICard {
    title: string;
    content: string;
}

const cards: ReadonlyArray<ICard> = [
    {
        title: "My First Car",
        content: "It's a Renault Clio. It's got a subwoofer in the back and the milkshake brings all the boys to the yard.",
    },
    {
        title: "My Second Car",
        content: "It's a Glanza Turbo. Pushing 325bhp and ready to implode with a simple money shift.",
    },
    {
        title: "My Third Car",
        content: "It's a Ferrari. Need I say anymore?",
    }
]

const App: React.FC = () => {
    const arbyValue = useArbitraryValue("default-seed")
    
    const [selectedCardIndex, setSelectedCardIndex] = useState<number | undefined>()

    return (
        <div className="app">
            <h1>Welcome to the Unit Testing Workshop</h1>
            
            <CardList cards={cards} onCardSelected={index => {
                setSelectedCardIndex(index)
            }}/>

            <p>Selected Card Index: {selectedCardIndex ?? "None"}</p>
            <p>Arbitrary Value: {arbyValue}</p>
        </div>
    );
}

export default App;
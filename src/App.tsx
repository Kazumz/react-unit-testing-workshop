import React, { useState } from 'react';
import './App.css';
import CardList from './CardList';

export interface ICard {
    title: string;
    content: string;
}

const App: React.FC = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState<number | undefined>()
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

    return (
        <div className="app">
            <h1>Welcome to the Unit Testing Workshop</h1>
            <CardList cards={cards} onCardSelected={index => {
                setSelectedCardIndex(index)
            }}/>

            <p>Selected Card Index: {selectedCardIndex ?? "None"}</p>
        </div>
    );
}

export default App;
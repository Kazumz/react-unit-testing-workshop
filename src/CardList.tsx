import React from 'react';
import './CardList.css';
import { ICard } from './App';
import Card from './Card';

interface ICardListProps {
    cards: ReadonlyArray<ICard>
    onCardSelected: (index: number) => void
}

const CardList: React.FC<ICardListProps> = ({ cards, onCardSelected }) => {
    return (
        <div className="card-list">
            {cards.map((card, index) => <Card card={card} onClick={() => onCardSelected(index)}/>)}
        </div>
    )
}

export default CardList;
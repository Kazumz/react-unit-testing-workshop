import React from 'react';
import './Card.css';
import { ICard } from './App';

interface ICardListProps {
    card: ICard;
    onClick: () => void;
}

const Card: React.FC<ICardListProps> = ({ card, onClick }) => {
    return (
        <article className="card" onClick={onClick}>
            <p>{card.title}</p>
            <p>{card.content}</p>
        </article>
    )
}

export default Card;
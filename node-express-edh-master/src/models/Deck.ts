import type Card from "./Card"

class Deck{
    id: string;
    name: string;
    cards: Card[];
    sideBoard: Card[];
    colorIdentity: string;
    constructor(
    id: string,
    name: string,
    cards: Card[],
    sideBoard: Card[],
    colorIdentity: string
    ){
    this.id = id;
    this.name = name;
    this.cards = cards;
    this.sideBoard = sideBoard;
    this.colorIdentity = colorIdentity;
    }
}
import Router from 'express';
import { getCard, getCardRaw, mockCard, mockCardRaw, getAllLocalCards, getLocalCardRaw, getLocalCard } from './controller.ts';

const cards = Router();

cards.get("/all", getAllLocalCards)
cards.get("/local/:name/raw", getLocalCardRaw)
cards.get("/local/:name", getLocalCard)
cards.get("/name/:name", getCard)
cards.get("/name/:name/raw", getCardRaw)
cards.get("/mock", mockCard)
cards.get("/mock/raw", mockCardRaw)


export default cards;
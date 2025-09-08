import Router from 'express';
import { getCard, getCardRaw, mockCard, mockCardRaw } from './controller.ts';

const cards = Router();

cards.get("/:name", getCard)
cards.get("/:name/raw", getCardRaw)
cards.get("/:name/mock", mockCard)
cards.get("/:name/mock/raw", mockCardRaw)


export default cards;
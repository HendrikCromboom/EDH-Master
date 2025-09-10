import axios from "axios";
import type { Request, Response } from "express";
import { fetchCardByName } from '../../../../services/scryfallService';
import { mapScryfallCardToEvent } from "../../../../mappers/scryFallToCardMapper";
import { mockScryFallCard } from "../../../../mockers/scryFallCardMocker";
import { fetchData } from "../../../../utils/fetchData";
import ScryfallCard from "../../../../models/ScryFallCard";
import { findCardByNameCached, getCardByNameHashed } from "../../../../services/cardStoreService";

export async function getCard(req: Request, res: Response){
    const name = req.params.name;
    if (!name) return res.status(400).json({ error: 'Card name is required' });
    try {
        const response = await fetchCardByName(name)
        const card = mapScryfallCardToEvent(response)
        res.json(card);
    } catch (error) {
        res.status(500).json({ error: 'Card not found or Scryfall API error' });
    }
};

export async function getCardRaw(req: Request, res: Response){
    const name = req.params.name;
    if (!name) return res.status(400).json({ error: 'Card name is required' });
    try {
        const response = await fetchCardByName(name)
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Card not found or Scryfall API error' });
    }
};

export async function mockCard(req: Request, res: Response){
    const name = req.params.name;
    if (!name) return res.status(400).json({ error: 'Card name is required' });
    try {
        const response = mockScryFallCard()
        const card = mapScryfallCardToEvent(response)
        res.json(card);
    } catch (error) {
        res.status(500).json({ error: 'Card not found or Scryfall API error' });
    }
};
export async function mockCardRaw(req: Request, res: Response){
    const name = req.params.name;
    if (!name) return res.status(400).json({ error: 'Card name is required' });
    try {
        const response = await mockScryFallCard()
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Card not found or Scryfall API error' });
    }
};

export async function getAllLocalCards(req: Request, res: Response) {
    const cards: ScryfallCard[] = req.app.locals.cards;
    res.json(cards[0]);
}

export async function getLocalCardRaw(req: Request, res: Response) {
    const searchName = req.params.name?.toLowerCase();
    try{
        const card: ScryfallCard | undefined = await getCardByNameHashed(searchName!)
        res.json(card)
    } catch (error) {
        res.status(500).json({ error: 'Card not found' });
    }
    
};

export async function getLocalCard(req: Request, res: Response) {
    const searchName = req.params.name?.toLowerCase();
    try{
        const scryCard: ScryfallCard | undefined = await findCardByNameCached(searchName!)
        const card = mapScryfallCardToEvent(scryCard)        
        res.json(card)
    } catch (error) {
        res.status(500).json({ error: 'Card not found' });
    }
    
};
    
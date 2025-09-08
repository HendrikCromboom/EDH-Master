import axios from "axios";
import type { Request, Response } from "express";
import { fetchCardByName } from '../../../../services/scryfallService';
import { mapScryfallCardToEvent } from "../../../../mappers/scryFallToCardMapper";
import { mockScryFallCard } from "../../../../mockers/scryFallCardMocker";

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


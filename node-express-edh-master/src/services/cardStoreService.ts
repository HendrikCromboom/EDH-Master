import ScryfallCard from "../models/ScryFallCard";
import { fetchData } from "../utils/fetchData";
import { redisClient } from "../lib/redisClient";
let cards: ScryfallCard[] = [];

export async function cacheCards(){
    await loadCards();
    await redisClient.set('cards', JSON.stringify(getCards()));
    await cacheCardsAsHash(getCards());
}

export async function cacheCardsAsHash(cards: ScryfallCard[]) {
  const pipeline = redisClient.multi();

  for (const card of cards) {
    const normalizedName = card.name.toLowerCase();
    pipeline.hSet('cardsByName', normalizedName, JSON.stringify(card));
  }

  await pipeline.exec();
  console.log('Cards cached in Redis hash');
}

export async function loadCards() {
  cards = await fetchData();
}

export function getCards(): ScryfallCard[] {
  return cards;
}

export function findCardByName(name: string): ScryfallCard | undefined {
  return cards.find(card => card.name.toLowerCase() === name.toLowerCase());
}

export async function getCachedCards(): Promise<ScryfallCard[]> {
  const raw = await redisClient.get('cards');
  return raw ? JSON.parse(raw) : [];
}

export async function findCardByNameCached(name: string): Promise<ScryfallCard | undefined> {
  const cards = await getCachedCards();
  return cards.find(card => card.name.toLowerCase() === name.toLowerCase());
}
export async function getCardByNameHashed(name: string): Promise<ScryfallCard | undefined> {
    const normalizedNamename = name.toLowerCase();
    const raw = await redisClient.hGet('cardsByName', normalizedNamename);    
    console.log(raw)
    return raw ? JSON.parse(raw) : undefined;
}
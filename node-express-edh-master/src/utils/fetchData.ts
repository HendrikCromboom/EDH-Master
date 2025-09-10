import { readFile } from 'fs/promises';
import ScryfallCard from '../models/ScryFallCard';

export async function fetchData(): Promise<ScryfallCard[]>{
const fileName = "oracle-cards-20250909210519.json"
const rawData = await readFile('../data/' + fileName, 'utf-8')
const data: [ScryfallCard] = JSON.parse(rawData);
return data
}

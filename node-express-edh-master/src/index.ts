import express from 'express';
import router from './routes/api/v1/index.ts'
import { fetchData } from './utils/fetchData.ts';
import type ScryfallCard from './models/ScryFallCard.ts';
import { cacheCards } from './services/cardStoreService.ts';
import { connectRedis } from './lib/redisClient.ts';
const app = express();

await connectRedis();
await cacheCards();

const cards: ScryfallCard[] = await fetchData();
app.locals.cards = cards;

app.use("/api", router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
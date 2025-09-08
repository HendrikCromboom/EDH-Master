import axios from 'axios';

export async function fetchCardByName(name: string) {
  const url = `https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(name)}`;
  const response = await axios.get(url);
  return response.data;
}


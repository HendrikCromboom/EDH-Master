class ScryfallCard {
  object: string;
  id: string;
  oracle_id: string;
  multiverse_ids: number[];
  mtgo_id: number;
  tcgplayer_id: number;
  cardmarket_id: number;
  name: string;
  lang: string;
  released_at: string;
  uri: string;
  scryfall_uri: string;
  layout: string;
  highres_image: boolean;
  image_status: string;
  image_uris: {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
  };
  mana_cost: string;
  cmc: number;
  type_line: string;
  oracle_text: string;
  power: string;
  toughness: string;
  colors: string[];
  color_identity: string[];
  keywords: string[];
  all_parts: {
    object: string;
    id: string;
    component: string;
    name: string;
    type_line: string;
    uri: string;
  }[];
  legalities: Record<string, string>;
  games: string[];
  reserved: boolean;
  game_changer: boolean;
  foil: boolean;
  nonfoil: boolean;
  finishes: string[];
  oversized: boolean;
  promo: boolean;
  reprint: boolean;
  variation: boolean;
  set_id: string;
  set: string;
  set_name: string;
  set_type: string;
  set_uri: string;
  set_search_uri: string;
  scryfall_set_uri: string;
  rulings_uri: string;
  prints_search_uri: string;
  collector_number: string;
  digital: boolean;
  rarity: string;
  watermark: string;
  flavor_text: string;
  card_back_id: string;
  artist: string;
  artist_ids: string[];
  illustration_id: string;
  border_color: string;
  frame: string;
  frame_effects: string[];
  security_stamp: string;
  full_art: boolean;
  textless: boolean;
  booster: boolean;
  story_spotlight: boolean;
  edhrec_rank: number;
  preview: {
    source: string;
    source_uri: string;
    previewed_at: string;
  };
  prices: {
    usd: string | null;
    usd_foil: string | null;
    usd_etched: string | null;
    eur: string | null;
    eur_foil: string | null;
    tix: string | null;
  };
  related_uris: Record<string, string>;
  purchase_uris: Record<string, string>;

  constructor(data: Partial<ScryfallCard>) {
  this.object = data.object ?? '';
  this.id = data.id ?? '';
  this.oracle_id = data.oracle_id ?? '';
  this.multiverse_ids = data.multiverse_ids ?? [];
  this.mtgo_id = data.mtgo_id ?? 0;
  this.tcgplayer_id = data.tcgplayer_id ?? 0;
  this.cardmarket_id = data.cardmarket_id ?? 0;
  this.name = data.name ?? '';
  this.lang = data.lang ?? 'en';
  this.released_at = data.released_at ?? '';
  this.uri = data.uri ?? '';
  this.scryfall_uri = data.scryfall_uri ?? '';
  this.layout = data.layout ?? '';
  this.highres_image = data.highres_image ?? false;
  this.image_status = data.image_status ?? '';
  this.image_uris = data.image_uris ?? {
    small: '', normal: '', large: '', png: '', art_crop: '', border_crop: ''
  };
  this.mana_cost = data.mana_cost ?? '';
  this.cmc = data.cmc ?? 0;
  this.type_line = data.type_line ?? '';
  this.oracle_text = data.oracle_text ?? '';
  this.power = data.power ?? '';
  this.toughness = data.toughness ?? '';
  this.colors = data.colors ?? [];
  this.color_identity = data.color_identity ?? [];
  this.keywords = data.keywords ?? [];
  this.all_parts = data.all_parts ?? [];
  this.legalities = data.legalities ?? {};
  this.games = data.games ?? [];
  this.reserved = data.reserved ?? false;
  this.game_changer = data.game_changer ?? false;
  this.foil = data.foil ?? false;
  this.nonfoil = data.nonfoil ?? false;
  this.finishes = data.finishes ?? [];
  this.oversized = data.oversized ?? false;
  this.promo = data.promo ?? false;
  this.reprint = data.reprint ?? false;
  this.variation = data.variation ?? false;
  this.set_id = data.set_id ?? '';
  this.set = data.set ?? '';
  this.set_name = data.set_name ?? '';
  this.set_type = data.set_type ?? '';
  this.set_uri = data.set_uri ?? '';
  this.set_search_uri = data.set_search_uri ?? '';
  this.scryfall_set_uri = data.scryfall_set_uri ?? '';
  this.rulings_uri = data.rulings_uri ?? '';
  this.prints_search_uri = data.prints_search_uri ?? '';
  this.collector_number = data.collector_number ?? '';
  this.digital = data.digital ?? false;
  this.rarity = data.rarity ?? '';
  this.watermark = data.watermark ?? '';
  this.flavor_text = data.flavor_text ?? '';
  this.card_back_id = data.card_back_id ?? '';
  this.artist = data.artist ?? '';
  this.artist_ids = data.artist_ids ?? [];
  this.illustration_id = data.illustration_id ?? '';
  this.border_color = data.border_color ?? '';
  this.frame = data.frame ?? '';
  this.frame_effects = data.frame_effects ?? [];
  this.security_stamp = data.security_stamp ?? '';
  this.full_art = data.full_art ?? false;
  this.textless = data.textless ?? false;
  this.booster = data.booster ?? false;
  this.story_spotlight = data.story_spotlight ?? false;
  this.edhrec_rank = data.edhrec_rank ?? 0;
  this.preview = data.preview ?? {
    source: '', source_uri: '', previewed_at: ''
  };
  this.prices = data.prices ?? {
    usd: null, usd_foil: null, usd_etched: null,
    eur: null, eur_foil: null, tix: null
  };
  this.related_uris = data.related_uris ?? {};
  this.purchase_uris = data.purchase_uris ?? {};
}
}

export default ScryfallCard
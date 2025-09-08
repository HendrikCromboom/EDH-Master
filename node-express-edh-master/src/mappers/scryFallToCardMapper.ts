import Card from '../models/Card.ts'
export function mapScryfallCardToEvent(card: any): Card {
    const typeLineList = splitTypeLine(card.type_line)
  return {
    id: card.id,
    name: card.name,
    cost: card.mana_cost,
    type: typeLineList[0] ?? "Undefined",
    subType: typeLineList[1] ?? "",
    ruleText: card.oracle_text,
    power: card.power,
    toughness: card.toughness
  };
}
function splitTypeLine(typeLine: string): string[]{
  if(!typeLine.includes(' — ')){
    return [typeLine, "null"]
  }else{
    return typeLine.split(' — ')
  }
}
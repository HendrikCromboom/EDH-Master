class Card{
    id: string;
    name: string;
    cost: string;
    type: string;
    subType: string;
    ruleText: string;
    power: string;
    toughness: string;

    constructor(
    id: string,
    name: string,
    cost: string,
    type: string,
    subType: string,
    ruleText: string,
    power: string,
    toughness: string 
  ) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.type = type;
    this.subType = subType,
    this.ruleText = ruleText,
    this.power = power,
    this.toughness = toughness
  }
}

export default Card
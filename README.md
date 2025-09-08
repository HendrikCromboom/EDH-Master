# EDH-Master

## Introduction

This is the concept for an app supporting the MTG EDH format.
The goal here is to effectively work with a large chunk of data and keep as many components of the app as light as possible. The first step will be to effectively fetch the data of the card fast and to attach a preview image from a source(first thought would be scryfall, they have an API as well). For context there are about 1M cards in this game and every object I would fetch from scryfall or oracle would be around 10kb as a raw json string. Eventually I want to be able to feed larger amounts of data to the user for the commander gametype, where selecting certain cards suggest combos or entire decks. I can use some statistics trough scryfall for that and or some LLM.

As functionalities get added, I will keep expanding functionalities such as life tracking, goldfishing, trends, price tracking, ...
The goal is to keep the architecture expandable and to have fun with it.

There is absolutely already apps that do this, but I have a fresh twist coming down the line, stay tuned!

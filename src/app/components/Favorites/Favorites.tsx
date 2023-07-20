'use client';
import Image from 'next/image';
import { useState } from 'react';
import FilterIcon from '../../../../public/images/filter.svg';
import FilterBlackIcon from '../../../../public/images/filterBlack.svg';
import Card from '../Card/Card';

export default function Favorites() {
  const [filtersActive, setFilterActive] = useState(false);
  const list = [
    {
      cardId: 'KAR_009',
      dbfId: 39169,
      name: 'Babbling Book',
      cardSet: 'One Night in Karazhan',
      type: 'Minion',
      rarity: 'Rare',
      cost: 1,
      attack: 1,
      health: 2,
      text: '<b>Battlecry:</b> Add a random Mage spell to your hand.',
      flavor:
        "His idol is the Green Hills of Stranglethorn, and he won't shut up about it.",
      artist: 'A. J. Nazzaro',
      collectible: true,
      playerClass: 'Mage',
      howToGet: 'Unlocked in the Menagerie, in One Night in Karazhan.',
      howToGetGold:
        'Crafting unlocked in the Menagerie, in One Night in Karazhan.',
      img: 'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f37d46c1a0e83c19ddc271750d8c00ea08d8789ebed082206d92ac82735d5239.png',
      locale: 'enUS',
      mechanics: [
        {
          name: 'Battlecry',
        },
      ],
    },
    {
      cardId: 'KAR_009',
      dbfId: 39169,
      name: 'Babbling Book',
      cardSet: 'One Night in Karazhan',
      type: 'Minion',
      rarity: 'Rare',
      cost: 1,
      attack: 1,
      health: 2,
      text: '<b>Battlecry:</b> Add a random Mage spell to your hand.',
      flavor:
        "His idol is the Green Hills of Stranglethorn, and he won't shut up about it.",
      artist: 'A. J. Nazzaro',
      collectible: true,
      playerClass: 'Mage',
      howToGet: 'Unlocked in the Menagerie, in One Night in Karazhan.',
      howToGetGold:
        'Crafting unlocked in the Menagerie, in One Night in Karazhan.',
      img: 'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f37d46c1a0e83c19ddc271750d8c00ea08d8789ebed082206d92ac82735d5239.png',
      locale: 'enUS',
      mechanics: [
        {
          name: 'Battlecry',
        },
      ],
    },
    {
      cardId: 'KAR_009',
      dbfId: 39169,
      name: 'Babbling Book',
      cardSet: 'One Night in Karazhan',
      type: 'Minion',
      rarity: 'Rare',
      cost: 1,
      attack: 1,
      health: 2,
      text: '<b>Battlecry:</b> Add a random Mage spell to your hand.',
      flavor:
        "His idol is the Green Hills of Stranglethorn, and he won't shut up about it.",
      artist: 'A. J. Nazzaro',
      collectible: true,
      playerClass: 'Mage',
      howToGet: 'Unlocked in the Menagerie, in One Night in Karazhan.',
      howToGetGold:
        'Crafting unlocked in the Menagerie, in One Night in Karazhan.',
      img: 'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f37d46c1a0e83c19ddc271750d8c00ea08d8789ebed082206d92ac82735d5239.png',
      locale: 'enUS',
      mechanics: [
        {
          name: 'Battlecry',
        },
      ],
    },
    {
      cardId: 'CORE_KAR_009',
      dbfId: 69700,
      name: 'Babbling Book',
      cardSet: 'Core',
      type: 'Minion',
      rarity: 'Rare',
      cost: 1,
      attack: 1,
      health: 2,
      text: '<b>Battlecry:</b> Add a random Mage spell to your hand.',
      flavor:
        "His idol is the Green Hills of Stranglethorn, and he won't shut up about it.",
      artist: 'A. J. Nazzaro',
      collectible: true,
      playerClass: 'Mage',
      howToGet: 'Unlocked at level 7.',
      howToGetGold: 'Unlocked after winning 100 games as Mage.',
      img: 'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4483f615ae9168b316a9756ef1af1c9ab2f5c62cfbfda86e96b740d70ab7bf95.png',
      locale: 'enUS',
      mechanics: [
        {
          name: 'Battlecry',
        },
      ],
    },
    {
      cardId: 'LT24_812H',
      dbfId: 89886,
      name: 'Babbling Book',
      cardSet: 'Mercenaries',
      type: 'Minion',
      rarity: 'Legendary',
      cost: 1,
      attack: 1,
      health: 1,
      text: 'All Mercs in play start as Casters.',
      elite: true,
      locale: 'enUS',
      img: 'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f37d46c1a0e83c19ddc271750d8c00ea08d8789ebed082206d92ac82735d5239.png',
      mechanics: [
        {
          name: 'Aura',
        },
      ],
    },
  ];

  const content = (
    <>
      <div className="w-full flex flex-col items-center bg-bgImgHome">
        <div className="mt-20">
          <p className="font-AclonicaR font-bold text-7xl text-white">
            FAVORITES
          </p>
          <div className="mt-20 flex items-center justify-center" id="filtros">
            <div className="flex items-center">
              <p className="font-AclonicaR text-colorText-Sadows mr-5 text-xl">
                Mana
              </p>
              <div className="bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2">
                <div className="bg-bgColor-Filters bg-opacity-80 px-6 py-4 font-AclonicaR text-white rounded-full">
                  <button className="mr-1 w-12 text-xl drop-shadow-lg">
                    0
                  </button>
                  <button className="mx-1 w-12 text-xl drop-shadow-lg">
                    1
                  </button>
                  <button className="mx-1 w-12 text-xl drop-shadow-lg">
                    2
                  </button>
                  <button className="mx-1 w-12 text-xl drop-shadow-lg">
                    3
                  </button>
                  <button className="mx-1 w-12 text-xl drop-shadow-lg">
                    4
                  </button>
                  <button className="mx-1 w-12 text-xl drop-shadow-lg">
                    5
                  </button>
                  <button className="mx-1 w-12 text-xl drop-shadow-lg">
                    6
                  </button>
                  <button className="mx-1 w-12 text-xl drop-shadow-lg">
                    7
                  </button>
                  <button className="mx-1 w-12 text-xl drop-shadow-lg">
                    8
                  </button>
                  <button className="mx-1 w-12 text-xl drop-shadow-lg">
                    9
                  </button>
                  <button className="mx-1 w-12 text-xl drop-shadow-lg">
                    10+
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center px-11">
              <p className="text-white font-AclonicaR pr-4 text-xl">Sort By:</p>
              <div className="bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2">
                <select
                  className="font-AclonicaR text-white w-60 py-4 px-6 bg-bgColor-Filters bg-opacity-80 rounded-full"
                  name="Sort"
                  id="Sort"
                >
                  <option className="bg-bgOptions p-2" value="" selected>
                    Mana: Low to high
                  </option>
                  <option className="bg-bgOptions p-2" value="">
                    Option 2
                  </option>
                </select>
              </div>
            </div>
            <div className="">
              <button className="bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2">
                <div
                  className={`bg-bgColor-Filters text-white ${
                    filtersActive && 'bg-ColorGold text-black'
                  } flex text-center py-4 px-6  font-AclonicaR items-center bg-opacity-80 rounded-full`}
                >
                  <Image
                    src={filtersActive ? FilterBlackIcon : FilterIcon}
                    alt={''}
                  />{' '}
                  <p className={`${filtersActive && ' text-black'} pl-2`}>
                    Filters
                  </p>
                </div>
              </button>
            </div>
          </div>
          <div className="flex mt-8" id="filtros">
            <div className="bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2 mx-5">
              <select
                className="font-AclonicaR text-white w-60 py-4 px-6 bg-bgColor-Filters bg-opacity-80 rounded-full"
                name="Sort"
                id="Sort"
              >
                <option className="bg-bgOptions p-2 mt-3" value="" selected>
                  Attack
                </option>
                <option className="bg-bgOptions p-2" value="">
                  Option 2
                </option>
              </select>
            </div>
            <div className="bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2 mx-5">
              <select
                className="font-AclonicaR text-white w-60 py-4 px-6 bg-bgColor-Filters bg-opacity-80 rounded-full"
                name="Sort"
                id="Sort"
              >
                <option className="bg-bgOptions p-2" value="" selected>
                  Mana: Low to high
                </option>
                <option className="bg-bgOptions p-2" value="">
                  Option 2
                </option>
              </select>
            </div>
            <div className="bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2 mx-5">
              <select
                className="font-AclonicaR text-white w-60 py-4 px-6 bg-bgColor-Filters bg-opacity-80 rounded-full"
                name="Sort"
                id="Sort"
              >
                <option className="bg-bgOptions p-2" value="" selected>
                  Mana: Low to high
                </option>
                <option className="bg-bgOptions p-2" value="">
                  Option 2
                </option>
              </select>
            </div>
            <div className="bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2 mx-5">
              <select
                className="font-AclonicaR text-white w-60 py-4 px-6 bg-bgColor-Filters bg-opacity-80 rounded-full"
                name="Sort"
                id="Sort"
              >
                <option className="bg-bgOptions p-2" value="" selected>
                  Mana: Low to high
                </option>
                <option className="bg-bgOptions p-2" value="">
                  Option 2
                </option>
              </select>
            </div>
            <div className="bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2 mx-5">
              <select
                className="font-AclonicaR text-white w-60 py-4 px-6 bg-bgColor-Filters bg-opacity-80 rounded-full"
                name="Sort"
                id="Sort"
              >
                <option className="bg-bgOptions p-2" value="" selected>
                  Mana: Low to high
                </option>
                <option className="bg-bgOptions p-2" value="">
                  Option 2
                </option>
              </select>
            </div>
            <div className="bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2 mx-5">
              <select
                className="font-AclonicaR text-white w-60 py-4 px-6 bg-bgColor-Filters bg-opacity-80 rounded-full"
                name="Sort"
                id="Sort"
              >
                <option className="bg-bgOptions p-2" value="" selected>
                  Mana: Low to high
                </option>
                <option className="bg-bgOptions p-2" value="">
                  Option 2
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-14 flex">
          {list.map((card: any) => (
            <>
              <Card
                name={card.name}
                img={card.img}
                cardSet={card.cardSet}
                type={card.type}
                rarity={card.rarity}
                favorite={true}
              ></Card>
            </>
          ))}
        </div>
      </div>
    </>
  );
  return content;
}
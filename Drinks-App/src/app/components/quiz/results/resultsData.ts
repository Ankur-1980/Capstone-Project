import { Vodka } from '../results/liquor/vodka';
import { Tequila } from '../results/liquor/tequila';
import { Gin } from '../results/liquor/gin';
import { Whiskey } from '../results/liquor/whiskey';
import { Rum } from '../results/liquor/rum';
import { Bourbon } from '../results/liquor/bourbon';


export interface ResultsData {
  vodka: Vodka[];
  tequila: Tequila[];
  gin: Gin[];
  whiskey: Whiskey[];
  rum: Rum[];
  bourbon: Bourbon[];
}

export const RESULTS: ResultsData[] = [
    vodka: [
      {
        strDrink: 'Moscow Mule',
        strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg',
        idDrink: 178326
      },
      {
        strDrink: 'Kamikaze',
        strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/xa58bb1504373204.jpg',
        idDrink: 11600
      },
      {
        strDrink: 'Bloody Mary',
        strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg',
        idDrink: 11113
      }
  ],
  tequila: [
    {
      strDrink: 'Margarita',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
      idDrink: 11007
    },
    {
      strDrink: 'Paloma',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/samm5j1513706393.jpg',
      idDrink: 17253
    }
  ],
  gin: [
    {
      strDrink: 'Negroni',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg',
      idDrink: 11003
    },
    {
      strDrink: 'Dry Martini',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg',
      idDrink: 11005
    }
    {
      strDrink: 'Espresso Martini',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/n0sx531504372951.jpg',
      idDrink: 17212
    }
  ],
  whiskey: [
    {
      strDrink: 'Old Fashioned',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg',
      aidDrink: 11001
    }
  ],
  rum: [
    {
      strDrink: 'Pina Colada',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/cpf4j51504371346.jpg',
      aidDrink: 17207
    }
  ],
  bourbon: [
    {
      strDrink: 'Bourbon Sour',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg',
      aidDrink: 11147
    }
  ]
];
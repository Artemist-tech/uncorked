// Grapes stored by colour + charcteristics
// looks like this can get a little unwieldy + possibly repetive, but then we do get
// a more specific set of characteristics
const grapes = [
  {
    colour: 'white',
    varietal: {
      common: ['chardonnay', 'riesling', 'semillion'],
      uncommon: ['albarino', 'white grenache']
    },
    appearance: {
      clarity: ['clear', 'opaque', 'cloudy'],
      colour: ['pale', 'golden', 'straw']
    },
    descriptors: {
      herbaceous: {
        fresh: ['basil', 'mint'],
        dried: ['bay leaf', 'herbs']
      },
      fruity: {
        berry: ['gooseberry', 'raspberry'],
        citrus: ['lemon', 'lime'],
        treeFruit: ['peach', 'apple']
      },
      woody: ['oak', 'cedar']
    },
    structure: {
      acidity: [],
      tannins: [],
      body: [],
      sweetness: []
    }
  },
  {
    colour: 'red',
    varietal: {
      common: ['pinot noir', 'shiraz', 'merlot'],
      uncommon: ['carmenere', 'petit verdot']
    },
    appearance: {
      clarity: ['bright', 'opaque', 'inky'],
      colour: ['brick', 'mauve', 'purple']
    },
    descriptors: {
      herbaceous: {
        fresh: ['lavendar', 'oregano'],
        dried: ['tea', 'tobacco']
      },
      fruity: {
        berry: ['cherry', 'raspberry'],
        citrus: ['lemon', 'lime'],
        treeFruit: ['peach', 'apple']
      },
      woody: ['oak', 'cedar']
    },
    structure: {
      acidity: [],
      tannins: [],
      body: [],
      sweetness: []
    }
  }
];

// maybe a more specific schema - but then issues of linking
const whiteGrapes = {
  common: ['chardonnay', 'riesling', 'semillion'],
  uncommon: ['albarino', 'white grenache']
};
const redGrapes = {
  common: ['pinot noir', 'shiraz', 'merlot'],
  uncommon: ['carmenere', 'petit verdot']
};

// can these arrays then be put into the object? like we build it up section by section?
const body = ['full', 'thin', 'medium'];
const acidity = ['tart', 'sharp', 'refreshing'];

// possible format for grape specific (not finished yet, just wondering if this is
// the right kind of structure?)
const chardonnay = {
  grapeColour: 'white',
  appearance: {
    clarity: ['clear', 'opaque', 'cloudy'],
    colour: ['pale', 'golden', 'straw']
  },
  character: {
    fruit: ['apple', 'apricot', 'banana', 'stone fruit'],
    age: ['fig', 'honey', 'toast'],
    oak: ['almond', 'butterscotch', 'vanilla'],
    body: ['full, light'],
    acid: ['sharp', 'tart', 'soft'],
    finish: ['smooth', 'long', 'persistent']
  }
};

// one option maybe is to break it down into the tasting sections?
const appearance = {
  clarity: [],
  depth: [],
  liveliness: [],
  colour: []
};
const character = {
  herbaceous: {
    fresh: [],
    dried: [],
    vegetal: [],
    floral: []
  },
  fruity: {
    berry: [],
    citrus: [],
    dried: []
  },
  spice: [],
  wood: [],
  earth: []
};
const tactile = {
  acidity: [],
  balance: [],
  tannins: [],
  sweetness: []
};
const finish = {
  complexity: [],
  intensity: [],
  impression: []
};

// or do we combine it all?
const wineProfile = {
  appearance: {
    clarity: [],
    depth: [],
    liveliness: [],
    colour: []
  },
  character: {
    herbaceous: {
      fresh: [],
      dried: [],
      vegetal: [],
      floral: []
    },
    fruity: {
      berry: [],
      citrus: [],
      dried: []
    },
    spice: [],
    wood: [],
    earth: []
  },
  tactile: {
    acidity: [],
    balance: [],
    tannins: [],
    sweetness: []
  },
  finish: {
    complexity: [],
    intensity: [],
    impression: []
  }
};

/*
other things to consider:
do we need to split charcteristics off into separate grape colours? Some only apply to red or white, but that starts getting a little complicated. It would be possible if we did it word by word?
*/

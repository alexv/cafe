module.exports = {
  types: [
    {
      name: 'Drip',
      url: '/drip',
      grind: 13,
      fixed: false,
      ratio: 16,
      defaultCoffeeGrams: 50,
      bloomTime: null,
      bloomWater: null,
      brewTime: null
    },
    {
      name: 'Chemex',
      url: '/chemex',
      grind: 20,
      fixed: true,
      ratio: 16,
      defaultCoffeeGrams: 42,
      bloomTime: 45,
      bloomWater: 150,
      brewTime: 195
    },
    {
      name: 'Aeropress',
      url: '/aeropress',
      grind: 13,
      fixed: true,
      ratio: 13,
      defaultCoffeeGrams: 17,
      bloomTime: null,
      bloomWater: null,
      brewTime: 75
    },
    {
      name: 'Cold Brew (Breville)',
      url: '/cold-brew-breville',
      grind: 20,
      fixed: false,
      ratio: 16,
      defaultCoffeeGrams: 40,
      bloomTime: 0,
      bloomWater: 0,
      brewTime: 0
    },
    {
      name: 'Cold Brew (OXO)',
      url: '/cold-brew-oxo',
      grind: 20,
      fixed: true,
      ratio: 4,
      defaultCoffeeGrams: 284,
      bloomTime: null,
      bloomWater: null,
      brewTime: 43200
    }
  ]
}

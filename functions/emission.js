const emission = {
  // "Brick, Common": 300,
  "Concrete, Lightweight": 201.6,
  "Gypsum Wall Board": 31.155,
  "Sand": 7.5,
  "Concrete, Precast": 67,
  "Damp-proofing": 1,
  "Plaster": 1,
  "Rigid insulation": 64,
  // "Air": 1,
  "Aluminum": 157.5,
  "Metal - Painted - Grey": 123.9,
  "Metal Door - Brindle": 123.9,
  "Cherry": 1,
  "Glass": 1200,
  "Wood - Birch - Solid Stained Light Low Gloss": 44.8, //448.8
  "Paint - Sienna": 1,
  "Fenster - Kunststoff wei": 52,
  "Fenster - Kunststoff": 52,
};

export default function getEmission(material) {
  const emissionFactor = emission[material] ? emission[material] : 0;
  return emissionFactor;
}

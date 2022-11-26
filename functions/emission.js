const emission = {
  "Brick, Common": 300,
  "Gypsum Wall Board": 31.155,
  "Sand": 7.5,
  "Concrete, Precast": 67,
  "Rigid insulation": 64,
  "Aluminum": 157.5,
  "Metal - Painted - Grey": 123.9,
  "Metal Door - Brindle": 123.9,
  "Glass": 1200,
  "Wood - Birch - Solid Stained Light Low Gloss": 448.8, //448.8

  "Fenster - Kunststoff wei": 52,
  "Fenster - Kunststoff": 52,

	"Concrete, Lightweight": 20.16, //201.6 - too hight

//   "Air": 1,
//   "Cherry": 1,
//   "Damp-proofing": 1,
//   "Plaster": 1,
//   "Paint - Sienna": 1,
};

export default function getEmission(material) {
  const emissionFactor = emission[material] ? emission[material] : 0;
  return emissionFactor;
}

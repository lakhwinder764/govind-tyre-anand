import { wp } from "./media";

export type Product = {
  id: string;
  name: string;
  image: string;
  priceNote?: string;
  badge?: string;
};

export const tyres: Product[] = [
  {
    id: "gripper-at",
    name: "GRIPPER A/T",
    image: wp("2025/12/e97a15ec-a8b8-4292-b712-dc2d2cf0ca6a.png"),
    priceNote: "Call Us for Price",
    badge: "Installation Free",
  },
  {
    id: "gripper-mt",
    name: "GRIPPER M/T",
    image: wp("2025/12/c19a4ae7-4e81-408f-9877-b24a2d682cb3.png"),
    priceNote: "Call Us for Price",
    badge: "Installation Free",
  },
  {
    id: "gripper-xt",
    name: "GRIPPER X/T",
    image: wp("2025/12/52bfc174-1b01-4fe4-98cd-cd377fbc404c.png"),
    priceNote: "Call Us for Price",
  },
  {
    id: "razr-at811",
    name: "RAZR AT811",
    image: wp("2025/12/3493-1732844092-manf-angle-large.png"),
    priceNote: "Call Us for Price",
  },
  {
    id: "razr-mt772",
    name: "RAZR MT772",
    image: wp("2025/12/21d8a317-a4a7-4463-980b-f13d17de53ea.png"),
    priceNote: "Call Us for Price",
  },
  {
    id: "razr-mt772m",
    name: "RAZR MT772M",
    image: wp("2025/12/ee7f9233-100f-460f-aa7a-9aad14229446.png"),
    priceNote: "Call Us for Price",
  },
  {
    id: "at771-bravo",
    name: "AT771 BRAVO",
    image: wp("2025/12/1514-1716445383-manf-angle-large.png"),
    priceNote: "Call Us for Price",
  },
  {
    id: "at980-bravo",
    name: "AT980 BRAVO",
    image: wp("2025/12/838-1716870227-manf-angle-large.png"),
    priceNote: "Call Us for Price",
  },
  {
    id: "cr966",
    name: "CR966",
    image: wp("2025/12/da92a268-6681-45f3-be1f-92432735bd6d.png"),
    priceNote: "Call Us for Price",
  },
  {
    id: "ridge-grappler",
    name: "Ridge Grappler® A/T",
    image: wp("2025/12/2a416f1e-eaca-4243-b6e9-9f411c00c10d.png"),
    priceNote: "Call Us for Price",
  },
  {
    id: "terra-grappler",
    name: "Terra Grappler G2® A/T",
    image: wp("2025/12/1746-1726794327-manf-angle-large.png"),
    priceNote: "Call Us for Price",
  },
  {
    id: "mud-grappler",
    name: "Mud Grappler® M/T",
    image: wp("2025/12/eb61be92-f687-4407-a27d-bd7d084db5c7.png"),
    priceNote: "Call Us for Price",
  },
  {
    id: "diamaris",
    name: "DIAMARIS",
    image: wp("2025/12/c6267c2e-d6b1-436c-9c1b-15e67f0e737b.png"),
    priceNote: "Call Us for Price",
  },
  {
    id: "baja-boss",
    name: "Baja Boss",
    image: wp("2025/12/38a9237d-4ec3-4b53-9dab-79a54c2cb1c1.png"),
    priceNote: "Call Us for Price",
  },
];

export const wheels: Product[] = [
  {
    id: "plati-py009",
    name: "Plati PY-009",
    image: wp("2026/01/009-20-HB-SIDE-1622464088-600x600.jpg"),
    priceNote: "Call Us for Price",
    badge: "Installation Free",
  },
  {
    id: "py009-black",
    name: "PY-009 (Black)",
    image: wp("2026/01/PY-009-14-BLACK-UCR-1763108819.jpg"),
    priceNote: "Call Us for Price",
    badge: "Installation Free",
  },
  {
    id: "py009-milling",
    name: "PY-009 (BLACK-MILLING)",
    image: wp("2026/01/py-009-20-black-box-milling-1724653114.jpg"),
    priceNote: "Call Us for Price",
  },
  {
    id: "jsr-st19",
    name: "JSR ST19",
    image: wp(
      "2026/01/JDM_WHEELS_JSR_ST19_GLOSS_BLACK_MACHINED_LIP_JAPAN_STREET_RACING_RIMS_18_INCH_MESH_MAGS_1.webp",
    ),
    priceNote: "Call Us for Price",
  },
  {
    id: "jsr-st06",
    name: "JSR ST06",
    image: wp(
      "2026/01/JDM_WHEELS_JSR_ST06_GLOSS_BLACK_MACHINED_LIP_JAPAN_STREET_RACING_RIMS_18_INCH_STAGGERED_MAGS_1.webp",
    ),
    priceNote: "Call Us for Price",
  },
  {
    id: "jsr-st10",
    name: "JSR ST10",
    image: wp(
      "2026/01/JDM_WHEELS_JSR_ST10_GLOSS_BLACK_MACHINED_LIP_JAPAN_STREET_RACING_RIMS_18_INCH_MAGS_1.webp",
    ),
    priceNote: "Call Us for Price",
  },
  {
    id: "black-rock-spider",
    name: "BLACK ROCK SPIDER",
    image: wp("2026/01/1.jpg"),
    priceNote: "Call Us for Price",
  },
  {
    id: "gfs1",
    name: "GFS SERIES GFS1",
    image: wp(
      "2026/01/GT_Form_GFS1_Gloss_Black_Tinted_18_20_22_Inch_4x4_Offroad_Performance_Wheels_Truck_SUV_Rims-600x600-1.jpg",
    ),
    priceNote: "Call Us for Price",
  },
  {
    id: "black-rock-gunner",
    name: "BLACK ROCK GUNNER",
    image: wp(
      "2026/01/BLACK-ROCK-OFF-ROAD-GUNNER-SATIN-BLACK-WHEELS-17-18-INCH-4X4-RIMS-600x600-1.jpg",
    ),
    priceNote: "Call Us for Price",
  },
  {
    id: "black-rock-fury",
    name: "BLACK ROCK FURY",
    image: wp(
      "2026/01/4X4_WHEELS_BLACK_ROCK_FURY_SILVER_MACHINED_OFFROAD_RIMS_1.webp",
    ),
    priceNote: "Call Us for Price",
  },
  {
    id: "black-rock-cage",
    name: "BLACK ROCK CAGE",
    image: wp(
      "2026/01/BEADLOCK-RIMS-BLACK-ROCK-OFF-ROAD-CAGE-SATIN-BLACK-BEADLOCK-RING-WHEELS-17-INCH-4X4-RIMS-TRUCK-SUV-4WD-600x600-1.jpg",
    ),
    priceNote: "Call Us for Price",
  },
  {
    id: "black-rock-prime",
    name: "BLACK ROCK PRIME",
    image: wp(
      "2026/01/BLACK-ROCK-OFF-ROAD-PRIME-DARK-BRONZE-BLACK-RING-WHEELS-18-20-INCH-4X4-RIMS-600x600-1.jpg",
    ),
    priceNote: "Call Us for Price",
  },
  {
    id: "avid-matte-black",
    name: "Avid Av-06 Matte Black 17x8",
    image: wp("2025/12/Wheel_AVID_AV-06_MATTE_BLACK2_8.webp"),
    priceNote: "Call Us for Price",
  },
  {
    id: "avid-gloss-black",
    name: "Avid Av-06 Gloss Black 17x8",
    image: wp("2025/12/Wheel_AVID_AV-06_GLOSS_BLACK2_1.webp"),
    priceNote: "Call Us for Price",
  },
  {
    id: "avid-gloss-white",
    name: "Avid Av-06 Gloss White 17x8",
    image: wp("2025/12/Wheel_AVID_AV-06_MATTE_WHITE3_5.webp"),
    priceNote: "Call Us for Price",
  },
  {
    id: "avid-polished-lip",
    name: "Avid Av-06 Gloss Black Polished Lip 17x8",
    image: wp("2025/12/Wheel_AVID_AV-06_GLOSS_BLACK_POLISHED_LIP_3_5.webp"),
    priceNote: "Call Us for Price",
  },
  {
    id: "avid-hyper-black",
    name: "Avid Av-06 Hyper Black 17x8",
    image: wp("2025/12/Wheel_AVID_AV-06_HYPER_BLACK2_2.webp"),
    priceNote: "Call Us for Price",
  },
  {
    id: "avid-bronze",
    name: "Avid Av-06 Matte Bronze 17x8",
    image: wp("2025/12/Wheel_AVID_AV-06_MATTE_BRONZE_1_2.webp"),
    priceNote: "Call Us for Price",
  },
  {
    id: "hussla-027-red",
    name: "Hussla 027 Red 17x8.25",
    image: wp("2025/12/Wheel_HUSSLA_027_RED1.webp"),
    priceNote: "Call Us for Price",
  },
  {
    id: "hussla-030-red",
    name: "Hussla 030 Red 17x7",
    image: wp("2025/12/Wheel_HUSSLA_030_RED1_7.webp"),
    priceNote: "Call Us for Price",
  },
  {
    id: "hussla-tiffany",
    name: "Hussla 030 Tiffany Blue 17x7",
    image: wp("2025/12/Wheel_HUSSLA_030_TIFFANY_BLUE1_5.webp"),
    priceNote: "Call Us for Price",
  },
  {
    id: "hussla-gold",
    name: "Hussla Retro Gold Polished Lip 17x7.5",
    image: wp("2025/12/Wheel_HUSSLA_RETRO__GOLD_POLISHED_LIP_mag_wheels_1_1.webp"),
    priceNote: "Call Us for Price",
  },
  {
    id: "hussla-gt",
    name: "Hussla Gt Full Matte Black 17x7",
    image: wp("2025/12/Wheel_HUSSLA_GT_FULL_MATTE_BLACK1_6.webp"),
    priceNote: "Call Us for Price",
    badge: "Installation Free",
  },
  {
    id: "hussla-021",
    name: "Hussla 021 White Machined Lip 17x7",
    image: wp("2025/12/Wheel_HUSSLA_021_WHITE_MACHINED_LIP3_6.webp"),
    priceNote: "Call Us for Price",
    badge: "Installation Free",
  },
  {
    id: "pro-drag",
    name: "Pro Drag Comp Series Gloss Black Brushed Milled 17x7.5",
    image: wp("2025/12/Wheel_PRO_DRAG_COMP_SERIES_GLOSS_BLACK_MILLED_3_4.webp"),
    priceNote: "Call Us for Price",
  },
  {
    id: "xxr-chromium",
    name: "Xxr 527 Chromium 17x8.25",
    image: wp("2025/12/Wheel_XXR_527_CHROMIUM1_5.webp"),
    priceNote: "Call Us for Price",
  },
  {
    id: "xxr-matte",
    name: "Xxr 527 Matte Black 17x8.25",
    image: wp("2025/12/Wheel_XXR_527_MATTE_BLACK1_4.webp"),
    priceNote: "Call Us for Price",
  },
  {
    id: "km542",
    name: "KM542 IMPACT",
    image: wp("2025/12/e6b7bac5-c9f1-484d-9425-37d50fe84122.png"),
    priceNote: "Call Us for Price",
  },
  {
    id: "km544",
    name: "KM544 MESA",
    image: wp("2025/12/65e8c319-1bb5-4131-ae71-d4445dbe44a6.png"),
    priceNote: "Call Us for Price",
  },
  {
    id: "km727",
    name: "KM727 WRATH",
    image: wp("2025/12/48c1da91-7033-4599-8afd-07e9a5658f6e.png"),
    priceNote: "Call Us for Price",
  },
].map((wheel) => ({
  ...wheel,
  priceNote: wheel.priceNote ?? "Call Us for Price",
  badge: "Installation Free",
}));

export const liftKits: Product[] = [
  {
    id: "dobinsons-ford",
    name: "Dobinsons Coil Only Lift Kit to suit Ford Next Gen",
    image: wp("2025/12/coil-spring-only-lift-kit-ford-next-gen-raptor-3.png"),
    priceNote: "Call Us for Price",
    badge: "Installation Free",
  },
  {
    id: "formula-challenger",
    name: 'Formula 4x4 (2”/50mm) Lift Kit To Suit Mitsubishi Challenger',
    image: wp("2025/12/CHAL-0031-1.png"),
    priceNote: "Call Us for Price",
    badge: "Installation Free",
  },
  {
    id: "formula-landcruiser",
    name: 'Formula 4x4 (2”/50mm) Big Bore Lift Kit To Suit Toyota LandCruiser',
    image: wp("2025/12/CRUS-0461.png"),
    priceNote: "Call Us for Price",
    badge: "Installation Free",
  },
  {
    id: "bilstein-jeep",
    name: "BILSTEIN 4x4 (30MM) LIFT KIT TO SUIT JEEP WRANGLER",
    image: wp("2025/12/JEEP00711.png"),
    priceNote: "Call Us for Price",
    badge: "Installation Free",
  },
  {
    id: "formula-f4r",
    name: 'Formula 4x4 (2”/50mm) Adjustable F4R',
    image: wp("2025/12/TOY920191.png"),
    priceNote: "Call Us for Price",
    badge: "Installation Free",
  },
  {
    id: "formula-15-40",
    name: 'Formula 4x4 (1.5”/40mm) Lift Kit To Suit',
    image: wp("2025/12/CRUS-0461.png"),
    priceNote: "Call Us for Price",
    badge: "Installation Free",
  },
  {
    id: "cal-fox",
    name: 'CAL OFFROAD (2” ) FOX LIFT KIT TOUR PACK SUITABLE',
    image: wp("2025/12/CAL50141.png"),
    priceNote: "Call Us for Price",
    badge: "Installation Free",
  },
];

export const wheelBrandShowcase = [
  {
    src: wp("2025/09/db0ce565-742b-4804-ad23-52d420663f4f.png"),
    alt: "Performance wheel",
  },
  {
    src: wp("2025/09/BLAD-BLK.png"),
    alt: "BLAD black wheel",
  },
  {
    src: wp("2025/09/81LZUqu4DmL.jpg"),
    alt: "Alloy wheel",
  },
  {
    src: wp("2025/09/61z1ttW0UEL._UF10001000_QL80_.jpg"),
    alt: "Mesh mag wheel",
  },
  {
    src: wp("2025/09/GT-FORM-MARQUEE-SATIN-BLACK-RIMS-WHEELS-PERFORMANCE-CAR-SUV-600x600-1.webp"),
    alt: "GT Form Marquee satin black",
  },
  {
    src: wp("2025/09/ARC-BLK.jpg"),
    alt: "ARC black wheel",
  },
  {
    src: wp("2025/09/BLACK-ROCK-OFF-ROAD-MILITARY-SATIN-BLACK-WHEELS-17-20-INCH-4X4-RIMS.jpg"),
    alt: "Black Rock Military satin black",
  },
  {
    src: wp("2025/09/images.jpg"),
    alt: "Aftermarket wheel",
  },
  {
    src: wp("2025/09/9303M1.webp"),
    alt: "9303 wheel",
  },
  {
    src: wp("2025/09/kmc-km730mx-hatchet-17x8-5-6-et-10-matte-black-a1-png.webp"),
    alt: "KMC KM730MX Hatchet",
  },
  {
    src: wp("2025/09/td_Brooklyn-398x398-1.jpeg"),
    alt: "Brooklyn wheel",
  },
];

export const wheelBrands = [
  "Vossen",
  "American Outlaw",
  "American Racing",
  "ATS",
  "BBS",
  "Black Rhino",
  "Black Rock",
  "CSA",
  "Enkei",
  "Fuel Offroad",
  "ICON",
  "JSR",
  "KMC",
  "Konig",
  "Method Race",
  "OZ Racing",
  "Rotiform",
  "Mandrus",
];

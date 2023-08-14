export enum Brand {
  Sony,
  Canon,
  Nikon,
  Fujifulm,
  Olympus,
  Panasonic,
  Sigma,
  Tamron,
  Samyang,
}

export enum LensMount {
  CanonRF,
  NikonZ,
  SonyE,
  Lmount,
  Micro43,
  FujifilmX,
}

export enum SensorSize {
  Micro43,
  APSC,
  FullFrame,
}

export type Price = {
  usd: number;
  date: string; // YYYY-MM-DD
};

export enum CardSlot {
  uhs1,
  uhs2,
  cf,
}

export type CameraLensCommonFields = {
  url: string;
  name: string;
  brand: Brand;
  lensMount: LensMount;
  sensorSize: SensorSize;
  price: Price;
  weightGrams: number;
  weatherSealed: boolean;
};

export type Camera = {
  common: CameraLensCommonFields;
  inBodyImageStabilization: boolean;
  firstCardSlot: CardSlot;
  secondCardSlot?: CardSlot;
  sensorResolutionMegapixels: number;
  fastestShutterSpeedReciprocal: number;
};

export type Lens = {
  common: CameraLensCommonFields;
  imageStabilization: boolean;
  zoomType: ZoomLens | PrimeLens;
};

export type ZoomLens = {
  focalLengthMm: [number, number];
  maxAperture: number | [number, number];
};

export type PrimeLens = {
  focalLengthMm: number;
  maxAperture: number;
};

export type CameraSystem = {
  cameras: Camera[];
  lenses: Lens[];
};

import { Brand, CameraSystem, CardSlot, LensMount, SensorSize } from '../model';

export const m43Dataset: CameraSystem = {
  cameras: [
    {
      common: {
        name: 'Olympus e-m10 mark ii',
        url: 'https://www.bhphotovideo.com/c/product/1394217-REG/sony_ilce_7m3_alpha_a7_iii_mirrorless.html',
        brand: Brand.Sony,
        lensMount: LensMount.SonyE,
        sensorSize: SensorSize.FullFrame,
        price: {
          usd: 1700,
          date: '2023-08-13',
        },
        weightGrams: 650,
        weatherSealed: true,
      },
      sensorResolutionMegapixels: 24,
      firstCardSlot: CardSlot.uhs2,
      secondCardSlot: CardSlot.uhs1,
      fastestShutterSpeedReciprocal: 8000,
      inBodyImageStabilization: true,
    },
  ],
  lenses: [
    {
      common: {
        name: 'Tamron 28-75mm f/2.8 Di III VXD G2 Lens (Sony E)',
        url: 'https://www.bhphotovideo.com/c/product/1658157-REG/tamron_a063_28_75mm_f_2_8_di_iii.html',
        brand: Brand.Tamron,
        lensMount: LensMount.SonyE,
        sensorSize: SensorSize.FullFrame,
        price: {
          usd: 800,
          date: '2024-08-01',
        },
        weightGrams: 540,
        weatherSealed: true,
      },
      zoomType: {
        focalLengthMm: [28, 75],
        maxAperture: 2.8,
      },
      imageStabilization: false,
    },
  ],
};

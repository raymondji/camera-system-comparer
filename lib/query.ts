import { database } from './database';
import { Camera, CameraSystem, CardSlot, Lens, SensorSize } from './model';

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type Filters = {
  commonCameraFeatures?: DeepPartial<Camera>;
  commonLensFeatures?: DeepPartial<Lens>;
  cameras: DeepPartial<Camera>[];
  lenses: DeepPartial<Lens>[];
  cameraLensCompatibility?: CameraLensCompatibilityOpts;
};

const exampleFilters: Filters = {
  cameras: [
    {
      inBodyImageStabilization: true,
      firstCardSlot: CardSlot.uhs1,
      secondCardSlot: CardSlot.uhs1,
      fastestShutterSpeedReciprocal: 8000,
      common: {
        weatherSealed: true,
      },
    },
  ],
  lenses: [
    {
      zoomType: {
        maxAperture: 3,
        focalLengthMm: [28, 70],
      },
      common: {
        weatherSealed: true,
      },
    },
    {
      zoomType: {
        maxAperture: 3,
        focalLengthMm: [80, 170],
      },
      common: {
        weatherSealed: true,
      },
    },
    {
      zoomType: {
        focalLengthMm: 35,
        maxAperture: 2,
      },
      common: {
        weatherSealed: true,
      },
    },
  ],
};

export enum SortOrder {
  priceAscending,
  weightAscending,
}

// TODO: support specifying some existing gear, and make the filters take into account that. e.g. include them in the systems with price set to 0.
//
// query returns a list of camera systems that satisfy the given filters and sorted by the given sortOrder
export function query(filters: Filters, sortOrder: SortOrder): CameraSystem[] {
  const cameraFilters = filters.cameras.map((c) => {
    return {
      ...filters.commonCameraFeatures,
      ...c,
    };
  });
  const lensFilters = filters.lenses.map((l) => {
    return {
      ...filters.commonLensFeatures,
      ...l,
    };
  });

  return [];
}

type CameraLensCompatibilityOpts = {
  // If true, include lenses designed for a smaller sensor size than the camera's sensor,
  // i.e. the camera must be used in crop mode to use the lens
  includeCropLenses: boolean;
};

function isCameraLensCompatible(
  camera: Camera,
  lens: Lens,
  opts: CameraLensCompatibilityOpts
) {
  if (opts.includeCropLenses) {
    return camera.common.lensMount == lens.common.lensMount;
  }

  return (
    camera.common.lensMount == lens.common.lensMount &&
    doesLensFullyCoverCameraSensor(lens, camera)
  );
}

function doesLensFullyCoverCameraSensor(lens: Lens, camera: Camera): boolean {
  switch (lens.common.sensorSize) {
    case SensorSize.Micro43:
      return camera.common.sensorSize == SensorSize.Micro43;
    case SensorSize.APSC:
      return [SensorSize.APSC, SensorSize.FullFrame].includes(
        camera.common.sensorSize
      );
    case SensorSize.FullFrame:
      return [
        SensorSize.Micro43,
        SensorSize.APSC,
        SensorSize.FullFrame,
      ].includes(camera.common.sensorSize);
  }
}

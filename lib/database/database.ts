import { CameraSystem } from '../model';
import { fujiXDataset } from './fuji-x';
import { m43Dataset } from './micro-43';
import { sonyEDataset } from './sony-e';

function mergeDatasets(...datasets: CameraSystem[]): CameraSystem {
  return {
    cameras: datasets.flatMap((d) => d.cameras),
    lenses: datasets.flatMap((d) => d.lenses),
  };
}

export const database = mergeDatasets(sonyEDataset, m43Dataset, fujiXDataset);

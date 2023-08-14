import { CameraSystem } from '../model';
import { sonyEmountDataset } from './sonyemount';

function mergeDatasets(...datasets: CameraSystem[]): CameraSystem {
  return {
    cameras: datasets.flatMap((d) => d.cameras),
    lenses: datasets.flatMap((d) => d.lenses),
  };
}

export const database = mergeDatasets(sonyEmountDataset);

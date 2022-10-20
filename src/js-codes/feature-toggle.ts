import { IStorage, LocalStorage } from "./storage";

export function fetchAllFeatures(): Promise<{
  [featureName: string]: boolean;
}> {
  // in reality, this would have been a `fetch` call:
  // `fetch("/api/features/all")`
  return new Promise<{ [featureName: string]: boolean }>((resolve) => {
    const sampleFeatures = {
      "extended-summary": true,
      "feedback-dialog": false,
    };
    setTimeout(resolve, 100, sampleFeatures);
  });
}

let features: { [featureName: string]: boolean } | null = null;
let storage: IStorage = new LocalStorage();
const STORAGE_KEY = "feature-toggles";
export const initialFeatureToggle = async () => {
  if (!features) {
    const data = storage.read(STORAGE_KEY);
    if (data) {
      features = JSON.parse(data);
    }
  }
  if (!features) {
    features = await fetchAllFeatures();
    storage.write(STORAGE_KEY, JSON.stringify(features));
  }
};

let lockedPromise: Promise<any>;
export const getFeatureState = async (feature: string) => {
  if (features === null) {
    if (!lockedPromise) {
      lockedPromise = initialFeatureToggle();
    }
    await lockedPromise;
  }
  return features?.[feature];
};

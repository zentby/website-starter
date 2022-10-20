import { getFeatureState, initialFeatureToggle } from "./feature-toggle";

describe("test feature toggle", () => {
  it("works for extended-summary", async () => {
    const enabled = await getFeatureState("extended-summary");
    expect(enabled).toBe(true);
  });
  it("works for feedback-dialog", async () => {
    const enabled = await getFeatureState("feedback-dialog");
    expect(enabled).toBe(false);
  });
});

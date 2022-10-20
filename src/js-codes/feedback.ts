import { getFeatureState } from "./feature-toggle";

export const testFeedback = () => {
  return getFeatureState("feedback-dialog").then(function (isEnabled) {
    if (isEnabled) {
      makeFeedbackButtonVisible();
    }
  });
};

function makeFeedbackButtonVisible() {
  console.log("makeFeedbackButtonVisible");
}

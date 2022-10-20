import { getFeatureState } from "./feature-toggle";

getFeatureState("extended-summary").then(function (isEnabled) {
  if (isEnabled) {
    showExtendedSummary();
  } else {
    showBriefSummary();
  }
});

function showExtendedSummary() {
  console.log("showExtendedSummary");
}
function showBriefSummary() {
  console.log("showBriefSummary");
}

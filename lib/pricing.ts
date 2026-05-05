// PhacoTrack Pro — US App Store prices.
// Source of truth: App Store Connect → Subscriptions → Pricing → United States.
// To update: change the two USD values below; display labels and savings %
// derive automatically across the landing page.

export const US_MONTHLY_USD = 11.99;
export const US_YEARLY_USD = 84.99;

export const monthlyPriceLabel = `$${US_MONTHLY_USD.toFixed(2)}`;
export const yearlyPriceLabel = `$${US_YEARLY_USD.toFixed(2)}`;

export const yearlySavingsPercent = Math.round(
  (1 - US_YEARLY_USD / (US_MONTHLY_USD * 12)) * 100,
);

import type { Pricing } from "../types/pricing.type";
import { isEurope } from "../utils/helper";

export const pricingPlans: Pricing[] = [
  {
    title: "Open Source",
    price: "Free",
    features: ["Unlimited Users", "Public Repos", "Private Repos"],
    btnText: "Install now",
    btnHref: "/docs/self-hosted/latest/self-hosted",
    trackingName: "free",
  },
  {
    title: "Professional",
    price: isEurope() ? "€18" : "$20",
    duration: "Per User/Month",
    features: [
      "Everything in Free",
      "Unlimited Prebuilds",
      "Shared Workspaces",
      "Snapshots",
      "Admin Dashboard",
    ],
    btnText: "Get License",
    btnHref: "/enterprise-license",
    spiced: true,
    trackingName: "professional",
  },
];

import { isEurope } from "../utils/helper";
import type { Pricing } from "../types/pricing.type";

export const pricingPlans: Pricing[] = [
  {
    title: "Open Source",
    price: "Free",
    features: ["50 hours/month", "Public Repos", "Private repos 30d trial"],
    btnText: "Try Now",
    btnHref: "/#get-started",
  },
  {
    title: "Student",
    price: `<span class="crossed-out">${
      isEurope() ? "€8" : "$9"
    }</span> Free</>`,
    duration: "Per User/Month",
    features: [
      "100 hours/month",
      "Private & Public Repos",
      "4 Parallel Workspaces",
      "30min Timeout",
      "Limited to 6 months",
    ],
    btnText: "Claim Offer",
    btnHref: "https://gitpod.io/plans/",
    spiced: true,
  },
  {
    title: "Student Unlimited",
    price: `<span class="crossed-out">${isEurope() ? "€35" : "$39"}</span> ${
      isEurope() ? "€8" : "$9"
    }`,
    duration: "Per User/Month",
    features: [
      "All in personal plus",
      "16 Parallel Workspaces",
      "Team Manageable",
      "1h Timeout",
    ],
    btnText: "Buy Now",
    btnHref: "https://gitpod.io/plans/",
  },
];

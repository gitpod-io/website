import type { Pricing } from "../types/pricing.type";
import { isEurope } from "../utils/helper";

export const pricingPlans: Pricing[] = [
  {
    title: "Open Source",
    price: "Free",
    features: ["50 hours/month", "Public Repos", "Private Repos 30d Trial"],
    btnText: "Try Now",
    btnHref: "/#get-started",
  },
  {
    title: "Personal",
    price: isEurope() ? "€8" : "$9",
    duration: "Per User/Month",
    features: [
      "100 hours/month",
      "Private & Public Repos",
      "4 Parallel Workspaces",
      "30min Timeout",
    ],
    btnText: "Buy Now",
    btnHref: "https://gitpod.io/plans",
  },
  {
    title: "Professional",
    price: isEurope() ? "€23" : "$25",
    duration: "Per User/Month",
    features: [
      "All in Personal",
      "8 Parallel Workspaces",
      "Unlimited Hours",
      "Teams",
    ],
    btnText: "Buy Now",
    btnHref: "https://gitpod.io/plans",
    spiced: true,
  },
  {
    title: "Unleashed",
    price: isEurope() ? "€35" : "$39",
    duration: "Per User/Month",
    features: [
      "All in Professional",
      "16 Parallel Workspaces",
      "1hr Timeout",
      "3hr Timeout boost",
    ],
    btnText: "Buy Now",
    btnHref: "https://gitpod.io/plans",
  },
];

export const otherPlans = [
  {
    title: "Pro Open Source",
    paragraphs: [
      "If you're a professional open-source developer and need more hours, you can apply to our free Professional Open Source plan.",
      "Get free, <strong>unlimited hours</strong> on any <strong>public repository</strong> when you meet the <a href='/docs/professional-open-source#who-is-eligible'>requirements.</a>",
    ],
    btnText: "Apply now",
    btnHref: "/contact",
  },
  {
    title: "Self Hosted",
    paragraphs: [
      "Gitpod self-hosted is the best solution for teams who want to keep full data control or use Gitpod in private networks.",
      "Install Gitpod Self-Hosted on <strong>Google Cloud Platform</strong> and <strong>K3s</strong>.",
    ],
    btnText: "Enquire now",
    btnHref: "/contact",
  },
  {
    title: "Student",
    paragraphs: [
      `For those still learning the ropes, you can get our student plan for <strong>${
        isEurope() ? "€8" : "$9"
      } per month.</strong>`,
      "Make sure your student email is set as your primary email on GitHub/GitLab. Please let us know if your educational institution is not correctly recognized.",
    ],
    btnText: "Get verified",
    btnHref: "/contact",
  },
];

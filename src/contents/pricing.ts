import type { Pricing } from "../types/pricing.type";
import { isEurope } from "../utils/helper";

export const pricingPlans: Pricing[] = [
  {
    title: "Open Source",
    price: "Free",
    features: ["50 hours/month", "Public Repos", "Private Repos 30d Trial"],
    btnText: "Try Now",
    btnHref: "/#get-started",
    trackingName: "free",
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
    trackingName: "personal",
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
    trackingName: "professional",
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
    trackingName: "unleashed",
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
    trackingName: "pro-open-source",
  },
  {
    title: "Self Hosted",
    paragraphs: [
      "Gitpod self-hosted is the best solution for teams who want to keep full data control or use Gitpod in private networks.",
      "Install Gitpod Self-Hosted on <strong>Google Cloud Platform</strong> and <strong>K3s</strong>.",
    ],
    btnText: "Learn more",
    btnHref: "/self-hosted",
    trackingName: "self-hosted",
  },
  {
    title: "Student",
    paragraphs: [
      `For those still learning the ropes, you can get our student plan for <strong>${
        isEurope() ? "€8" : "$9"
      } per month.</strong>`,
      `
      To get it, just follow these steps:
      <ul class="list-disc list-inside">
      <li>Log-in with a free Gitpod account.</li>
      <li>Make sure that the primary email address of the GitHub/GitLab/Bitbucket account you use in Gitpod is from a domain of your educational institution.</li>
      <li>Go to the <a href="https://gitpod.io/plans">Plans</a> page and select the <em>Student Unlimited Plan</em>.</li>
      <li>If it doesn't appear, please <a href="/contact">contact us</a> to register your educational email domain.</li>
      </ul>`,
    ],
    btnText: "Check now",
    btnHref: "https://gitpod.io/plans",
    trackingName: "student",
  },
];

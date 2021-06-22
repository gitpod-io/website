export type Author = {
  name: string;
  socialProfiles: {
    github: string;
    twitter: string;
    linkedin?: string;
  };
  description: string;
};

export const authors: { [idx: string]: Author } = {
  svenefftinge: {
    name: "Sven Efftinge",
    socialProfiles: {
      github: "svenefftinge",
      twitter: "svenefftinge",
      linkedin: "efftinge",
    },
    description:
      "Sven loves finding sweet spots in product development. Always keeping an eye on pragmatism and the real benefit for the end user, he has proven to be a creative source for many successful technologies. He is a co-founder of TypeFox, co-lead of Eclipse Theia and product manager of Gitpod.",
  },
  meysholdt: {
    name: "Moritz Eysholdt",
    socialProfiles: {
      github: "meysholdt",
      twitter: "meysholdt",
      linkedin: "moritzeysholdt",
    },
    description:
      "Moritz loves to make things works. He is a co-founder of TypeFox and Gitpod.",
  },
  akosyakov: {
    name: "Anton Kosyakov",
    socialProfiles: {
      github: "akosyakov",
      twitter: "akosyakov",
      linkedin: "anton-kosyakov-4093b610",
    },
    description:
      "Anton is core committer and co-architect of Eclipse Theia. He is an exceptionally productive coder and a great team player. At the moment he works primarily on Theia, Gitpod, the monaco language client and various associated satellite projects. He also is committer of Xtext.",
  },
  geropl: {
    name: "Gero Posmyk-Leinemann",
    socialProfiles: {
      github: "geropl",
      twitter: "geropl2",
    },
    description:
      "Gero is a passionate software developer with a strong interest in programming languages. He likes to learn new stuff but somehow always turns out to work on the backend side of things. His current pet peeve is Kubernetes and everything around it.",
  },
  csweichel: {
    name: "Christian Weichel",
    socialProfiles: {
      github: "csweichel",
      twitter: "csweichel",
      linkedin: "christian-weichel-740b4224",
    },
    description:
      "Christian loves building things, systems and software. Ever keen to solve cross-cutting problems, he has experience in human-computer interaction, embedded software development, and the backend side of things (Kubernetes, Docker). He is also co-leading Eclipse Mita.",
  },
  jankeromnes: {
    name: "Jan Keromnes",
    socialProfiles: {
      github: "jankeromnes",
      twitter: "jankeromnes",
      linkedin: "jankeromnes",
    },
    description:
      "Jan is the creator of Janitor, and he has been automating development environments for almost a decade. He is passionate about making software development saner, easier, and more accessible for all humans.",
  },
  nisarhassan12: {
    name: "Nisar Hassan",
    socialProfiles: {
      github: "nisarhassan12",
      twitter: "nisarhassan12",
      linkedin: "nisar-hassan-naqvi-413466199",
    },
    description:
      "Nisar is a web developer who creates UX rich performant websites and web applications.",
  },
  anudeepreddy: {
    name: "Anudeep Reddy",
    socialProfiles: {
      github: "anudeepreddy",
      twitter: "",
      linkedin: "",
    },
    description: "Anudeep is a developer advocate at Gitpod.",
  },
  spoenemann: {
    name: "Miro Spönemann",
    socialProfiles: {
      github: "spoenemann",
      twitter: "sponemann",
      linkedin: "mirospoenemann",
    },
    description:
      "Miro is thrilled about innovation on programming languages, DSLs, graphical modeling and web technologies.",
  },
  JesterOrNot: {
    name: "Sean Hellum",
    socialProfiles: {
      github: "JesterOrNot",
      twitter: "",
      linkedin: "sean-hellum-84ba401a2",
    },
    description:
      "Sean is a developer advocate and rustacean with a passion for Docker, Linux, Bash, Rust, and CLIs",
  },
  JohannesLandgraf: {
    name: "Johannes Landgraf",
    socialProfiles: {
      github: "JohannesLandgraf",
      twitter: "jolandgraf",
      linkedin: "johanneslandgraf",
    },
    description:
      "Johannes is CCO at Gitpod and helps professional development teams to embrace fully set-up, remote dev environments. Before that he worked in Venture Capital focusing on everything around open source and developer tools.",
  },
  corneliusludmann: {
    name: "Cornelius Ludmann",
    socialProfiles: {
      github: "corneliusludmann",
      twitter: "ludmann",
      linkedin: "corneliusludmann",
    },
    description: "",
  },
  ghuntley: {
    name: "Geoffrey Huntley",
    socialProfiles: {
      github: "ghuntley",
      twitter: "geoffreyhuntley",
      linkedin: "geoffreyhuntley",
    },
    description:
      "After many previous adventures involving cycling through many countries on a unicycle Geoff now lives a minimalist lifestyle in a van that is slowly working its' way around Australia. On an average day™ at Gitpod you'll find him shipping features along side the engineering team, crafting code examples and authoring documentation.",
  },
  mikenikles: {
    name: "Mike Nikles",
    socialProfiles: {
      github: "mikenikles",
      twitter: "mikenikles",
      linkedin: "mikenikles",
    },
    description:
      "Mike is a software architect who values developer experience, productivity and team morale. He is on a journey to help developers let go of their local development environments and embrace automated, ephemeral development environments.",
  },
  arthursens: {
    name: "Arthur Sens",
    socialProfiles: {
      github: "arthursens",
      twitter: "ArthurSilvaSens",
      linkedin: "arthursilvasens",
    },
    description:
      "A big open-source fan, Arthur is a SRE focused on cloud-native observability. When not training backflips and gymnastics, you can find him chit-chatting at CNCF's slack channels.",
  },
  christinfrohne: {
    name: "Christin Frohne",
    socialProfiles: {
      github: "ChristinFrohne",
      twitter: "christinfrohne",
      linkedin: "christin-frohne-91a4b0173",
    },
    description:
      "Christin is our Marketing Manager at Gitpod. She is eager to create a great brand experience and favors going the unconventional way. In her free time, she loves to be out in the nature, climbing rocks and practising yoga.",
  },
  "rl-gitpod": {
    name: "Robert Leftwich",
    socialProfiles: {
      github: "rl-gitpod",
      twitter: "",
      linkedin: "robert-leftwich",
    },
    description:
      "Robert loves to code and lives off-grid... although the other way around is probably more accurate. Engineering systems of all shapes and sizes with many different teams highlighted the need for Gitpod's blazingly fast, ephemeral and secure development environments time and time again - he is helping make that happen.",
  },
};

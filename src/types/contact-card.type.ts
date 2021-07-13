export type ContactCard = {
  btnHref: string;
  btnText: string;
  description: string;
  title: string;
  image: string;
  imgHeight: string;
  imgWidth: string;
  tracking?: () => void;
};

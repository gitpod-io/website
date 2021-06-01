type Field = {
  el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
  valid: boolean;
  value?: string;
  checked?: boolean;
  selected?: string[];
};

export type Form = {
  [fieldName: string]: Field;
};

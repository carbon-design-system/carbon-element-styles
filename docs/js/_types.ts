export type Meta = {
  id: string;
  name: string;
  reference?: {
    label: string;
    source: string;
    url: string;
  };
  config: {
    key: string;
    type: string;
    default: string;
  }[];
  notes?: string[];
};

export type Demo = {
  id: string;
  name: string;
  config?: {
    [option: string]: string;
  };
  html: {
    raw: string;
    presentation?: string;
  };
  setup?: (frame: HTMLElement) => void;
};

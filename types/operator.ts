export interface Operator {
  name: string;
  initials: string;
  role: string;
  company: string;
  domain: string;
  isUnicorn: boolean;
  image: string;
}

export interface PortfolioCompany {
  id: string;
  name: string;
  sectorTag: string;
  statusTag: string;
  thesis: string;
  detail: string;
  quote: string;
  quoteAuthor: string;
  focusArea: string;
  cadence: string;
}

export interface PotionResponse {
  data:  Potion[];
  meta:  Meta;
  links: LibrosLinks;
}

export interface Potion {
  id:         string;
  type:       string;
  attributes: Attributes;
  links:      DatumLinks;
}

export interface Attributes {
  slug:            string;
  characteristics: string;
  difficulty:      string;
  effect:          string;
  image:           string;
  inventors:       null;
  ingredients:     string;
  manufacturers:   null;
  name:            string;
  side_effects:    null;
  time:            null;
  wiki:            string;
}

export interface DatumLinks {
  self: string;
}

export interface LibrosLinks {
  self:    string;
  current: string;
  next:    string;
  last:    string;
}

export interface Meta {
  pagination:   Pagination;
  copyright:    string;
  generated_at: Date;
}

export interface Pagination {
  current: number;
  next:    number;
  last:    number;
  records: number;
}

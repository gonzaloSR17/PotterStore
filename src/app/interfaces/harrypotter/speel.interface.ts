export interface Spells {
    data:  Datum[];
    meta:  Meta;
    links: SpellsLinks;
}

export interface Datum {
    id:         string;
    type:       Type;
    attributes: Attributes;
    links:      DatumLinks;
}

export interface Attributes {
    slug:        string;
    category:    string;
    creator:     null | string;
    effect:      string;
    hand:        null | string;
    image:       null | string;
    incantation: null | string;
    light:       null | string;
    name:        string;
    wiki:        string;
}

export interface DatumLinks {
    self: string;
}

export enum Type {
    Spell = "spell",
}

export interface SpellsLinks {
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

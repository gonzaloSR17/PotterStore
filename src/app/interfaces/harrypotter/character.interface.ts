export interface Character {
    id:                   number;
    personaje:            string;
    apodo:                string;
    estudianteDeHogwarts: boolean;
    casaDeHogwarts:       CasaDeHogwarts;
    interpretado_por:     string;
    hijos:                string[];
    imagen:               string;
}

export enum CasaDeHogwarts {
    Gryffindor = "Gryffindor",
    Ninguna = "ninguna",
    Ravenclaw = "Ravenclaw",
    Slytherin = "Slytherin",
}

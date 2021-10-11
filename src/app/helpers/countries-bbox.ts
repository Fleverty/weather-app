import {Country} from '@wtr/interfaces';

export const bboxOfIsrael: number[] = [34.2654333839, 29.5013261988, 35.8363969256, 33.2774264593, 16];
export const bboxOfCyprus: number[] = [32.2566671079, 34.5718694118, 34.0048808123, 35.1731247015, 16];
export const bboxOfSlovenia: number[] = [13.6981099789, 45.4523163926, 16.5648083839, 46.8523859727, 16];
export const bboxOfJamaica: number[] = [-78.3377192858, 17.7011162379, -76.1996585761, 18.5242184514, 16];
export const bboxOfPuertoRico: number[] = [-67.2424275377, 17.946553453, -65.5910037909, 18.5206011011, 16];

export function getBBoxByCountryName(country: Country): number[] {
  return ({
    Israel: bboxOfIsrael,
    Cyprus: bboxOfCyprus,
    Slovenia: bboxOfSlovenia,
    Jamaica: bboxOfJamaica,
    PuertoRico: bboxOfPuertoRico
  })[country];
}

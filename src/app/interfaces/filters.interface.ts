export interface FiltersData {
  country: Country;
  sex: Sex;
}

export type Sex = 'MALE' | 'FEMALE';
export type Country = 'Israel' | 'Cyprus' | 'Slovenia' | 'Jamaica' | 'PuertoRico';

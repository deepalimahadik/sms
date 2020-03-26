import { Validators } from '@angular/forms';

export const RequiredValidation = [Validators.required]
export const nullValidators = [Validators.nullValidator]
export const Min3CharTextValidation = RequiredValidation.concat([Validators.minLength(3)])
export const Max8CharTextValidation = RequiredValidation.concat([Validators.maxLength(8)])
export const PasswordValidation = [
  Validators.required,
  Validators.minLength(8),
  Validators.maxLength(50),
]
export const BirthDateValidation = [
  Validators.required,
  Validators.min(new Date().getFullYear() - 100),
  Validators.max(new Date().getFullYear()),
]
export const EmailValidation = [Validators.required,  Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z-]+.[a-zA-Z0-9-.]+$')]

export const USAZipCodeValidation = [
    Validators.required,
    Validators.pattern(/^\d{5}(?:[-\s]\d{4})?$/),
]

export const PhoneNumberValidation = [Validators.required,  Validators.maxLength(10),  Validators.minLength(10), Validators.pattern('^[6-9][0-9]*$')]

export const LandlienNumberValidation = [Validators.required,  Validators.maxLength(10),  Validators.minLength(8)]

export const WebsiteValidation = [Validators.required, Validators.pattern("^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$")]

export const PincodeValidation = [Validators.required,  Validators.maxLength(6),  Validators.minLength(6)]

"use client";

import { ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';

export const countryCodes = [
  { country: 'Mexico', code: '+52', placeholder: '55 1234 5678', nationalLength: 10 },
  { country: 'Estados Unidos', code: '+1', placeholder: '202 555 0198', nationalLength: 10 },
  { country: 'Canada', code: '+1', placeholder: '416 555 0198', nationalLength: 10 },
  { country: 'Argentina', code: '+54', placeholder: '11 2345 6789', nationalLength: 10 },
  { country: 'Brasil', code: '+55', placeholder: '11 91234 5678', nationalLength: 11 },
  { country: 'Chile', code: '+56', placeholder: '9 1234 5678', nationalLength: 9 },
  { country: 'Colombia', code: '+57', placeholder: '300 123 4567', nationalLength: 10 },
  { country: 'Costa Rica', code: '+506', placeholder: '8888 8888', nationalLength: 8 },
  { country: 'Cuba', code: '+53', placeholder: '5 123 4567', nationalLength: 8 },
  { country: 'Ecuador', code: '+593', placeholder: '99 123 4567', nationalLength: 9 },
  { country: 'El Salvador', code: '+503', placeholder: '7777 7777', nationalLength: 8 },
  { country: 'Espana', code: '+34', placeholder: '612 34 56 78', nationalLength: 9 },
  { country: 'Guatemala', code: '+502', placeholder: '5123 4567', nationalLength: 8 },
  { country: 'Honduras', code: '+504', placeholder: '9999 9999', nationalLength: 8 },
  { country: 'Nicaragua', code: '+505', placeholder: '8888 8888', nationalLength: 8 },
  { country: 'Panama', code: '+507', placeholder: '6123 4567', nationalLength: 8 },
  { country: 'Paraguay', code: '+595', placeholder: '981 123456', nationalLength: 9 },
  { country: 'Peru', code: '+51', placeholder: '912 345 678', nationalLength: 9 },
  { country: 'Puerto Rico', code: '+1', placeholder: '787 555 0198', nationalLength: 10 },
  { country: 'Republica Dominicana', code: '+1', placeholder: '809 555 0198', nationalLength: 10 },
  { country: 'Uruguay', code: '+598', placeholder: '94 123 456', nationalLength: 8 },
  { country: 'Venezuela', code: '+58', placeholder: '412 123 4567', nationalLength: 10 },
  { country: 'Alemania', code: '+49', placeholder: '1512 3456789', nationalLength: 11 },
  { country: 'Francia', code: '+33', placeholder: '6 12 34 56 78', nationalLength: 9 },
  { country: 'Italia', code: '+39', placeholder: '312 345 6789', nationalLength: 10 },
  { country: 'Reino Unido', code: '+44', placeholder: '7400 123456', nationalLength: 10 },
  { country: 'Portugal', code: '+351', placeholder: '912 345 678', nationalLength: 9 }
];

export function getFullPhone(phone, countryName) {
  const selectedCountry = countryCodes.find((country) => country.country === countryName) ?? countryCodes[0];
  return `${selectedCountry.code}${phone.replace(/\D/g, '')}`;
}

export function isValidPhone(phone, countryName) {
  const selectedCountry = countryCodes.find((country) => country.country === countryName) ?? countryCodes[0];
  return phone.replace(/\D/g, '').length === selectedCountry.nationalLength;
}

export default function PhoneInput({ phone, onPhoneChange, countryName, onCountryChange }) {
  const selectedCountry = countryCodes.find((country) => country.country === countryName) ?? countryCodes[0];
  const handlePhoneChange = (event) => {
    const cleanPhone = event.target.value.replace(/\D/g, '').slice(0, selectedCountry.nationalLength);
    onPhoneChange(cleanPhone);
  };

  return (
    <div className="flex">
      <div className="relative w-40 shrink-0 sm:w-44">
        <select
          id="countryCode"
          name="countryCode"
          aria-label="Codigo de pais"
          className="h-12 w-full appearance-none rounded-l-2xl border border-r-0 border-input bg-background px-4 py-3 pr-9 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          value={countryName}
          onChange={(e) => onCountryChange(e.target.value)}
        >
          {countryCodes.map((country) => (
            <option key={country.country} value={country.country}>
              {country.country} ({country.code})
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
      </div>
      <Input
        id="phone"
        name="phone"
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        placeholder={selectedCountry.placeholder}
        maxLength={selectedCountry.nationalLength}
        required
        value={phone}
        onChange={handlePhoneChange}
        className="rounded-l-none"
      />
    </div>
  );
}

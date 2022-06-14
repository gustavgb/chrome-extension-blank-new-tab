import IsoToLatLong from 'country-iso-to-coordinates'
import { getSunrise, getSunset } from 'sunrise-sunset-js'

function isDay (isoCode) {
  const country = IsoToLatLong[isoCode.toUpperCase()]

  if (!country) {
    throw new Error('Invalid ISO code')
  }

  const coordinates = country.coordinate
  const sunrise = getSunrise(coordinates[0], coordinates[1])
  const sunset = getSunset(coordinates[0], coordinates[1])
  const now = new Date()

  return now > sunrise && now < sunset
}

window.addEventListener('load', function () {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark')
  } else if (!isDay('dk')) {
    document.body.classList.add('dark')
  }
})

# Travel App

## Overview
This project is a simple web app that includes a form where you enter the location you are traveling to and the date you are leaving. If the trip is within a week, you will get the current weather forecast.

## Functionality
- This app has a form that takes the desired trip location, departure date and return date of a user.

- This app then displays the weather and an image of the location using the information obtained from external APIs.

- The app also calculates the length of the user's trip and days till departure.

- The app also pulls some extra information about the user's destination's country e.g population, currency and primary language.

## APIS

- [Geonames](http://www.geonames.org/) - This was used to get the longitude, latitude, country code and country name.

- [Weatherbit](https://www.weatherbit.io/) - This is used to get weather details using the longitude and latitude gotten from Geonames API.

- [Pixabay](https://pixabay.com/) - This is used to get an image of the destination city. And in a case where the city is an obscure place, an image of the country is gotten instead.

- [REST Countries](https://restcountries.eu/) - This is used to get information about the country.
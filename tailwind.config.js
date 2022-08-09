/** @type {import('tailwindcss').Config} */
module.exports = {
   purge:["./src/**/*.vue", './node_modules/tw-elements/dist/js/**/*.js'],
   content: [],
   theme: {
     extend: {},
   },
   variants:{
     extend:{}
   },
   plugins: [
     require('tw-elements/dist/plugin')
   ],
 }
'use strict';

const fs = require('fs');
const DOMParser = require('xmldom').DOMParser;

fs.readFile(__dirname + '/input.xml', 'utf8', (err, data) => {
  const doc = new DOMParser().parseFromString(data, 'text/xml');
  const els = doc.documentElement.getElementsByTagName('data')

  console.log('elements', els)

  // els.forEach(el => {
  //   console.log('element', el.tagName)
  // })
})

/* eslint-disable func-names*/
import fs from 'fs';
import path from 'path';
const file = path.join(__dirname, '../../data/wordlist');
const data = fs.readFileSync(file, { encoding: 'utf8' }).split('\n').map(w => w.toLowerCase());

function Word() {
}

Word.find = function () {
  console.log('data:', data);
  // data.pop();
  // const words = data.map(d => JSON.parse(d));
  // console.log('words:', words);
  return data[Math.floor(Math.random() * data.length)];
};


module.exports = Word;

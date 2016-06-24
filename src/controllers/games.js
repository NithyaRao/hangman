/* eslint-disable new-cap */

import express from 'express';
import Game from '../models/game';
import Word from '../models/word';
const router = module.exports = express.Router();

router.post('/', (req, res) => {
  const newword = Word.find();
  console.log('newword:', newword);
  const g = new Game(req.body);
  g.word = newword;
  g.save((err) => {
    console.log('err:new game', err);
    res.send({ id: g._id, length: g.word.length, name: g.name });
  });
});

router.post('/guess', (req, res) => {
  console.log('req.body:', req.body);
  Game.findById(req.body.id, (err, game) => {
    console.log('game:', game, err );
    let indices = [];
    for (let i = 0; i < game.word.length; i++) {
      if (game.word[i] === req.body.letter) indices.push(i + 1);
    }
    console.log('indices:', indices);
  //  guessletter = game.guess;
    game.guesses.push(req.body.letter);
    game.update(() => {
      res.send({ letter: req.body.letter, indices, chances: game.guess.length });
    });
  });
});

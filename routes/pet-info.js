var express = require('express');
var router = express.Router();
const generateQuestionnaire = require('../public/javascripts/pet').generateQuestionnaire;
const getPetCandidates = require('../public/javascripts/pet').getPetCandidates;
const getPetDescription = require('../public/javascripts/pet').getPetDescription;

router.get('/questionnaire-questions', function(req, res, next) {
  const questionnaire = generateQuestionnaire();
  res.status(200).send(JSON.stringify({questionnaire: questionnaire}));
});

router.post('/pet-candidates', function(req, res, next) {
  const questionnaireResult = req.body.questionnaire;
  const petCandidates = getPetCandidates(questionnaireResult);
  res.status(200).send(JSON.stringify({petCandidates: petCandidates}));
});

router.post('/description', function(req, res, next) {
  const petName = req.body.petName;
  const description = getPetDescription(petName);
  res.status(200).send(JSON.stringify({description: description}));
});

module.exports = router;

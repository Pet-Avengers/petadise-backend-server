var petTags = require('../datas/pet-info').petTags;
var petInfo = require('../datas/pet-info').petInfo;

function generateQuestionnaire() {
  var questionnaire = {};
  for (var key in petTags) {
    questionnaire[key] = {};
    questionnaire[key].question = petTags[key].question;
    questionnaire[key].choices = [];
    for (var choice in petTags[key].choices) {
      questionnaire[key].choices.push(choice);
    }
  }
  return questionnaire;
}

function getPetCandidates(questionnaire) {
  var petNamesAndInfo = [];
  for (var petName in petInfo) {
    var chooseIt = true;
    for (var key in questionnaire) {
      // if no choices, default to accept all
      if (questionnaire[key].length === 0) {
        continue;
      }
      if (questionnaire[key].indexOf(petInfo[petName]["tag"][key]) < 0) {
        chooseIt = false;
        break;
      }
    }
    if (chooseIt) {
      petNamesAndInfo.push({petName: petName, intro: petInfo[petName]["description"]})
    }
  }
  console.log(petNamesAndInfo);
  return petNamesAndInfo;
}

function getPetDescription(petName) {
  if (!(petName in petInfo)) {
    return '';
  } else {
    return petInfo[petName].description;
  }
}

exports.generateQuestionnaire = generateQuestionnaire;
exports.getPetCandidates = getPetCandidates;
exports.getPetDescription = getPetDescription;
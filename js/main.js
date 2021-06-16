
var $classSelect = document.querySelector('#classSelect');
var $descP = document.querySelector('.descText');
var $equipLi = document.querySelector('#equipLi');
var $savingThrowLi = document.querySelector('#savingThrowsLi');
var $classIcon = document.querySelector('#classIcon');
var $priAbil = document.querySelector('.priAbil');
var $classNavBtn = document.getElementById('classNavBtn');
var $spellNavBtn = document.getElementById('spellNavBtn');
var $topNav = document.getElementById('topNav');
var $classBody = document.getElementById('classBody');
var $spellBody = document.getElementById('spellBody');
var $spellFilter = document.querySelector('#spellFilter');
var $allSpellsBtn = document.getElementById('allSpellsBtn');
var $spellRow = document.querySelector('#spellRow');
var $spellTitle = document.querySelector('#spellTitle');
var $spellList = document.getElementById('spellList');
var $spellDesc = document.querySelector('#spellDesc');
var $spellName = document.querySelector('#spellName');
var $spellLevel = document.querySelector('#spellLevel');
var $spellSch = document.querySelector('#spellSch');
var $spellConc = document.querySelector('#spellConc');
var $spellComp = document.querySelector('#spellComp');
var $spellCast = document.querySelector('#spellCast');
var $spellRng = document.querySelector('#spellRng');
var $spellRit = document.querySelector('#spellRit');
var $classSpellBody = document.querySelector('#classSpellBody');
var $classNavBar = document.querySelector('#classNav');
var $classSpellRow = document.querySelector('#classSpellRow');
var $classSpellList = document.getElementById('classSpellList');
var $classSpellTitle = document.querySelector('#classSpellTitle');
var currentSpellId = '';
var $diceNavBtn = document.getElementById('diceNavBtn');
var $diceBody = document.getElementById('diceBody');
var $diceAmt = document.querySelector('#diceAmt');
var $diceMod = document.querySelector('#diceMod');
var $rollResult = document.querySelector('#rollResult');
var $roll = document.querySelector('#roll');
var $bigDie = document.querySelector('.bigDie');
var $diceBtnCol = document.querySelector('.colFourth');
var $curDie = '';
var $mOverlay = document.getElementById('overlay');
var $diceBarImg = document.getElementById('diceBar');
var $diceGif = document.getElementById('diceGif');

$topNav.addEventListener('click', function (event) {
  if (event.target === $classNavBtn) {
    $classNavBtn.className = 'picked';
    $spellNavBtn.className = '';
    $diceNavBtn.className = '';
    $classBody.className = 'contentBody';
    $spellBody.className = 'contentBody hidden';
    $spellFilter.className = 'filterBtn hidden';
    $allSpellsBtn.className = 'allSpells picked hidden';
    $classNavBar.className = 'row classNav';
    $diceBody.className = 'contentBody hidden';
  }
  if (event.target === $spellNavBtn) {
    $classNavBtn.className = '';
    $spellNavBtn.className = 'picked';
    $diceNavBtn.className = '';
    $classBody.className = 'contentBody hidden';
    $spellBody.className = 'contentBody';
    $classSpellBody.className = 'contentBody hidden';
    $classNavBar.className = 'row classNav';
    $spellFilter.className = 'filterBtn';
    $allSpellsBtn.className = 'allSpells picked';
    $diceBody.className = 'contentBody hidden';
  }
  if (event.target === $diceNavBtn) {
    $classNavBtn.className = '';
    $spellNavBtn.className = '';
    $diceNavBtn.className = 'picked';
    $classBody.className = 'contentBody hidden';
    $spellBody.className = 'contentBody hidden';
    $classSpellBody.className = 'contentBody hidden';
    $classNavBar.className = 'row classNav hidden';
    $diceBody.className = 'contentBody';
    $diceAmt.value = '1';
    $diceMod.value = '0';

  }
});

$classSelect.addEventListener('change', function (event) {
  // eslint-disable-next-line no-undef
  for (var i = 0; i < classDesc.length; i++) {
    // eslint-disable-next-line no-undef
    if (event.target.value === classDesc[i].name) {
      // eslint-disable-next-line no-undef
      $classIcon.setAttribute('src', classDesc[i].img);
      // eslint-disable-next-line no-undef
      $descP.textContent = classDesc[i].desc;
      // eslint-disable-next-line no-undef
      $priAbil.textContent = classDesc[i].primary;
    }
  }
  $savingThrowLi.innerHTML = '';
  $equipLi.innerHTML = '';
  getClassData(event.target.value);
  getClassSpellData(event.target.value);

  if ($classSpellBody.className !== 'contentBody hidden') {
    $classSpellList.innerHTML = '';
    getClassSpellLvlData(currentSpellId);
  }
});

$spellRow.addEventListener('click', function (event) {
  $spellList.innerHTML = '';
  getSpellData(event.target.id);
  if (event.target.id === '0') {
    $spellTitle.textContent = 'Cantrips';
  } else {
    $spellTitle.textContent = 'Spell Level: ' + event.target.id;
  }
});

$spellList.addEventListener('click', function (event) {
  $mOverlay.className = 'overlay';
  getSpellDetails(event.target.textContent.split(' ').join('-').toLowerCase());
});

$mOverlay.addEventListener('click', function (event) {
  if (event.target === $mOverlay) {
    $mOverlay.className = 'overlay hidden';
  }
});

$classSpellList.addEventListener('click', function (event) {
  $mOverlay.className = 'overlay';
  getSpellDetails(event.target.textContent.split(' ').join('-').toLowerCase());
});

$mOverlay.addEventListener('click', function (event) {
  if (event.target === $mOverlay) {
    $mOverlay.className = 'overlay hidden';
  }
});

$classNavBar.addEventListener('click', function (event) {
  if (event.target === $spellFilter) {
    $spellFilter.className = 'filterBtn picked';
    $allSpellsBtn.className = 'allSpells';
    $spellBody.className = 'contentBody hidden';
    $classSpellBody.className = 'contentBody';
  }

  if (event.target === $allSpellsBtn) {
    $allSpellsBtn.className = 'allSpells picked';
    $spellFilter.className = 'filterBtn';
    $spellBody.className = 'contentBody';
    $classSpellBody.className = 'contentBody hidden';
    getSpellData('0');
  }
});

$diceBtnCol.addEventListener('click', function (event) {

  if ((event.target.value === '20') || (event.target.id === 'd20')) {
    $bigDie.setAttribute('src', 'images/dice/d20-fill.svg');
    $diceBarImg.setAttribute('src', 'images/dice/d20-fill.svg');
    $curDie = '20';
  }
  if ((event.target.value === '12') || (event.target.id === 'd12')) {
    $bigDie.setAttribute('src', 'images/dice/d12-fill.svg');
    $diceBarImg.setAttribute('src', 'images/dice/d12-fill.svg');
    $curDie = '12';
  }
  if ((event.target.value === '10') || (event.target.id === 'd10')) {
    $bigDie.setAttribute('src', 'images/dice/d10-fill.svg');
    $diceBarImg.setAttribute('src', 'images/dice/d10-fill.svg');
    $curDie = '10';
  }
  if ((event.target.value === '8') || (event.target.id === 'd8')) {
    $bigDie.setAttribute('src', 'images/dice/d8-fill.svg');
    $diceBarImg.setAttribute('src', 'images/dice/d8-fill.svg');
    $curDie = '8';
  }
  if ((event.target.value === '6') || (event.target.id === 'd6')) {
    $bigDie.setAttribute('src', 'images/dice/d6-fill.svg');
    $diceBarImg.setAttribute('src', 'images/dice/d6-fill.svg');
    $curDie = '6';
  }
  if ((event.target.value === '4') || (event.target.id === 'd4')) {
    $bigDie.setAttribute('src', 'images/dice/d4-fill.svg');
    $diceBarImg.setAttribute('src', 'images/dice/d4-fill.svg');
    $curDie = '4';
  }
});

$roll.addEventListener('click', function (event) {
  diceRoll();
  gifStart();
  setTimeout(gifStop, 1100);
});

$classSpellRow.addEventListener('click', function (event) {
  $classSpellList.innerHTML = '';
  if (event.target.value === '0') {
    $classSpellTitle.textContent = 'Cantrips';
  } else {
    $classSpellTitle.textContent = 'Spell Level: ' + event.target.value;
  }
  currentSpellId = event.target.value;
  getClassSpellLvlData(event.target.value);
});

function getClassData(name) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.dnd5eapi.co/api/classes/' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var classObj = xhr.response;
    data.classObjPro = [];
    data.classObjSave = [];
    data.classObjPro.push(classObj.proficiencies);
    data.classObjSave.push(classObj.saving_throws);
    renderClassData();
  });
  xhr.send();
}

function getClassSpellData(name) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.dnd5eapi.co/api/classes/' + name + '/spells/');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    data.curClass = [];
    var classSpells = xhr.response;
    data.curClass.push(classSpells.results);
  });
  xhr.send();
}

function getClassSpellLvlData(level) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.dnd5eapi.co/api/spells?level=' + level);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var spellsLvl = xhr.response;
    data.curLevel = [];
    data.curLevel.push(spellsLvl.results);
    renderClassSpellPage();
  });
  xhr.send();
}

function getSpellData(level) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.dnd5eapi.co/api/spells?level=' + level);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var spells = xhr.response;
    data.spellList = [];
    data.spellList.push(spells.results);
    renderSpellData();
  });
  xhr.send();
}

function getSpellDetails(name) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.dnd5eapi.co/api/spells/' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    data.spellDetails = [];
    var spellDetails = xhr.response;
    data.spellDetails.push(spellDetails);
    renderSpellDetails();
  });
  xhr.send();
}

function renderSpellData() {
  for (var z = 0; z < data.spellList[0].length; z++) {
    var $spellLiItem = document.createElement('li');
    $spellLiItem.textContent = data.spellList[0][z].name;
    $spellList.appendChild($spellLiItem);
  }
}

function renderSpellDetails() {
  $spellName.textContent = 'Spell Name: ' + data.spellDetails[0].name;
  $spellLevel.textContent = 'Spell Level: ' + data.spellDetails[0].level;
  $spellSch.textContent = 'School: ' + data.spellDetails[0].school.name;
  $spellCast.textContent = 'Casting Time: ' + data.spellDetails[0].casting_time;
  $spellRng.textContent = 'Range: ' + data.spellDetails[0].range;
  if (data.spellDetails[0].ritual === false) {
    $spellRit.textContent = 'Ritual: Cannot be cast as a ritual';
  } else {
    $spellRit.textContent = 'Ritual: Can be cast as a ritual';
  }
  if (data.spellDetails[0].concentration === false) {
    $spellConc.textContent = 'Concentration: N/A';
  } else {
    $spellConc.textContent = 'Concentration: ' + data.spellDetails[0].duration;
  }
  $spellDesc.innerHTML = '';
  for (var x = 0; x < data.spellDetails[0].desc.length; x++) {
    var $p = document.createElement('p');
    $p.textContent = data.spellDetails[0].desc[x];
    $spellDesc.appendChild($p);
  }
  $spellComp.textContent = 'Components: ';
  for (var y = 0; y < data.spellDetails[0].components.length; y++) {
    var $span = document.createElement('span');
    $span.textContent = data.spellDetails[0].components[y];
    $spellComp.appendChild($span);
  }
}

function renderClassData() {
  for (var x = 0; x < data.classObjPro[0].length; x++) {
    var equipLiItem = document.createElement('li');
    equipLiItem.textContent = data.classObjPro[0][x].name;
    $equipLi.appendChild(equipLiItem);
  }

  for (var y = 0; y < data.classObjSave[0].length; y++) {
    var savingThrowLiItem = document.createElement('li');
    savingThrowLiItem.textContent = data.classObjSave[0][y].name;
    $savingThrowLi.appendChild(savingThrowLiItem);
  }
}

function renderClassSpellPage() {
  var classObj = data.curClass[0];
  var levelObj = data.curLevel[0];
  for (var f = 0; f < levelObj.length; f++) {
    for (var s = 0; s < classObj.length; s++) {
      if (levelObj[f].name === classObj[s].name) {
        var liItem = document.createElement('li');
        liItem.textContent = levelObj[f].name;
        $classSpellList.appendChild(liItem);
      }
    }
  }
}

function diceRoll() {
  if ((parseInt($diceMod.value) > 0) && (parseInt($diceAmt.value) > 1)) {
    var resultGrp1 = [];
    for (var i = 0; i < parseInt($diceAmt.value); i++) {
      resultGrp1.push(Math.floor(Math.random() * $curDie) + 1);
    }
    var finalResult1 = (resultGrp1.reduce((a, b) => a + b, 0)) + parseInt($diceMod.value);
    $rollResult.textContent = 'You rolled a ' + $diceAmt.value + 'D' + $curDie + ' with a modifier of ' + $diceMod.value + ' for ' + resultGrp1.join(', ') + ' with a total of ' + finalResult1;
  } else if ((parseInt($diceMod.value) >= 1) && (parseInt($diceAmt.value) < 2)) {
    var roll = Math.floor(Math.random() * $curDie) + 1;
    var result = parseInt($diceMod.value) + roll;
    $rollResult.textContent = 'You rolled a D' + $curDie + ' with a modifier of ' + $diceMod.value + ' for a total of ' + result;
  } else if ((parseInt($diceAmt.value) >= 2) && (parseInt($diceMod.value) < 1)) {
    var resultGrp = [];
    for (var y = 0; y < parseInt($diceAmt.value); y++) {
      resultGrp.push(Math.floor(Math.random() * $curDie) + 1);
    }
    var finalResult = resultGrp.reduce((a, b) => a + b, 0);
    $rollResult.textContent = 'You rolled a ' + $diceAmt.value + 'D' + $curDie + ' for ' + resultGrp.join(', ') + ' with a total of ' + finalResult;
  } else {
    var regRoll = Math.floor(Math.random() * $curDie) + 1;
    $rollResult.textContent = 'You rolled a D' + $curDie + ' for a total of ' + regRoll;
  }
}

function gifStart() {
  if ($curDie === '20') {
    $diceGif.setAttribute('src', 'images/animated/D20.gif');
    $diceGif.className = 'animated';
  }
  if ($curDie === '12') {
    $diceGif.setAttribute('src', 'images/animated/D12.gif');
    $diceGif.className = 'animated';
  }
  if ($curDie === '10') {
    $diceGif.setAttribute('src', 'images/animated/D10.gif');
    $diceGif.className = 'animated';
  }
  if ($curDie === '8') {
    $diceGif.setAttribute('src', 'images/animated/D8.gif');
    $diceGif.className = 'animated';
  }
  if ($curDie === '6') {
    $diceGif.setAttribute('src', 'images/animated/D6.gif');
    $diceGif.className = 'animated';
  }
  if ($curDie === '4') {
    $diceGif.setAttribute('src', 'images/animated/D4.gif');
    $diceGif.className = 'animated';
  }
}

function gifStop() {
  $diceGif.className = 'hidden';
}

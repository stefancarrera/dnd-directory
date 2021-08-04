/* global classDesc */
const $classSelect = document.querySelector('#classSelect');
const $descP = document.querySelector('.descText');
const $equipLi = document.querySelector('#equipLi');
const $savingThrowLi = document.querySelector('#savingThrowsLi');
const $classIcon = document.querySelector('#classIcon');
const $priAbil = document.querySelector('.priAbil');
const $classNavBtn = document.getElementById('classNavBtn');
const $spellNavBtn = document.getElementById('spellNavBtn');
const $topNav = document.getElementById('topNav');
const $classBody = document.getElementById('classBody');
const $spellBody = document.getElementById('spellBody');
const $spellFilter = document.querySelector('#spellFilter');
const $allSpellsBtn = document.getElementById('allSpellsBtn');
const $spellRow = document.querySelector('#spellRow');
const $spellTitle = document.querySelector('#spellTitle');
const $spellList = document.getElementById('spellList');
const $spellDesc = document.querySelector('#spellDesc');
const $spellName = document.querySelector('#spellName');
const $spellLevel = document.querySelector('#spellLevel');
const $spellSch = document.querySelector('#spellSch');
const $spellConc = document.querySelector('#spellConc');
const $spellComp = document.querySelector('#spellComp');
const $spellCast = document.querySelector('#spellCast');
const $spellRng = document.querySelector('#spellRng');
const $spellRit = document.querySelector('#spellRit');
const $classSpellBody = document.querySelector('#classSpellBody');
const $classNavBar = document.querySelector('#classNav');
const $classSpellRow = document.querySelector('#classSpellRow');
const $classSpellList = document.getElementById('classSpellList');
const $classSpellTitle = document.querySelector('#classSpellTitle');
const $diceNavBtn = document.getElementById('diceNavBtn');
const $diceBody = document.getElementById('diceBody');
const $diceAmt = document.querySelector('#diceAmt');
const $diceMod = document.querySelector('#diceMod');
const $rollResult = document.querySelector('#rollResult');
const $roll = document.querySelector('#roll');
const $bigDie = document.querySelector('.bigDie');
const $diceBtnCol = document.querySelector('.colFourth');
const $mOverlay = document.getElementById('overlay');
const $diceBarImg = document.getElementById('diceBar');
const $diceGif = document.getElementById('diceGif');
const $spellBtn = document.querySelectorAll('.spellBtn');
const $classSpellBtn = document.querySelectorAll('.classSpellBtn');
let $curDie = '';
let currentSpellId = '';

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
    $classSpellBody.className = 'contentBody hidden';
    $rollResult.className = 'diceP hidden';
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
    $rollResult.className = 'diceP hidden';
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
  for (let i = 0; i < classDesc.length; i++) {
    if (event.target.value === classDesc[i].name) {
      $classIcon.setAttribute('src', classDesc[i].img);
      $descP.textContent = classDesc[i].desc;
      $priAbil.textContent = classDesc[i].primary;
      $classSpellList.innerHTML = '';
    }
  }
  $savingThrowLi.innerHTML = '';
  $equipLi.innerHTML = '';
  $classSpellList.innerHTML = '';
  getClassData($classSelect.value);
  getClassSpellData($classSelect.value);
});

$spellRow.addEventListener('click', function (event) {
  if (event.target.id !== 'spellRow') {
    for (let i = 0; i < $spellBtn.length; i++) {
      $spellBtn[i].className = 'spellBtn';
    }
    if (event.target.id === '0') {
      $spellTitle.textContent = 'Cantrips';
      $spellList.innerHTML = '';
      getSpellData(event.target.id);
      if (event.target.id === '0') {
        $spellBtn.className = 'spellBtn picked';
      }
    } else {
      $spellTitle.textContent = `Spell Level: ${event.target.id}`;
      $spellList.innerHTML = '';
      getSpellData(event.target.id);
    }
    event.target.className = 'spellBtn picked';
  }
});

$spellList.addEventListener('click', function (event) {
  $mOverlay.className = 'overlay';
  getSpellDetails(event.target.textContent.split(' ').join('-').toLowerCase());
});

$classSpellRow.addEventListener('click', function (event) {
  if (event.target.id !== 'classSpellRow') {
    for (let i = 0; i < $classSpellBtn.length; i++) {
      $classSpellBtn[i].className = 'spellBtn';
    }
    if (event.target.value === '0') {
      $classSpellTitle.textContent = 'Cantrips';
      $classSpellList.innerHTML = '';
      currentSpellId = event.target.value;
      getClassSpellLvlData(event.target.value);
    } else {
      $classSpellTitle.textContent = `Spell Level: ${event.target.value}`;
      $classSpellList.innerHTML = '';
      currentSpellId = event.target.value;
      getClassSpellLvlData(event.target.value);
    }
    event.target.className = 'classSpellBtn picked';
  }
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

$spellFilter.addEventListener('click', function (event) {
  $spellFilter.className = 'filterBtn picked';
  $allSpellsBtn.className = 'allSpells';
  $spellBody.className = 'contentBody hidden';
  $classSpellBody.className = 'contentBody';
});

$allSpellsBtn.addEventListener('click', function (event) {
  $allSpellsBtn.className = 'allSpells picked';
  $spellFilter.className = 'filterBtn';
  $spellBody.className = 'contentBody';
  $classSpellBody.className = 'contentBody hidden';
});

$diceBtnCol.addEventListener('click', function (event) {

  if ((event.target.value === '20') || (event.target.id === 'd20')) {
    $bigDie.setAttribute('src', 'images/dice/d20-fill.svg');
    $diceBarImg.setAttribute('src', 'images/dice/d20-fill.svg');
    $curDie = '20';
    $rollResult.className = 'diceP hidden';
  } else if ((event.target.value === '12') || (event.target.id === 'd12')) {
    $bigDie.setAttribute('src', 'images/dice/d12-fill.svg');
    $diceBarImg.setAttribute('src', 'images/dice/d12-fill.svg');
    $curDie = '12';
    $rollResult.className = 'diceP hidden';
  } else if ((event.target.value === '10') || (event.target.id === 'd10')) {
    $bigDie.setAttribute('src', 'images/dice/d10-fill.svg');
    $diceBarImg.setAttribute('src', 'images/dice/d10-fill.svg');
    $curDie = '10';
    $rollResult.className = 'diceP hidden';
  } else if ((event.target.value === '8') || (event.target.id === 'd8')) {
    $bigDie.setAttribute('src', 'images/dice/d8-fill.svg');
    $diceBarImg.setAttribute('src', 'images/dice/d8-fill.svg');
    $curDie = '8';
    $rollResult.className = 'diceP hidden';
  } else if ((event.target.value === '6') || (event.target.id === 'd6')) {
    $bigDie.setAttribute('src', 'images/dice/d6-fill.svg');
    $diceBarImg.setAttribute('src', 'images/dice/d6-fill.svg');
    $curDie = '6';
    $rollResult.className = 'diceP hidden';
  } else if ((event.target.value === '4') || (event.target.id === 'd4')) {
    $bigDie.setAttribute('src', 'images/dice/d4-fill.svg');
    $diceBarImg.setAttribute('src', 'images/dice/d4-fill.svg');
    $curDie = '4';
    $rollResult.className = 'diceP hidden';
  }

  $diceMod.value = 0;
  $diceAmt.value = 1;
});

$roll.addEventListener('click', function (event) {
  $rollResult.className = 'diceP';
  diceRoll();
  gifStart();
  setTimeout(gifStop, 1100);
});

function getClassData(name) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://www.dnd5eapi.co/api/classes/${name}`);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    const classObj = xhr.response;
    data.classObjPro = [];
    data.classObjSave = [];
    data.classObjPro.push(classObj.proficiencies);
    data.classObjSave.push(classObj.saving_throws);
    renderClassData();
  });
  xhr.send();
}

function getClassSpellData(name) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://www.dnd5eapi.co/api/classes/${name}/spells/`);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    data.curClass = [];
    const classSpells = xhr.response;
    data.curClass.push(classSpells.results);
    getClassSpellLvlData(currentSpellId);
  });
  xhr.send();
}

function getClassSpellLvlData(level) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://www.dnd5eapi.co/api/spells?level=${level}`);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    const spellsLvl = xhr.response;
    data.curLevel = [];
    data.curLevel.push(spellsLvl.results);
    renderClassSpellPage();
  });
  xhr.send();
}

function getSpellData(level) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://www.dnd5eapi.co/api/spells?level=${level}`);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    const spells = xhr.response;
    data.spellList = [];
    data.spellList.push(spells.results);
    renderSpellData();
  });
  xhr.send();
}

function getSpellDetails(name) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://www.dnd5eapi.co/api/spells/${name}`);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    data.spellDetails = [];
    const spellDetails = xhr.response;
    data.spellDetails.push(spellDetails);
    renderSpellDetails();
  });
  xhr.send();
}

function renderSpellData() {
  for (let z = 0; z < data.spellList[0].length; z++) {
    const $spellLiItem = document.createElement('li');
    $spellLiItem.className = 'pointer';
    $spellLiItem.textContent = data.spellList[0][z].name;
    $spellList.appendChild($spellLiItem);
  }
}

function renderSpellDetails() {
  $spellName.textContent = `Spell Name: ${data.spellDetails[0].name}`;
  $spellLevel.textContent = `Spell Level: ${data.spellDetails[0].level}`;
  $spellSch.textContent = `School: ${data.spellDetails[0].school.name}`;
  $spellCast.textContent = `Casting Time: ${data.spellDetails[0].casting_time}`;
  $spellRng.textContent = `Range: ${data.spellDetails[0].range}`;
  if (data.spellDetails[0].ritual === false) {
    $spellRit.textContent = 'Ritual: Cannot be cast as a ritual';
  } else {
    $spellRit.textContent = 'Ritual: Can be cast as a ritual';
  }
  if (data.spellDetails[0].concentration === false) {
    $spellConc.textContent = 'Concentration: N/A';
  } else {
    $spellConc.textContent = `Concentration: ${data.spellDetails[0].duration}`;
  }
  $spellDesc.innerHTML = '';
  for (let x = 0; x < data.spellDetails[0].desc.length; x++) {
    const $p = document.createElement('p');
    $p.textContent = data.spellDetails[0].desc[x];
    $spellDesc.appendChild($p);
  }
  $spellComp.textContent = 'Components: ';
  for (let y = 0; y < data.spellDetails[0].components.length; y++) {
    const $span = document.createElement('span');
    $span.textContent = data.spellDetails[0].components[y];
    $spellComp.appendChild($span);
  }
}

function renderClassData() {
  for (let x = 0; x < data.classObjPro[0].length; x++) {
    const equipLiItem = document.createElement('li');
    equipLiItem.textContent = data.classObjPro[0][x].name;
    $equipLi.appendChild(equipLiItem);
  }

  for (let y = 0; y < data.classObjSave[0].length; y++) {
    const savingThrowLiItem = document.createElement('li');
    savingThrowLiItem.textContent = data.classObjSave[0][y].name;
    $savingThrowLi.appendChild(savingThrowLiItem);
  }
}

function renderClassSpellPage() {
  if (($classSelect.value === 'barbarian') || ($classSelect.value === 'fighter') || ($classSelect.value === 'monk') || ($classSelect.value === 'rogue')) {
    const $noSpellLiItem = document.createElement('li');
    $noSpellLiItem.textContent = 'This class does not have access to spells.';
    $classSpellList.appendChild($noSpellLiItem);
  } else {
    const classObj = data.curClass[0];
    const levelObj = data.curLevel[0];
    for (let f = 0; f < levelObj.length; f++) {
      for (let s = 0; s < classObj.length; s++) {
        if (levelObj[f].name === classObj[s].name) {
          const liItem = document.createElement('li');
          liItem.className = 'pointer';
          liItem.textContent = levelObj[f].name;
          $classSpellList.appendChild(liItem);
        }
      }
    }
    if ($classSpellList.innerHTML === '') {
      const $noLvlSpellLiItem = document.createElement('li');
      $noLvlSpellLiItem.textContent = 'This class does not have access to spells of this level.';
      $classSpellList.appendChild($noLvlSpellLiItem);
    }
  }
}

function diceRoll() {
  if ((parseInt($diceMod.value) > 0) && (parseInt($diceAmt.value) > 1)) {
    const resultGrp1 = [];
    for (let i = 0; i < parseInt($diceAmt.value); i++) {
      resultGrp1.push(Math.floor(Math.random() * $curDie) + 1);
    }
    const finalResult1 = (resultGrp1.reduce((a, b) => a + b, 0)) + parseInt($diceMod.value);
    $rollResult.textContent = `You rolled a ${$diceAmt.value} D${$curDie} with a modifier of ${$diceMod.value} for ${resultGrp1.join(', ')} with a total of ${finalResult1}`;
  } else if ((parseInt($diceMod.value) >= 1) && (parseInt($diceAmt.value) < 2)) {
    const roll = Math.floor(Math.random() * $curDie) + 1;
    const result = parseInt($diceMod.value) + roll;
    $rollResult.textContent = `You rolled a D${$curDie} with a modifier of ${$diceMod.value} for a total of ${result}`;
  } else if ((parseInt($diceAmt.value) >= 2) && (parseInt($diceMod.value) < 1)) {
    const resultGrp = [];
    for (let y = 0; y < parseInt($diceAmt.value); y++) {
      resultGrp.push(Math.floor(Math.random() * $curDie) + 1);
    }
    const finalResult = resultGrp.reduce((a, b) => a + b, 0);
    $rollResult.textContent = `You rolled a ${$diceAmt.value} D${$curDie} for ${resultGrp.join(', ')} with a total of ${finalResult}`;
  } else {
    const regRoll = Math.floor(Math.random() * $curDie) + 1;
    $rollResult.textContent = `You rolled a D${$curDie} for a total of ${regRoll}`;
  }
}

function gifStart() {
  if ($curDie === '20') {
    $diceGif.setAttribute('src', 'images/animated/D20.gif');
    $diceGif.className = 'animated';
  } else if ($curDie === '12') {
    $diceGif.setAttribute('src', 'images/animated/D12.gif');
    $diceGif.className = 'animated';
  } else if ($curDie === '10') {
    $diceGif.setAttribute('src', 'images/animated/D10.gif');
    $diceGif.className = 'animated';
  } else if ($curDie === '8') {
    $diceGif.setAttribute('src', 'images/animated/D8.gif');
    $diceGif.className = 'animated';
  } else if ($curDie === '6') {
    $diceGif.setAttribute('src', 'images/animated/D6.gif');
    $diceGif.className = 'animated';
  } else if ($curDie === '4') {
    $diceGif.setAttribute('src', 'images/animated/D4.gif');
    $diceGif.className = 'animated';
  }
  $roll.disabled = true;
}

function gifStop() {
  $roll.disabled = false;
  $diceGif.className = 'hidden';
}

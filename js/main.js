var classDesc = [
  {
    name: 'barbarian',
    desc: 'A fierce warrior of primitive background who can enter a battle rage. Barbarians thrive in the wilds of their homelands: the tundra, jungle, or grasslands where their tribes live and hunt. They embrace their animal nature — keen instincts, primal physicality, ferocious rage and come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience.',
    img: 'images/class-icons/barbarian.svg',
    primary: 'Strength'
  },
  {
    name: 'bard',
    desc: 'An inspiring magician whose power echoes the music of creation. The bard is a master of song, speech, and the magic they contain. Bards say that the multiverse was spoken into existence, that the words of the gods gave it shape, and that echoes of these primordial Words of Creation still resound throughout the cosmos. The music of bards is an attempt to snatch and harness those echoes, subtly woven into their spells and powers.',
    img: 'images/class-icons/bard.svg',
    primary: 'Charisma'
  },
  {
    name: 'cleric',
    desc: 'A priestly champion who wields divine magic in service of a higher power. Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. They are no ordinary priest, for a cleric is imbued with divine magic.',
    img: 'images/class-icons/cleric.svg',
    primary: 'Wisdom'
  },
  {
    name: 'druid',
    desc: 'A priest of the Old Faith, wielding the powers of nature — moonlight and plant growth, fire and lightning — and adopting animal forms. Druids revere nature above all, gaining their spells and other magical powers either from the force of nature itself or from a nature deity. Many druids pursue a mystic spirituality of transcendent union with nature rather than devotion to a divine entity, while others serve gods of wild nature, animals, or elemental forces.',
    img: 'images/class-icons/druid.svg',
    primary: 'Wisdom'
  },
  {
    name: 'fighter',
    desc: 'A master of martial combat, skilled with a variety of weapons and armor. Fighters learn the basics of all combat styles. Every fighter can swing an axe, fence with a rapier, wield a longsword or a greatsword, use a bow, and even trap foes in a net with some degree of skill. Likewise, a fighter is adept with shields and every form of armor. Beyond that basic degree of familiarity, each fighter specializes in a certain style of combat. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic. This combination of broad general ability and extensive specialization makes fighters superior combatants on battlefields and in dungeons alike.',
    img: 'images/class-icons/fighter.svg',
    primary: 'Strength or Dexterity'
  },
  {
    name: 'monk',
    desc: 'A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection. Monks make careful study of a magical energy that most monastic traditions call ki. This energy is an element of the magic that suffuses the multiverse — specifically, the element that flows through living bodies. Monks harness this power within themselves to create magical effects and exceed their bodies’ physical capabilities, and some of their special attacks can hinder the flow of ki in their opponents. Using this energy, monks channel uncanny speed and strength into their unarmed strikes.',
    img: 'images/class-icons/monk.svg',
    primary: 'Strength & Wisdom'
  },
  {
    name: 'paladin',
    desc: 'A holy warrior bound to a sacred oath. A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the encroaching darkness, and to hunt the forces of evil wherever they lurk. Different paladins focus on various aspects of the cause of righteousness, but all are bound by the oaths that grant them power to do their sacred work. Although many paladins are devoted to gods of good, a paladin’s power comes as much from a commitment to justice itself as it does from a god.',
    img: 'images/class-icons/paladin.svg',
    primary: 'Strength & Charisma'
  },
  {
    name: 'ranger',
    desc: 'A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization. Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization — humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes.',
    img: 'images/class-icons/ranger.svg',
    primary: 'Dexterity & Wisdom'
  },
  {
    name: 'rogue',
    desc: 'A scoundrel who uses stealth and trickery to overcome obstacles and enemies.Rogues devote as much effort to mastering the use of a variety of skills as they do to perfecting their combat abilities, giving them a broad expertise that few other characters can match. Many rogues focus on stealth and deception, while others refine the skills that help them in a dungeon environment, such as climbing, finding and disarming traps, and opening locks.',
    img: 'images/class-icons/rogue.svg',
    primary: 'Dexterity'
  },
  {
    name: 'sorcerer',
    desc: 'A spellcaster who draws on inherent magic from a gift or bloodline. Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. One can’t study sorcery as one learns a language, any more than one can learn to live a legendary life. No one chooses sorcery; the power chooses the sorcerer.',
    img: 'images/class-icons/sorcerer.svg',
    primary: 'Charisma'
  },
  {
    name: 'warlock',
    desc: 'A wielder of magic that is derived from a bargain with an extraplanar entity. Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular. Drawing on the ancient knowledge of beings such as fey nobles, demons, devils, hags, and alien entities of the Far Realm, warlocks piece together arcane secrets to bolster their own power.',
    img: 'images/class-icons/warlock.svg',
    primary: 'Charisma'
  },
  {
    name: 'wizard',
    desc: 'A scholarly magic-user capable of manipulating the structures of reality. Wild and enigmatic, varied in form and function, the power of magic draws students who seek to master its mysteries. Some aspire to become like the gods, shaping reality itself. Though the casting of a typical spell requires merely the utterance of a few strange words, fleeting gestures, and sometimes a pinch or clump of exotic materials, these surface components barely hint at the expertise attained after years of apprenticeship and countless hours of study.',
    img: 'images/class-icons/wizard.svg',
    primary: 'Intelligence'
  }
];

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

$topNav.addEventListener('click', function (event) {
  if (event.target === $classNavBtn) {
    $classBody.className = 'contentBody';
    $spellBody.className = 'contentBody hidden';
    $spellFilter.className = 'filterBtn hidden';
    $allSpellsBtn.className = 'allSpells picked hidden';
    $classNavBar.className = 'row classNav';
    $diceBody.className = 'contentBody hidden';
  }
  if (event.target === $spellNavBtn) {
    $classBody.className = 'contentBody hidden';
    $spellBody.className = 'contentBody';
    $classSpellBody.className = 'contentBody hidden';
    $classNavBar.className = 'row classNav';
    $spellFilter.className = 'filterBtn';
    $allSpellsBtn.className = 'allSpells picked';
    $diceBody.className = 'contentBody hidden';
  }
  if (event.target === $diceNavBtn) {
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
  for (var i = 0; i < classDesc.length; i++) {
    if (event.target.value === classDesc[i].name) {
      $classIcon.setAttribute('src', classDesc[i].img);
      $descP.textContent = classDesc[i].desc;
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

function getClassData(name) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.dnd5eapi.co/api/classes/' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var classObj = xhr.response;
    for (var x = 0; x < classObj.proficiencies.length; x++) {
      var equipLiItem = document.createElement('li');
      equipLiItem.textContent = classObj.proficiencies[x].name;
      $equipLi.appendChild(equipLiItem);
    }

    for (var y = 0; y < classObj.saving_throws.length; y++) {
      var savingThrowLiItem = document.createElement('li');
      savingThrowLiItem.textContent = classObj.saving_throws[y].name;
      $savingThrowLi.appendChild(savingThrowLiItem);
    }
  });
  xhr.send();
}

$spellRow.addEventListener('click', function (event) {
  $spellList.innerHTML = '';
  getSpellData(event.target.id);
  if (event.target.id === '0') {
    $spellTitle.textContent = 'Cantrips';
  } else {
    $spellTitle.textContent = 'Spell Level: ' + event.target.id;
  }
});

function getSpellData(level) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.dnd5eapi.co/api/spells?level=' + level);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var spells = xhr.response;
    for (var z = 0; z < spells.results.length; z++) {
      var $spellLiItem = document.createElement('li');
      $spellLiItem.textContent = spells.results[z].name;
      $spellList.appendChild($spellLiItem);
    }
  });
  xhr.send();
}

$spellList.addEventListener('click', function (event) {
  $mOverlay.className = 'overlay';
  getSpellDetails(event.target.textContent.split(' ').join('-').toLowerCase());
});

function getSpellDetails(name) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.dnd5eapi.co/api/spells/' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var spellDetails = xhr.response;
    $spellName.textContent = 'Spell Name: ' + spellDetails.name;
    $spellLevel.textContent = 'Spell Level: ' + spellDetails.level;
    $spellSch.textContent = 'School: ' + spellDetails.school.name;
    $spellCast.textContent = 'Casting Time: ' + spellDetails.casting_time;
    $spellRng.textContent = 'Range: ' + spellDetails.range;
    if (spellDetails.ritual === false) {
      $spellRit.textContent = 'Ritual: Cannot be cast as a ritual';
    } else {
      $spellRit.textContent = 'Ritual: Can be cast as a ritual';
    }
    if (spellDetails.concentration === false) {
      $spellConc.textContent = 'Concentration: N/A';
    } else {
      $spellConc.textContent = 'Concentration: ' + spellDetails.duration;
    }
    $spellDesc.innerHTML = '';
    for (var x = 0; x < spellDetails.desc.length; x++) {
      var $p = document.createElement('p');
      $p.textContent = spellDetails.desc[x];
      $spellDesc.appendChild($p);
    }
    $spellComp.textContent = 'Components: ';
    for (var y = 0; y < spellDetails.components.length; y++) {
      var $span = document.createElement('span');
      $span.textContent = spellDetails.components[y];
      $spellComp.appendChild($span);
    }

  });
  xhr.send();
}

var $mOverlay = document.getElementById('overlay');

$mOverlay.addEventListener('click', function (event) {
  if (event.target === $mOverlay) {
    $mOverlay.className = 'overlay hidden';
  }
});

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

function getClassSpellLvlData(level) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.dnd5eapi.co/api/spells?level=' + level);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var spellsLvl = xhr.response;
    data.curLevel = [];
    data.curLevel.push(spellsLvl.results);
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
  });
  xhr.send();
}

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

var $diceBarImg = document.getElementById('diceBar');

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

$roll.addEventListener('click', function (event) {
  diceRoll();
});

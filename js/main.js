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
var $classIcon = document.querySelector('.classIcon');
var $priAbil = document.querySelector('.priAbil');

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

var $spellRow = document.querySelector('#spellRow');
var $spellTitle = document.querySelector('#spellTitle');
var $spellList = document.getElementById('spellList');

$spellRow.addEventListener('click', function (event) {
  $spellList.innerHTML = '';
  getSpellData(event.target.id);
  $spellTitle.textContent = 'Spell Level: ' + event.target.id;
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

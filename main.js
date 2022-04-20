const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "Cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "Dino",
      imageUrl: "https://media.npr.org/assets/img/2020/08/04/gettyimages-166352928-1-1_wide-7ca313d19c03d1447250fc8863b68ec60fa96661-s1100-c50.jpg"
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "Dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "Dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "Cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "Dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "Cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "Dino",
      imageUrl: "https://i.ytimg.com/vi/h-0JhOOvmYM/maxresdefault.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "Cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "Cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "Dino",
      imageUrl: "https://cdnb.artstation.com/p/assets/images/images/016/085/119/large/grant-abbitt-dinosaur-character-sculpting-workflow-part-9-pose.jpg?1550831859"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "Dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "Dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "Cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "Cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "Dino",
      imageUrl: "https://i.ytimg.com/vi/mii8DmZieQ4/maxresdefault.jpg"
    },
    {
      id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "Cat",
      imageUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F06%2F27%2Fwhite-cat-big-eyes-cat-ledge-1127317526-2000.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "Dino",
      imageUrl: "https://i.ytimg.com/vi/JgZO2kVkRAQ/maxresdefault.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "Dog",
      imageUrl: "https://www.rd.com/wp-content/uploads/2017/10/These-Funny-Dog-Videos-Are-the-Break-You-Need-Right-Now_493370860-Jenn_C.jpg?resize=640,426"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "Cat",
      imageUrl: "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-140594401-1-scaled.jpg"
    },
    {
      id: 21,
      name: "Miss Kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "Dino",
      imageUrl: "https://i.ytimg.com/vi/udm4m5OfQZM/maxresdefault.jpg"
    },
    {
      id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "Cat",
      imageUrl: "https://thoughtcatalog.com/wp-content/uploads/2021/07/Cat-Jokes.jpg?w=1920&h=1280&crop=1"
    },
    {
      id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "Dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "Dog",
      imageUrl: "https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1506709524-cola-0247.jpg?crop=1.00xw:0.750xh;0,0.214xh&resize=1200:*"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "Cat",
      imageUrl: "https://variety.com/wp-content/uploads/2013/06/keanu-2.jpg"
    },
    {
      id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "Dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "Dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "Cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "Cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://i.ytimg.com/vi/lPwb_NJjEYs/maxresdefault.jpg"
    }
  ];

const app = document.querySelector("#app");
let domString = "";

pets.forEach((animal) => {
domString += `<div class="card">
<h5 class="card-header">${animal.name}</h5>
<img class="image" src="${animal.imageUrl}">
<div class="card-body">
  <h5 class="card-title"></h5>
  <p class="card-text">${animal.color}</p>
  <p class="card-text">${animal.specialSkill}</p>
</div>
<div class="card-footer">${animal.type}</div>
</div>`
});

app.innerHTML = domString;


//use this logic to get the cards to filter by time with the color at the bottom by pet type

// const renderToDom = (divId, textToRender) => {
//   const selectedDiv = document.querySelector(divId);
//   selectedDiv.innerHTML = textToRender;
// };


// const renderCards = (array) => {
//   let domString = "";
//   for (const member of team) {
//     domString += `<div class="card" style="width: 18rem;">
//     <img src="${member.image}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <p class="card-text">${member.name}</p>
//     </div>
//   </div>`;
//   }

//   renderToDom("#app", domString);
// }

// renderCards(team);


// // function to filter teammates with specific favorite color
// const filter = (array, color) => {
//   const colorArray = [];

//   array.forEach((item) => {
//     if (item.favoriteColor === color) {
//       colorArray.push(item);
//     }
//   });

//   return colorArray;
// }

// // put the team on the DOM
// const teamOnDom = (array) => {
//   let domString = "";

//   for (const item of array) {
//     domString += item.name;
//   }
//   renderToDom("#app", domString);
// }

// teamOnDom(filter(team, "red"));


//document.querySelector{"#catButton"}.addEventListener{"click", showAnimal} 
//document.querySelector{"#dogButton"}.addEventListener{"click", showAnimal} 
//document.querySelector{"#dinoButton"}.addEventListener{"click", showAnimal} 
//document.querySelector{"#allButton"}.addEventListener{"click", showAnimal} 

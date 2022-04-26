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
      type: "Dino",
      imageUrl: "https://i.ytimg.com/vi/lPwb_NJjEYs/maxresdefault.jpg"
    }
  ];



const app = document.querySelector("#app");
let domString = "";



const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};


const cardsOnDom = (taco) => {
  let domString = "";
  taco.forEach((animal) => {
     domString += `<div class="card">
      <h5 class="card-header">${animal.name}</h5>
      <img class="image" src="${animal.imageUrl}">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">${animal.color}</p>
        <p class="card-text">${animal.specialSkill}</p>
      </div>
      <div class="card-footer ${animal.type}-footer">${animal.type}</div>
      </div>`
    });

    renderToDom("#cardContainer", domString);
};




const filter = (evt) => {
  const filterText = evt.target.id

  const result = filterText === "all" ? pets : pets.filter(pet => pet.type.toLowerCase() === filterText)

  const app = document.querySelector("#app");
  let domString = "";

  result.forEach((pet) => {
  domString += `<div class="card">
  <h5 class="card-header">${pet.name}</h5>
  <img class="image" src="${pet.imageUrl}">
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text">${pet.color}</p>
    <p class="card-text">${pet.specialSkill}</p>
  </div>
  <div class="card-footer ${pet.type}-footer">${pet.type}</div>
  </div>`
  });

  renderToDom("#cardContainer", domString);
}





// add new animal 
const addNewAnimal = () => {
  const newToDomString = `   
  <!-- Modal -->
  <div class="modal fade" id="add-animal-modal" tabindex="-1" aria-labelledby="add-animal-modal" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-md-down">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add New</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="modal-body">
        <form>
        <div class="form-floating mb-3">
          <input class="form-control form-control-lg" type="text" placeholder="ID" id="animal-id" aria-label="animal-id" required>
          <label for="animal-id">ID</label>
        </div>
    
        <div class="form-floating mb-3">
          <input class="form-control form-control-lg" type="text" placeholder="Name" id="name" aria-label="name" required>
          <label for="name">Name</label>
        </div>

        <div class="form-floating mb-3">
        <input class="form-control form-control-lg" type="text" placeholder="Color" id="color" aria-label="color" required>
        <label for="color">Color</label>
      </div>

      <div class="form-floating mb-3">
      <input class="form-control form-control-lg" type="text" placeholder="Special Skill" id="specialSkill" aria-label="specialSkill" required>
      <label for="specialSkill">Special Skill</label>
    </div>
    
        <div class="form-floating mb-3">
          <select class="form-select form-control-lg" id="type" aria-label="type" required>
            <option value="">Select a Type</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Dino">Dino</option>
          </select>
          <label for="type">Type</label>
        </div>
        
        <div class="form-floating mb-3">
        <input class="form-control form-control-lg" type="text" placeholder="Image URL" id="imageUrl" aria-label="imageUrl" required>
        <label for="imageUrl">Image URL</label>
      </div>
    
        <button 
          type="submit" 
          class="btn btn-success" 
        >
          Submit
        </button>
      </form>
        </div>
      </div>
    </div>
  </div>
`
renderToDom("#modalContainer", newToDomString);
};



const theButtons = () => {
  let domString = `
  <div class="buttonDiv">
    <button type="button" id="cat" class="btn btn-info">Cats</button>
    <button type="button" id="dog" class="btn btn-success">Dogs</button>
    <button type="button" id="dino" class="btn btn-warning">Dinos</button>
    <button type="button" id="all" class="btn btn-secondary">All</button>
     <button id="add-animal" type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#add-animal-modal">
      Add New
    </button>
  </div>`
  ;
  renderToDom('#filterContainer', domString);
};




const eventListeners = () => {
  
  const formModal = new bootstrap.Modal(document.querySelector('#add-animal-modal'));

  document.querySelector("#cat").addEventListener("click", filter)
  document.querySelector("#dog").addEventListener("click", filter)
  document.querySelector("#dino").addEventListener("click", filter)
  document.querySelector("#all").addEventListener("click", filter)
  

    // this goes in EVERY form submit to prevent page reload
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault(); 

      const newObj = {
        id: document.querySelector("#animal-id").value,
        name: document.querySelector("#name").value,
        color: document.querySelector("#color").value,
        specialSkill: document.querySelector("#specialSkill").value,
        type: document.querySelector("#type").value,
        imageUrl: document.querySelector("#imageUrl").value,
      };
      console.log(newObj);
  
      // push that object to the data array    
      
      pets.push(newObj);
  
      cardsOnDom(pets);
  
     
  
      // Close modal and reset form
      formModal.hide() //closes the modal manually
      form.reset();
    });

   
};  



const startApp = () => {
  addNewAnimal();
  theButtons();
  cardsOnDom(pets);
  eventListeners(); // always last
};

startApp();

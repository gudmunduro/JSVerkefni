(function() {

    var imgs = [
      {
        name: "Rabbit",
        url: "img/p1.jpg",
        tags: "Animators, Illustrators" 
      },
      {
        name: "Sea",
        url: "img/p2.jpg",
        tags: "Photographers, Filmmakers" 
      },
      {
        name: "Deer",
        url: "img/p3.jpg",
        tags: "Photographers, Filmmakers" 
      },
      {
        name: "New York Street Map",
        url: "img/p4.jpg",
        tags: "Designers" 
      },
      {
        name: "Trumpet Playe",
        url: "img/p5.jpg",
        tags: "Photographers, Filmmakers" 
      },
      {
        name: "Typographic Study",
        url: "img/p6.jpg",
        tags: "Designers, Illustrators" 
      },
      {
        name: "Bicycle Japan",
        url: "img/p7.jpg",
        tags: "Photographers" 
      },
      {
        name: "Aqua Logo",
        url: "img/p8.jpg",
        tags: "Designers" 
      },
      {
        name: "Ghost",
        url: "img/p9.jpg",
        tags: "Animators, Illustrators" 
      }
    ]  // Store all images


    var buttons = document.getElementById("buttons"); // Store buttons element
    var gallery = document.getElementById("gallery");
    var tagged = {};                                // Create tagged object
    var currentTag = "";
  
    imgs.forEach(function(imgValues) {                         // Loop through images and
      let img = document.createElement("img");
      img.src = imgValues.url;
      img.alt = imgValues.name;
      img.dataset.tags = imgValues.tags;
      imgValues.element = img;

      gallery.appendChild(imgValues.element);

      var tags = imgValues.tags; // Get this element's tags
  
      if (tags) {                                   // If the element had tags
        tags.split(',').forEach(function(tagName) { // Split at comma and
          if (tagged[tagName] == null) {            // If object doesn't have tag
            tagged[tagName] = [];                   // Add empty array to object
          }
          tagged[tagName].push(img);                // Add the image to the array
        });
      }
    });

    let button = document.createElement("button");
    button.innerText = "Show all";
    button.className = "active";
    button.addEventListener('click', function () {
      currentTag = "";
      for (let child of this.parentElement.children) {
        child.classList.remove('active');
      }
      this.classList.add("active");
      imgs.forEach(function (img) {
        img.element.style.display = "";
      });
    });
    buttons.appendChild(button);

    for (let tagName in tagged) {
        let button = document.createElement("button");
        button.innerText = tagName + ' (' + tagged[tagName].length + ')';
        button.addEventListener('click', function () {
            currentTag = tagName;
            for (let child of this.parentElement.children) {
              child.classList.remove('active');
            }
            this.classList.add("active");
            imgs.forEach(function (img) {
              img.element.style.display = tagged[tagName].includes(img.element) ? "" : "none";
            });
        });
        buttons.appendChild(button);
    }

    document.getElementById("filter-search").addEventListener('input', function (e) {
      let query = this.value.trim().toLowerCase();

      if (e.target.value === "")
      {
        imgs.forEach(function (img) {
          img.element.style.display = img.tags.trim().includes(currentTag) ? "" : "none";
        });
        return;
      }
      imgs.forEach(function (img) {
        img.element.style.display = (img.tags.trim().toLowerCase().includes(query) && img.tags.trim().includes(currentTag)) ? "" : "none";
      });
    });
  
  }());
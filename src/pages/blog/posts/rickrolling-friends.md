---
layout: ../../../layouts/PostLayout.astro
title: Making a website to rickroll my friends
description: One of my best pranks yet! I made a website that rickrolls you when you solve a puzzle.
---
For a long time, I've wanted to use my skills for the greater good, like trolling my friends. Then I had a genius idea: 

> What if there was a website that rickrolled you when you solved a puzzle?

## 🚀 The Plan

I didn't want it to be straightforward. I wanted it to be engaging, like a puzzle that rickrolls you when solved. So, I ended up making...

![Surprise!](https://cdn.hashnode.com/res/hashnode/image/upload/v1674232160555/0475dea6-6e1d-4916-9429-3f732ea3f57b.gif)

## 🛠 The Implementation

### Step 1: Click and Multiply

You click on circles, and the number of circles doubles until there are 2500 circles on your screen. Why 2500? Because they form a 50x50 grid, which I used as my canvas.

```html
<body>
  <div class="box clickable" id="1">
    <div class="circle" id="0"></div>
  </div>
  <h3 id="banner">KEEP TAPPING<br>ON THE CIRCLE</h3>
  <script src="script.js"></script>
</body>
```

### Step 2: Doubling Circles with JavaScript

```javascript
var box = document.getElementsByClassName("clickable")[0];
var count = parseInt(box.id);
const max = 2500;

box.onclick = function () {
  if (count <= max) {
    var num = count == 1 ? 1 : count * 2 > max ? (max - count) : count * 2;
    for (var i = 0; i < num ; i++) { addCircle() }
    box.id = num;
    if (count != 1) {
      box.style.gridTemplateColumns = `repeat(${Math.ceil(Math.sqrt(count))}, 1fr)`;
    }
    if (count >= max) {
      box.style.gridTemplateColumns = "repeat(50, 1fr)";
      box.id="full";
      box.onclick = null;
    }
  }
};
```

### Step 3: Adding Circles

```javascript
function addCircle() {
  var circle = document.createElement('div');
  circle.className = 'circle';
  circle.id = count;
  box.appendChild(circle);
  box.id = count++;
}
```

### Step 4: Rickroll Animation

I used a sprite sheet for the animation. Each frame of Rick Astley dancing is 50x50 pixels, matching my grid.

```javascript
box.onclick = function () {
    var img_obj = {
      'source': null,
      'current': 0,
      'total_frames': 52,
      'width': 50,
      'height': 50
    };

    const img = new Image();
    img.onload = function () { 
      img_obj.source = img;
    }

    img.src = "./data/ricksprite.png";

    const canvas = document.createElement('canvas');
    canvas.width = 50;
    canvas.height = 50;
    var context = canvas.getContext("2d");
    setInterval(function () { rickRoll(canvas, context, 0, 0, img_obj) }, 100);

    var banner = document.getElementById('banner');
    banner.innerHTML = "YOU'VE BEEN RICKROLLED!";
    box.onclick = null; 
  }
};
```

### Step 5: Rendering Animation

```javascript
function rickRoll(canvas, context, x, y, iobj) {
  clearBox();
  if (iobj.source != null){
    context.drawImage(iobj.source, iobj.current * iobj.width, 0, iobj.width, iobj.height, x, y, iobj.width, iobj.height);
  }

  iobj.current = (iobj.current + 1) % iobj.total_frames;

  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      let data = context.getImageData(x, y, 1, 1).data;
      if (data[0] <= 20 && document.getElementById(((y+1) * 50 + x + 1).toString())) {
        document.getElementById(((y+1) * 50 + x + 1).toString()).classList.add("dark");
      }
    }
  }
}
```

### Step 6: Resetting Circles

```javascript
function clearBox() {
  let elems = document.getElementsByClassName("dark");
  for (let i = 0; i < elems.length; i++) {
    elems[i].classList.remove("dark");
  }
}
```

And voila! We have a rickroll in action!

![Rickroll in Action](https://cdn.hashnode.com/res/hashnode/image/upload/v1674232114362/14f826c1-5d82-4d1d-a9dc-4ddc349c0074.gif)

## 🎉 Rickroll Your Friends!

Here's the link: [Rickroll Puzzle](https://the-circle-illusion.netlify.app/)

GitHub Repo: [Rickroll Project](https://github.com/pranshuj73/rickroll)

Thanks for reading! Now go your rickroll your friends. 🍕
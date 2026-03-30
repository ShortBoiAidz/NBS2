// Normal music
function musicScript(playMusic) {
  const randomMusic = Math.random();
  console.log(Math.random());

  if (randomMusic >= 0 && randomMusic < 1 / 21) {
    const headEmpty = new Audio("Head Empty.mp3");
    headEmpty.play();
  } else if (randomMusic >= 1 / 21 && randomMusic < 2 / 21) {
    const ordinaryDay = new Audio("Ordinary Day.mp3");
    ordinaryDay.play();
  } else if (randomMusic >= 2 / 21 && randomMusic < 3 / 21) {
    const meowSynth = new Audio("meowsynth.mp3");
    meowSynth.play();
  } else if (randomMusic >= 3 / 21 && randomMusic < 4 / 21) {
    const fromTheStart = new Audio("FromTheStart.mp3");
    fromTheStart.play();
    fromTheStart.volume = 0.4;
  } else if (randomMusic >= 4 / 21 && randomMusic < 5 / 21) {
    const meow = new Audio("Meow.mp3");
    meow.play();
  } else if (randomMusic >= 5 / 21 && randomMusic < 6 / 21) {
    const cuteCircus = new Audio("Cute Circus.mp3");
    cuteCircus.play();
  } else if (randomMusic >= 6 / 21 && randomMusic < 7 / 21) {
    const relaxedScene = new Audio("Relaxed Scene.mp3");
    relaxedScene.play();
  } else if (randomMusic >= 7 / 21 && randomMusic < 8 / 21) {
    const waiting = new Audio("Waiting.mp3");
    waiting.play();
  } else if (randomMusic >= 8 / 21 && randomMusic < 9 / 21) {
    const computerTalk = new Audio("Computer Talk.mp3");
    computerTalk.play();
  } else if (randomMusic >= 9 / 21 && randomMusic < 10 / 21) {
    const fallingBehind = new Audio("Falling Behind.mp3");
    fallingBehind.play();
  } else if (randomMusic >= 10 / 21 && randomMusic < 11 / 21) {
    const outdoorSong = new Audio("The Outdoor Song.mp3");
    outdoorSong.play();
  } else if (randomMusic >= 11 / 21 && randomMusic < 12 / 21) {
    const letter = new Audio("A Letter.mp3");
    letter.play();
  } else if (randomMusic >= 12 / 21 && randomMusic < 13 / 21) {
    const indoor = new Audio("The Indoor Song.mp3");
    indoor.play();
  } else if (randomMusic >= 13 / 21 && randomMusic < 14 / 21) {
    const wednesday = new Audio("Happy Wednesday.mp3");
    wednesday.play();
  } else if (randomMusic >= 14 / 21 && randomMusic < 15 / 21) {
    const sweetCafe = new Audio("sweet cafe.mp3");
    sweetCafe.play();
  } else if (randomMusic >= 15 / 21 && randomMusic < 16 / 21) {
    const bobaDate = new Audio("boba date.mp3");
    bobaDate.play();
  } else if (randomMusic >= 16 / 21 && randomMusic < 17 / 21) {
    const sunflower = new Audio("sunflower.mp3");
    sunflower.play();
  } else if (randomMusic >= 17 / 21 && randomMusic < 18 / 21) {
    const hotAirBalloon = new Audio("hot air balloon.mp3");
    hotAirBalloon.play();
  } else if (randomMusic >= 18 / 21 && randomMusic < 19 / 21) {
    const loveLetters = new Audio("love letters.mp3");
    loveLetters.play();
  } else if (randomMusic >= 19 / 21 && randomMusic < 20 / 21) {
    const passingThrough = new Audio("Passing Through.mp3");
    passingThrough.play();
  } else if (randomMusic >= 20 / 21 && randomMusic < 1) {
    const valentine = new Audio("Valentine.mp3");
    valentine.play();
  }
}
// Secret Alert
function secretAlert() {
  alert('DM me on Discord "69420666" for a surprise');
}
// Coming Soon
function comingSoon() {
  alert("Coming Soon!");
}
// Gallery Function
function galleryMusic() {
  const randomMusic = Math.random();
  console.log(Math.random());

  if (randomMusic >= 0 && randomMusic < 1 / 21) {
    const relaxedScene = new Audio("Relaxed Scene.mp3");
    relaxedScene.play();
    alert("Playing: Relaxed Scene");
  } else if (randomMusic >= 1 / 21 && randomMusic < 2 / 21) {
    const ordinaryDay = new Audio("Ordinary Day.mp3");
    ordinaryDay.play();
    alert("Playing: Ordinary Day");
  } else if (randomMusic >= 2 / 21 && randomMusic < 3 / 21) {
    const meowSynth = new Audio("meowsynth.mp3");
    meowSynth.play();
    alert("Playing: Meowsynth");
  } else if (randomMusic >= 3 / 21 && randomMusic < 4 / 21) {
    const fromTheStart = new Audio("FromTheStart.mp3");
    alert("Playing: From The Start");
    fromTheStart.play();
    fromTheStart.volume = 0.4;
  } else if (randomMusic >= 4 / 21 && randomMusic < 5 / 21) {
    const meow = new Audio("Meow.mp3");
    meow.play();
    alert("Playing: Meow");
  } else if (randomMusic >= 5 / 21 && randomMusic < 6 / 21) {
    const cuteCircus = new Audio("Cute Circus.mp3");
    cuteCircus.play();
    alert("Playing: Cute Circus");
  } else if (randomMusic >= 6 / 21 && randomMusic < 7 / 21) {
    const headEmpty = new Audio("Head Empty.mp3");
    headEmpty.play();
    alert("Playing: Head Empty");
  } else if (randomMusic >= 7 / 21 && randomMusic < 8 / 21) {
    const waiting = new Audio("Waiting.mp3");
    waiting.play();
    alert("Playing: Waiting");
  } else if (randomMusic >= 8 / 21 && randomMusic < 9 / 21) {
    const computerTalk = new Audio("Computer Talk.mp3");
    computerTalk.play();
    alert("Playing: Computer Talk");
  } else if (randomMusic >= 9 / 21 && randomMusic < 10 / 21) {
    const fallingBehind = new Audio("Falling Behind.mp3");
    fallingBehind.play();
    alert("Playing: Falling Behind");
  } else if (randomMusic >= 10 / 21 && randomMusic < 11 / 21) {
    const outdoorSong = new Audio("The Outdoor Song.mp3");
    outdoorSong.play();
    alert("Playing: The Outdoor Song");
  } else if (randomMusic >= 11 / 21 && randomMusic < 12 / 21) {
    const letter = new Audio("A Letter.mp3");
    letter.play();
    alert("Playing: A Letter");
  } else if (randomMusic >= 12 / 21 && randomMusic < 13 / 21) {
    const indoor = new Audio("The Indoor Song.mp3");
    indoor.play();
    alert("Playing: The Indoor Song");
  } else if (randomMusic >= 13 / 21 && randomMusic < 14 / 21) {
    const wednesday = new Audio("Happy Wednesday.mp3");
    wednesday.play();
    alert("Playing: Happy Wednesday");
  } else if (randomMusic >= 14 / 21 && randomMusic < 15 / 21) {
    const sweetCafe = new Audio("sweet cafe.mp3");
    sweetCafe.play();
    alert("Playing: sweet cafe");
  } else if (randomMusic >= 15 / 21 && randomMusic < 16 / 21) {
    const bobaDate = new Audio("boba date.mp3");
    bobaDate.play();
    alert("Playing: boba date");
  } else if (randomMusic >= 16 / 21 && randomMusic < 17 / 21) {
    const sunflower = new Audio("sunflower.mp3");
    sunflower.play();
    alert("Playing: sunflower");
  } else if (randomMusic >= 17 / 21 && randomMusic < 18 / 21) {
    const hotAirBalloon = new Audio("hot air balloon.mp3");
    hotAirBalloon.play();
    alert("Playing: hot air balloon");
  } else if (randomMusic >= 18 / 21 && randomMusic < 19 / 21) {
    const loveLetters = new Audio("love letters.mp3");
    loveLetters.play();
    alert("Playing: love letters");
  } else if (randomMusic >= 19 / 21 && randomMusic < 20 / 21) {
    const passingThrough = new Audio("Passing Through.mp3");
    passingThrough.play();
    alert("Playing: Passing Through");
  } else if (randomMusic >= 20 / 21 && randomMusic < 1) {
    const valentine = new Audio("Valentine.mp3");
    valentine.play();
    alert("Playing: Valentine");
  }
}

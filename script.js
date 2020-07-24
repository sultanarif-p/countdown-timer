const finalDate = new Date ("Jan 1, 2021 00:00:00").getTime();

timer = () => {
  const now = new Date().getTime();
  const diff  = finalDate - now;
  if (diff < 0){
    clearInterval(x);
    document.getElementById('container').style.display = "none";
    document.getElementById('if-expired').style.display = "block";
  }
 let days = Math.floor(diff/ (1000*60*60*24));
 let hours = Math.floor ((diff % (1000*60*60*24))/(1000*60*60));
 let minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
 let seconds = Math.floor((diff % (1000*60))/ 1000);

 days <=9 ? days = `00${days}` :
    days <=99 ? days = `0${days}`: days;
  hours <=9 ? hours = `0${hours}` : hours;
  minutes <=9 ? minutes = `0${minutes}` : minutes;
  seconds <=9 ? seconds = `0${seconds}` : seconds;

 document.querySelector("#days .box").textContent = days;
 document.querySelector("#hours .box").textContent = hours;
 document.querySelector("#minutes .box").textContent = minutes;
 document.querySelector("#seconds .box").textContent = seconds;
}

const x = setInterval(timer, 1000);
const basedUrl = 'https://api.github.com/users/';

const inputText = document.querySelector('#inputBox');
const btn = document.querySelector('#searchBtn');

const NameCard = document.querySelector('.outputContainer');

const profileImg = document.querySelector('#profileImg');
const proName = document.querySelector('#proName');
const userName = document.querySelector('#userName');
const userBio = document.querySelector('#userBio');

const userRepos = document.querySelector('#userRepos');
const Follower = document.querySelector('#Follower');
const Following = document.querySelector('#Following');

const userLocation = document.querySelector('#userLocation');
const companyName = document.querySelector('#company');

const scanerImg = document.querySelector('#scanerImg');


const scaner = (scanUrl) => {
  scanerImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${scanUrl}`;
  console.log(scanUrl);
}

btn.addEventListener("click", async() => {
  if(inputText.value === "") {
    alert("Please Enter a user name");
  } else {
    NameCard.style.visibility = 'visible'
    NameCard.style.opacity = '1'

    let url = `${basedUrl}${inputText.value}`
    let responce = await fetch(url)
    let data = await responce.json()

    profileImg.src = data.avatar_url
    proName.innerHTML = data.name
    userName.innerHTML = `@${data.login}`
    userBio.innerHTML = data.bio

    userRepos.innerHTML = data.public_repos
    Follower.innerHTML = data.followers
    Following.innerHTML = data.following

    if (data.location == null) {
      userLocation.innerHTML = 'N/A'
    } else {
      userLocation.innerHTML = data.location
    }
    if (data.company == null) {
      companyName.innerHTML = 'N/A'
    } else {
      companyName.innerHTML = data.company
    }
    console.log(data)
    scaner(data.html_url)
  }

})

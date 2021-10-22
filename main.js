const LinksSocialMedia = { // um objeto
  github: 'GabrielleMattos',
  youtube: 'UCLUn5yasuH982icIYte4ucA',
  instagram: 'gabbemattos',
  facebook: 'gabrielle.mattos.355',
  twitter: 'Gabbe_Mattos'
}     

function changeSocialMedia(){ 

  for(let li of socialLinks.children){ 
   const social = li.getAttribute('class')
   li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMedia()

function getGithubProfileInfos(){
const url = `https://api.github.com/users/${LinksSocialMedia.github}`
fetch(url).then(response => response.json())
.then(data => { 
  userName.textContent = data.name
  bio.textContent= data.bio
  github.href = data.html_url
  picture.src = data.avatar_url
  githubName.textContent = data.login
})
}

getGithubProfileInfos()
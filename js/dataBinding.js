import { fetchGitHubProfile } from './gitState.js'

let Username=document.getElementById("Username")
let date=document.getElementById("date")
let bio=document.getElementById("bio")
let Profilelink=document.getElementById("Profilelink")
let repo=document.getElementById("Repo")
let following=document.getElementById("Following")
let followers=document.getElementById("Followers")
let profileimg=document.getElementById("profilePhoto")
let search = document.getElementById('searchUser');
let searchbtn = document.getElementById('searchButton');




function updateall(username){
    

    let biotext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam quasi consectetur deleniti odit non assumenda dolorum saepe odio dicta labore. (No Bio Found!)"
    fetchGitHubProfile(username)
    .then(profile => {

    if(profile.name){
    if(profile.description){biotext=profile.description}
    
      if (profile) {
        Username.textContent=profile.name
        date.textContent=profile.date
        repo.textContent=profile.repositories
        following.textContent=profile.following
        bio.textContent=biotext
        followers.textContent=profile.followers
        profileimg.src=profile.picture
        Profilelink.textContent=profile.user
        Profilelink.href=profile.Profilelink

        }      
    }
    });


}

search.addEventListener('keypress', function(event) {
    if (event.key === 'Enter'){
        let enteredText = search.value;
        updateall(enteredText);
    }
});






function buttonClickHandler() {
    let enteredText = search.value;
   if(!updateall(enteredText));
        
    
    
}
searchbtn.addEventListener('click', buttonClickHandler);




//initial seached user
updateall("yyuvraj54");
import { fetchGitHubProfile } from './gitState.js'

const Username=document.getElementById("Username")
const date=document.getElementById("date")
const bio=document.getElementById("bio")
const Profilelink=document.getElementById("Profilelink")
const repo=document.getElementById("Repo")
const following=document.getElementById("Following")
const followers=document.getElementById("Followers")
const profileimg=document.getElementById("profilePhoto")


let biotext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam quasi consectetur deleniti odit non assumenda dolorum saepe odio dicta labore. (No Bio Found!)"
function updateall(username){
    
    
    fetchGitHubProfile(username)
    .then(profile => {
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
    });


}
updateall("yyuvraj54")
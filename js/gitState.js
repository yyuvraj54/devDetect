export function fetchGitHubProfile(username) {
    const apiUrl = `https://api.github.com/users/${username}`;
  

    return fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        
        
        const profileName = data.name;
        const profilePicture = data.avatar_url;
        const followerCount = data.followers;
        const followingCount = data.following;
        const repoCount = data.public_repos;
        const profileDescription = data.bio;
        const link = data.html_url;
        const username = data.login;
        const ProfileCreatedDate = data.created_at;
  
        const CreatedDateFormat=changeTimeFormat(ProfileCreatedDate)
        return {
          name: profileName,
          picture: profilePicture,
          followers: followerCount,
          following: followingCount,
          repositories: repoCount,
          description: profileDescription,
          Profilelink: link,
          user:username,
          date: CreatedDateFormat

        };
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        return null;
      });
  }
  
  
function showGitData(username){
    fetchGitHubProfile(username)
    .then(profile => {
      if (profile) {
        console.log(`Nickname or Name: ${profile.name}`);
        console.log(`Profile Picture URL: ${profile.picture}`);
        console.log(`Followers: ${profile.followers}`);
        console.log(`Following: ${profile.following}`);
        console.log(`Repositories: ${profile.repositories}`);
        console.log(`Description: ${profile.description}`);
      }
    });
  }
  
function changeTimeFormat(isoTimestamp){
const date = new Date(isoTimestamp);
const year = date.getFullYear();
const month = ('0' + (date.getMonth() + 1)).slice(-2); // Month is zero-indexed
const day = ('0' + date.getDate()).slice(-2);
const hours = ('0' + date.getHours()).slice(-2);
const minutes = ('0' + date.getMinutes()).slice(-2);
const seconds = ('0' + date.getSeconds()).slice(-2);

return  `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
  
  
const profilePic = document.querySelector('.img');
const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}`);
    const data = await api_call.json();
    return{data};
};

const showData = () => {
   
    fetchUsers('kelison237').then((res) => {
        console.log(res.data);

        profilePic.src= res.data.avatar_url;
       
    })
}
showData();
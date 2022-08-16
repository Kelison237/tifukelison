const profilePic = document.querySelector('.img');
const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}`);

    const data = await api_call.json();
    return{data};
};
const fetchRepo = async (user)=> {
    const api_cal = await fetch(`https://api.github.com/users/tifukelison/reposs`)
}


const showData = () => {
   
    fetchUsers('tifukelison').then((res) => {
        console.log(res.data);

        profilePic.src= res.data.avatar_url;
       
    })
}
showData();
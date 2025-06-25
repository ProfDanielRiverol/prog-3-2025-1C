const API_URL = "http://localhost:3001/api/users/";

document
  .getElementById("createForm")
  .addEventListener("submit", async (evn) => {
    evn.preventDefault();

    const form = evn.target;

    const data = new FormData(form);
    
    try {
        const res = await fetch(API_URL)



    } catch (error) {
        
    }

});

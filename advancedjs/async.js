function fetchdata(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({name :"chaicode",url:"https://chaicode.com"});
    }, 3000);
  });
}

async function getuserdata() {
  try {
    console.log("Fetching user data...");
    const userdata = await fetchdata();
    console.log("User data fetched successfully");

    console.log("User Data:", userdata);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

getuserdata();
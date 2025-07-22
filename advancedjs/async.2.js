function fetchdata(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post data fetched");
    }, 2000);
  });
}

function fetchdataCommentdata(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched.");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching blog data...");
    const blogData = await fetchdata();
    const commentData = await fetchdataCommentdata();
    console.log(blogData);
    console.log(commentData);
    
    
    console.log("fecthed completed");
    
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  }
  getBlogData();
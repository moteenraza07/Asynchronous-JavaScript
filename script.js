// create a delay function
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// // create a getprofile function with 1000ms delay
// // modified to randomly fail
// async function getProfile() {
//   console.log("Getting Profile details");
//   await delay(1000);

//   return new Promise((resolve, reject) => {
//     const success = Math.random() > 0.7;
//     if (success) {
//       const profile = "moteen";
//       resolve(profile);
//     } else {
//       reject("did not get profile");
//     }
//   });
// }

// getProfile()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// //create a getPost function with 2500ms delay
// // modified function to randomly make it fail
// async function getPost() {
//   console.log("Getting post details please wait");
//   await delay(2500);

//   return new Promise((resolve, reject) => {
//     const success = Math.random() > 0.4;
//     if (success) {
//       const post = "Weather is clear";
//       resolve(post);
//     } else {
//       reject("Did not get post");
//     }
//   });
// }

// getPost()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // create a getComment function with 4000s delay
// // modified to randomly make the comment fetch fail
// async function getComment() {
//   console.log("Getting comments please wait");
//   await delay(4000);
//   return new Promise((resolve, reject) => {
//     const success = Math.random() < 0.9;
//     if (success) {
//       const comment = "Thanks for letting me know what the weather is today";
//       resolve(comment);
//     } else {
//       reject("Did not fetch comment");
//     }
//   });
// }

// getComment()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // create a function that retreives information in sequence
// function dataSeqeunce() {
//   console.log("Will fetch sequentially");

//   getProfile()
//     .then((profile) => {
//       console.log("username:", profile);
//       return getPost();
//     })
//     .then((posts) => {
//       console.log("Posts", posts);
//       return getComment();
//     })
//     .then((comment) => {
//       console.log("Comment:", comment);
//       console.log("Sequence is complete");
//     })
//     .catch((error) => {
//       console.error("There is an error in the s", error);
//     });
// }

// // call the sequence function
// dataSeqeunce();

// // create a function that retreives all data at the same time
// function dataParallel() {
//   console.log("will fetch parallel way");

//   const profilePromise = getProfile();
//   const postPromise = getPost();
//   const commentPromise = getComment();

//   Promise.all([profilePromise, postPromise, commentPromise])
//     .then(([profile, posts, comment]) => {
//       console.log("fetched in parallel", profile, posts, comment);
//     })
//     .catch((error) => {
//       console.error("there is an error in the parallel fetch", error);
//     });
// }

// // call parallel function
// dataParallel();

// Rewrite each function with async and await

// use async function and try catch to handle profile errors
async function fetchProfile() {
  try {
    console.log("Getting user profile");
    await delay(1000);
    const profileDetail = { age: 30, name: "moteen" };
    console.log("Here is user profile details", profileDetail);
    return profileDetail;
  } catch (error) {
    console.log("Did not retreive user info:", error);
  }
}
// call the profile function
fetchProfile();

// use async function and try catch to handle posts errors
async function fetchPost() {
  try {
    console.log("Getting posts info..");
    await delay(3500);
    const postDetail = "It is raining now";
    console.log("The current weather is", postDetail);
    return postDetail;
  } catch (error) {
    console.log("Did not get post info:", error);
  }
}

// call the post function
fetchPost();

// use async function and try catch to handle comment errors
async function fetchComment() {
  try {
    console.log("Getting comment info..");
    await delay(5000);
    const commentDetail = "Guess i have to bring an umbrella";
    console.log("This is what moteen has said", commentDetail);
    return commentDetail;
  } catch (error) {
    console.log("Did not get comment details", error);
  }
}
// call the comment function
fetchComment();

// create a function for sequence
async function getUserConent() {
  try {
    // grabbing user detail first
    console.log("fetching user detail");
    const profile = await fetchProfile();
    // gets the data
    console.log("Profile data retreived", profile);
    // fetching post detail second
    console.log("Fetching post details");
    const postDetail = await fetchPost();
    // gets post data
    console.log("Post data retreived", postDetail);
    // fetching comment detail third
    console.log("Fetching comment detail");
    const commentDetail = await fetchComment();
    // get comment data
    console.log("Comment data retreived", commentDetail);
    console.log("All data is fetched");
  } catch (error) {
    console.log("This sequence did not work", error);
  }
}
getUserConent();

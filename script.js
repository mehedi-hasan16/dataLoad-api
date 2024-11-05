const url = "https://jsonplaceholder.typicode.com/posts";

function loadPost() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const postContainer = document.getElementById("post-container");
      for (const singlePost of data) {
        console.log(singlePost);
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <div>Id: ${singlePost.id} </div>
            <div>Title: ${singlePost.title} </div>
            <div>Body: ${singlePost.body} </div>
            `;
        postContainer.appendChild(div);
      }
    });
}

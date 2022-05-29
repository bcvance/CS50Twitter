document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (event) => {
        // if user clicked on like icon
        if (event.target.className === "like-icon"){
            let thumbs_up;
            let numLikes;
            let isLiked;
            let parent = event.target.parentNode;
            let children = parent.childNodes;
            // iterating through child nodes and saving their elements in variables
            for (let i=0; i<children.length; i++){
                if (children[i].tagName == "img"){
                    thumbs_up = children[i];
                }
                else if (children[i].className == "num-likes") {
                    numLikes = children[i];
                }
                else if (children[i].className == "is-liked"){
                    isLiked = children[i];
                }
            }
            // if post not liked, make appropriate changes to HTML
            if (isLiked.innerHTML === "Not Liked"){
                numLikes.innerHTML ++;
                isLiked.innerHTML = "Liked";
            }
            // and vice versa if it is liked
            else {
                numLikes.innerHTML --;
                isLiked.innerHTML = "Not Liked";
            }
            // request to url which triggers like function in views.py
            const postId = parent.dataset.postId;
            fetch(`/like/${postId}`)
        }
    })
    document.getElementById("followers").onclick = () => {
        document.getElementById("followers-section").style.display = "block";
        document.getElementById("following-section").style.display = "none";
        document.getElementById("liked-section").style.display = "none";
    }
    document.getElementById("following").onclick = () => {
        document.getElementById("followers-section").style.display = "none";
        document.getElementById("following-section").style.display = "block";
        document.getElementById("liked-section").style.display = "none";
    }
    document.getElementById("liked").onclick = () => {
        document.getElementById("followers-section").style.display = "none";
        document.getElementById("following-section").style.display = "none";
        document.getElementById("liked-section").style.display = "block";
    }
})
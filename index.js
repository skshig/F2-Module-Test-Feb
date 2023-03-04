//this function opens a modal upon clicking Create New Psot button
function openForm(){
    let openform = document.getElementById('modal-container').style.display = "flex";
    // console.log("hello");
}
//this function closes the modal upon clicking x button
function closeForm (){
    let closeform = document.getElementById('modal-container').style.display = "none";
}
function publishBlog(){
    let blog_title = document.getElementById('new-blog-heading').value;
    let blog_description = document.getElementById('new-blog-description').value;
    console.log(blog_title);
    console.log(blog_description);
    let blog_list = document.getElementById('list-item');
    let new_blog = document.createElement('li');
    new_blog.innerHTML = `<div class="blog-post" id="blog-post"><h4>${blog_title}</h4><br>
    <p>${blog_description}</p>
    <span>
        <label for="edit-button"></label>
        <input type="button" name="edit-button" id="edit-button" value="Edit Post">
    <span>
        <label for="delete-button"></label>
        <input type="button" name="delete-button" id="delete-button" value="Delete Post"></span>
    </span>
    <span><h5>Created at: </h5></span></div>`
    blog_list.appendChild(new_blog);
    closeForm();
}

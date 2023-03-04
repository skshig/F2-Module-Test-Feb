//this function opens a modal upon clicking Create New Psot button
function openForm() {
    let openform = document.getElementById('modal-container').style.display = "flex";
    // console.log("hello");
}
//this function closes the modal upon clicking x button
function closeForm() {
    let closeform = document.getElementById('modal-container').style.display = "none";
}
//by clicking Publsih Post in modal the blog should be displayed on the screen
function publishBlog() {
    var liList = document.getElementById('list-item').getElementsByTagName("li");

    var post_index = liList.length + 1
    let blog_title = document.getElementById('new-blog-heading').value;
    let blog_description = document.getElementById('new-blog-description').value;
    console.log(blog_title);
    console.log(blog_description);
    let blog_list = document.getElementById('list-item');
    let new_blog = document.createElement('li');
    new_blog.innerHTML = `<div class="blog-post" id="blog-post-${post_index}"><h4 id = "blog-title-${post_index}">${blog_title}</h4><br>
    <p id = "blog-content-${post_index}">${blog_description}</p>
    <span>
        <label for="edit-button"></label>
        <input type="button" name="edit-button" class="edit-button" id="${post_index}" onclick = 'editPost(event)' value="Edit Post">
    <span>
        <label for="delete-button"></label>
        <input type="button" name="delete-button" class="delete-button" id="delete-button" onclick = 'deletePost()' value="Delete Post"></span>
    </span>
    <span id = "time-stamp">Created at: ${createdAt()}</span>
    </div>`
    blog_list.appendChild(new_blog);
    document.getElementById('new-blog-heading').value = "";
    document.getElementById('new-blog-description').value = "";
    closeForm();
}
//fetching date-time at which a blog was published
function createdAt() {
    const blog_timestamp = new Date().toLocaleString();
    return blog_timestamp;
}
//edit a published blog
function editPost(x) {
    let element_index = x.target.id;
    console.log(element_index);
    var edit_title = document.getElementById(`blog-title-${element_index}`).textContent;
    var desc = document.getElementById(`blog-content-${element_index}`).textContent;
    editForm(edit_title, desc, element_index);
    console.log(edit_title);
    console.log(desc);

}

function editForm(edit_title, desc, element_index) {
    let open_edit_form = document.getElementById('edit-modal-container').style.display = "flex";
    document.getElementById('edit-description').value = desc;
    document.getElementById('edit-heading').value = edit_title;
    document.getElementById('edit-index').value = element_index;
}

function closeEditForm() {
    let closeform = document.getElementById('edit-modal-container').style.display = "none";
}
//delete a published blog
function deletePost() {
    let delete_post = document.getElementById('blog-post').style.display = "none";
    return delete_post;
}

function editFormSavePost() {
    let edit_post_title = document.getElementById('edit-heading').value;
    let edit_post_desc = document.getElementById('edit-description').value;
    let post_index = document.getElementById('edit-index').value;
    document.getElementById(`blog-title-${post_index}`).textContent = edit_post_title;
    document.getElementById(`blog-content-${post_index}`).textContent = edit_post_desc;
    closeEditForm();
}

function editFormDeletePost() {
    console.log("Inside Delete Post Flow");
    let post_index = document.getElementById('edit-index').value;
    console.log(post_index);
    document.getElementById(`blog-post-${post_index}`).style.display = "none";
    closeEditForm();
}
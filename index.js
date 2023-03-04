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
    // let publishBlog = document.getElementById('blog-post').style.display = "block";
    let blog_title = document.getElementById('nnew-blog-heading').value;
    let blog_description = document.getElementById('new-blog-description').value;
    console.log(blog_title);
    console.log(blog_description);
}
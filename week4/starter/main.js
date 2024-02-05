 /*** If...else conditional statements ***/

// 1. Declare two variables: 'userName' with your username ; and 'isLoggedIn'with true as value.
const userName = 'Lu'
const isLoggedIn = true


// 2. Display the message 'Welcome, <username>' only if the user is logged in; output the message using the HTML element with id 'loginMessage'
const $loginMessage = document.getElementById('loginMessage')

if (isLoggedIn === true){
    $loginMessage.textContent = `Welcome, ${userName}`
}


// 3. Display a different message when the user is not logged in.
else if (isLoggedIn === false){
    $loginMessage.textContent = `Welcome, guest`
}


/*** Switch conditional statements ***/
// 1. Declare the following variables
    //'$loginStatus' with the reference to the DOM element that contains the ID 'loginStatus'
    //'loginCase' with 0 as value
    //'loginIcon' without any value assigned to it.
const $loginStatus = document.getElementById("loginStatus")
const loginCase = 0
let loginIcon

// 2. Create a switch statement to compare values from 0 to 3

    //Assign the string value representing the name of an image to the 'loginIcon' variable for each case.
    // loginIcon = 'pass.png' 
    // loginIcon = 'info.png' 
    // loginIcon = 'warning.png' 
    // loginIcon = 'error.png' 
    // loginIcon = 'unknown.png'
switch (loginCase){
    case 0 :
        loginIcon = 'pass.png'
        break
    case 1 :
        loginIcon = 'info.png'
        break
    case 3 :
        loginIcon = 'warning.png'
        break
    case 2 :
        loginIcon = 'error.png'
        break
    default :
        loginIcon = 'unknown.png'
}


// 2. Reasign the 'source' attribute, of the HTML element with the id 'loginStatus', use the concatenation of the string 'img/' and the variable 'loginIcon'
$loginStatus.src = `img/${loginIcon}`


/*** Conditional statement - Practice  ***/

//Replicate toggle functionality using conditional statements
// 1- Target the element with the id 'hero'
const $hero = document.getElementById('hero')

function toggleDarkMode(){
    //2- Conditional statement here. Use the classList methods
    if($hero.classList.contains('text-bg-dark')){
        $hero.classList.remove('text-bg-dark')
    } else {
        $hero.classList.add('text-bg-dark')
    }
}

//Display posts

// 1. Create the variables $firstPost, $secondPost and $blogsContainer with a reference to the HTML elements with the ID 'firstPost', 'secondPost' and 'blogsContainer'.
const $firstPost = document.getElementById('firstpost')
const $secondPost = document.getElementById('secondpost')
const $blogsContainer = document.getElementById('blogsContainer')

function displayBlog(category){
// A. Through conditional statement 
    // if ( category.textContent === "Web Dev I") {
    //      $firstPost.innerHTML = wdI_blog_html
    // } else if ( category.textContent === "Web Dev II" ) {
    //      $firstPost.innerHTML = wdII_blog_html
    // } else {
    //      $firstPost.innerHTML = wdI_blog_html
    //      $firstPost.innerHTML = wdII_blog_html
    // }
    // Define a fallback or default action and print both posts 

// B. Through Switch statement
switch (category.textContent){
    case "Web Dev I" :
        $firstPost.innerHTML = wdI_blog_html
        break
    case "WebDev II" :
        $secondPost.innerHTML = wdII_blog_html
        break
    case "All" :
        $firstPost.innerHTML = wdI_blog_html
        $secondPost.innerHTML = wdII_blog_html
        break
}
}

/*** Functions ***/

// 1. String functions
console.log(userName.toUpperCase())

// 2. Write a function that prints in the console the parameters 'firstName' and 'lastName'
function printName(firstName, lastName){
    console.log(firstName + ' ' + lastName)
}

printName('Lu','Yang')

// 3.Write a function that prints a new blog in the document
//Variable declaration
let blogIndex = 0
let blogCategory 
let blogTitle 

// Declare the function 'addPost' that receives two parameters. Those parameters are going to be used to displaye the blog's title and category.


    /*use this to insert the post*/
    // $blogsContainer.innerHTML += 
    // `<div  class="col-md-6">
    //     <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
    //         <div class="col p-4 d-flex flex-column position-static">
    //             <strong class="d-inline-block mb-2 text-primary">${}</strong>
    //             <h3 class="mb-0">${}</h3>
    //             <div class="mb-1 text-muted">Nov 12</div>
    //             <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
    //             <a href="#" class="stretched-link">Continue reading</a>
    //         </div>
    //         <div class="col-auto d-none d-lg-block">
    //             <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
    //         </div>
    //     </div>
    // </div>`


// Retrieve the element that allows the user to print a new blog and save it in $addPostBtn


//addEventListener() is used to listen for an event (click) on $addPostBtn, and when it occurs... execute the anonymous function
$addPostBtn.addEventListener('click', function () {
    //Body of the anonymous function
    if(blogIndex < 4 ){
        blogCategory = blogs[blogIndex].category
        blogTitle = blogs[blogIndex].title

        // call the function to insert the HTML blog code
        addPost(blogCategory, blogTitle)
    }
    //Add a conditional statement to print something different when there is no more blogs to show. Note: this only works with 4 blogs in the array, later we will use a more dynamic approach

    // shorthand to add 1 to the index variable
    blogIndex++
})

// * Define Global Variables
// * first i am seeking to creat a dynamically navigation bar .. this navigation bar should contain the number of section 
// and add the new section if we add a new one .. so we need to know the number of sectins 

const sections = Array.from(document.querySelectorAll('section')) ; 
// we already have an empty unorder list .. we only need to add the list content on it 
// first I need to make and variable and asssigne it to the unorderlist 
const menuContent = document.getElementById('navbar__list')

// end of global variables 
// start of functions that help me to make a dynamic navifation bar 

// I need a function to add section names and links to the empty unorder list 
//  we will get the name from data-nav attribute ( section 1) .. and the link from the id 

function createListContent (){
    for (section of sections) {
        sectionName = section.getAttribute('data-nav');
        sectionLink = section.getAttribute('id');
        // creating the list items of the sections in the navigtion bar
        listContent = document.createElement('li');
        // add the item's text and link to our new add list element 
        listContent.innerHTML = `<a class= 'menu__link' href = '#${sectionLink}'> ${sectionName}<a/> ` ; 
        // and now we can add our items to our unorder list .. on another word to the navigation bar 
        menuContent.appendChild(listContent)

    }
}

// try to determine if the section in the area we view or not 

function sectionInView (element) {
    let sectionView = element.getBoundingClientRect();
    return (sectionView.top >= 0)

}

// give the section on view a highlight .. style of the class your-active-class .. if not in view remove your-active-class
function highlightActiveClass (){

    for (section of sections){
        if (sectionInView(section)){
            if (!section.classList.contain('your-active-class'))
            {section.classList.add('your-active-class')}
        }else {section.classList.add('your-active-class')}
    }
}

// end of function 

createListContent () ; 

document.addEventListener('scroll' , highlightActiveClass)

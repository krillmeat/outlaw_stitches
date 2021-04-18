let workSelector;

window.onload = function(){
    init();
}

function init(){
    console.log("%cInitializing...","color:#999");

    workSelector = new WORK_SELECTOR(document.querySelectorAll("button.work-button"),
                                      document.getElementById("gallery"),
                                      document.querySelector(".gallery-work-wrap"));

    let shortStoryButtons = document.querySelectorAll(".work-item button");

    for(let i = 0; i < shortStoryButtons.length; i++){
      shortStoryButtons[i].addEventListener("click",showShortStory);
    }
}

function showShortStory(e){
  let t = e.currentTarget;
  let workItem = t.parentElement.parentElement;
  let shortStoryWrap = workItem.querySelector(".short-story");

  window.scrollTo(0, document.getElementById("gallery").getBoundingClientRect().top + window.scrollY);
  document.body.style.height= "100vh";
  document.body.style.overflow = "hidden";
  workItem.dataset.story = 'show';
}
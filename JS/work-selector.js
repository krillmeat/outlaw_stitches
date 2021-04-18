class WORK_SELECTOR{
  constructor(buttonElems, galleryElem, galleryItemWrapElem){
    this._buttonElems = buttonElems;      // Node List of the Buttons that trigger the Swap
    this._galleryElem = galleryElem;
    this._galleryItemWrapElem = galleryItemWrapElem;

    this.attachEventToButtons(this._buttonElems);
  }

  attachEventToButtons(buttonElems){
    let obj = this;
    for(let i = 0; i < buttonElems.length; i++){
      buttonElems[i].addEventListener("click",obj.swap.bind(obj));
    }
  }

  swap(e){
    let obj = this;
    let t = e.currentTarget;

    let currentButton = document.querySelector("nav.work-selector button[data-state='active']");
    let currentItem = obj._galleryItemWrapElem.querySelector(".work-item[data-state='active']");

    window.scrollTo(0, this._galleryElem.getBoundingClientRect().top + window.scrollY);

    // FIRST LOAD
    if(document.body.dataset.state !== 'work'){
      document.body.dataset.state = 'work';
  
      setTimeout(function(){
        obj._galleryElem.querySelector(".gallery-button-wrap").style.display = "none";
        obj._galleryItemWrapElem.style.display = "flex";
        if(currentItem) currentItem.dataset.state = "";
        obj._galleryItemWrapElem.querySelector(`.work-item[data-label='${t.dataset.label}']`).dataset.state = 'active';
      },600);
  
      setTimeout(function(){
        obj._galleryItemWrapElem.style.opacity = 1;
      },640);
    } else{ // SECOND LOAD
      if(currentItem) currentItem.dataset.state = "";
      obj._galleryItemWrapElem.querySelector(`.work-item[data-label='${t.dataset.label}']`).dataset.state = 'active';
    }

    if(currentButton) currentButton.dataset.state = '';
      // TODO - better way to do this...
      document.querySelector(`nav.work-selector button[data-label='${t.dataset.label}']`).dataset.state = 'active';
  }
}
const animItems = document.querySelectorAll('.anim-new-1 , .anim-new-2 , .anim-new-3, .anim-present-img, .anim-present-title, .anim-present-description, .anim-present-details, .anim-present-link, .anim-footer-title, .anim-footer-name, .anim-footer-phone, .anim-footer-button' )

if (animItems.length > 0) {
    function animOnScroll() {
        window.addEventListener('scroll', animOnScroll);
      for (let index = 0; index < animItems.length; index++) {
        let animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;


        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - animItemHeight / animStart;
        }

        if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('active') 
        } else {
            if(!animItem.classList.contains('anim-no-hide')) {
                animItem.classList.remove('active')
            }
        }
        
      }  
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    animOnScroll();
}
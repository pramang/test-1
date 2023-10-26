// 전체 페이지 공통 
const get  = target  => document.querySelector(target);
const getAll  = target  => document.querySelectorAll(target);


const navi = () => {
    let $gnbli = getAll('#header .nav .gnb > li');  
    let $header = get('#header');
    console.log( $gnbli)  
    $gnbli.forEach( (item, idx )=> {
        item.addEventListener('mouseenter', e => {    
                 
            $header.classList.add('on');
        })        
    })
    $header.addEventListener('mouseleave', e => {                                        
        $header.classList.remove('on');
    })  
}//end nav


const familySite = () => {
   
}//end familySite


const comInit = ()  => {
    const loadPage  = (page, tag ) => {
        fetch(page)
        .then(res => {
        return res.text()
        })
        .then(data => {
            get( tag ).innerHTML = data;
            navi();
            familySite();
        });
    }
    loadPage("page/header.html", 'header');
    loadPage("page/footer.html", 'footer');    
}

;( () => {
    comInit();    
})();
// Carousel
const blogInfo = [
  
  ];


const petsCardBox = document.querySelector('.pets-card-box');
const nextCard = document.querySelector('.next');
const prevCard = document.querySelector('.prev');
const modal = document.querySelector('.modal');
const modalBox = document.querySelector('.modal-pets-box');


function createPetsCard(name, img, description, type, breed, age, inoculations, diseases, parasites) {
    const petsImg = document.createElement('img');
    petsImg.alt = name;
    petsImg.src = img;
    petsImg.classList.add('pets-img');

    const petsName = document.createElement('div');
    petsName.innerText = name;
    petsName.classList.add('pets-name');

    const petsCardBtn = document.createElement('button');
    petsCardBtn.classList.add('pets-card-btn');
    petsCardBtn.textContent = 'Learn more';

    const petsCard = document.createElement('div');
    petsCard.classList.add('pets-card');
    petsCard.dataset.card = name;
    petsCard.append(petsImg, petsName, petsCardBtn);

    petsCard.addEventListener('click', ()=>{
        modalBox.innerHTML = '';
        const modalFoto = document.createElement('div');
        modalFoto.classList.add('modal-foto');
        const modalImg = document.createElement('img');
        modalImg.src = img;
        modalImg.alt = name;
        modalFoto.append(modalImg);

        const petsInfoBox = document.createElement('div');
        petsInfoBox.classList.add('pets-info-box');

        const modalTitle = document.createElement('div');
        modalTitle.classList.add('modal-title');
        modalTitle.textContent = name;

        const modalSubtitle = document.createElement('div');
        modalSubtitle.classList.add('modal-subtitle');
        modalSubtitle.textContent = `${type} - ${breed}`;

        const modalText = document.createElement('p');
        modalText.classList.add('modal-text');
        modalText.textContent = description;
        const modalInfoMore = document.createElement('ul');
        modalInfoMore.classList.add('modal-info-more');
        modalInfoMore.innerHTML = `
            <li><span>Age:</span> ${age}</li>
            <li><span>Inoculations: </span>${inoculations}</li>
            <li><span>Diseases: </span>${diseases}</li>
            <li><span>Parasites: </span>${parasites}</li>`;
        
        petsInfoBox.append(modalTitle, modalSubtitle, modalText, modalInfoMore);

        const modalClose = document.createElement('div');
        modalClose.classList.add('modal-close');

        modalBox.append(modalFoto, petsInfoBox, modalClose);

        modal.classList.add('modal-active');
        document.body.style.overflow = 'hidden';

        modalClose.addEventListener('click', ()=>{
            modal.classList.remove('modal-active');
            document.body.style.overflow = '';
        });
        modal.addEventListener('mousemove', (e)=>{
            if(e.target.dataset.modal === 'close'){
                modalClose.style.backgroundColor = '#FDDCC4';
            }else{
                modalClose.style.backgroundColor = '';
            }
        });
    });
    petsCardBox.append(petsCard);
}
modal.addEventListener('click', (e)=>{
    const target = e.target;
    if(target.dataset.modal === 'close'){
        modal.classList.remove('modal-active');
        document.body.style.overflow = '';
    }
});


let arr = [];


function pastCardHTML(){
    if(screnWidth>=1280){
        petsCardBox.innerHTML = '';
        for(let i=0; i<3; i++){
            const random = Math.floor(Math.random()*8);
            if(!arr.includes(random)){
                arr.push(random);
                createPetsCard(petsInfo[random].name, 
                    petsInfo[random].img, 
                    petsInfo[random].description,
                    petsInfo[random].type,
                    petsInfo[random].breed,
                    petsInfo[random].age,
                    petsInfo[random].inoculations,
                    petsInfo[random].diseases,
                    petsInfo[random].parasites
                    );
            }else{
                i--;
            }
        }
    }else if(screnWidth>=768){
        petsCardBox.innerHTML = '';
        for(let i=0; i<2; i++){
            const random = Math.floor(Math.random()*8);
            if(!arr.includes(random)){
                arr.push(random);
                createPetsCard(petsInfo[random].name, 
                    petsInfo[random].img, 
                    petsInfo[random].description,
                    petsInfo[random].type,
                    petsInfo[random].breed,
                    petsInfo[random].age,
                    petsInfo[random].inoculations,
                    petsInfo[random].diseases,
                    petsInfo[random].parasites
                    );
            }else{
                i--;
            }
        }
    }else{
        petsCardBox.innerHTML = '';
        for(let i=0; i<1; i++){
            const random = Math.floor(Math.random()*8);
            if(!arr.includes(random)){
                arr.push(random);
                createPetsCard(petsInfo[random].name, 
                    petsInfo[random].img, 
                    petsInfo[random].description,
                    petsInfo[random].type,
                    petsInfo[random].breed,
                    petsInfo[random].age,
                    petsInfo[random].inoculations,
                    petsInfo[random].diseases,
                    petsInfo[random].parasites
                    );
            }else{
                i--;
            }
        }
    }
}
pastCardHTML();

nextCard.addEventListener('click', ()=>{
    pastCardHTML();
    
    if(screnWidth >= 1280 && arr.length>=6){
        arr.splice(0, 3);
    }else if(screnWidth>=768 && arr.length>=4){
        arr.splice(0, 2);
    }else{
        arr.splice(0, 1);
    }
    const petsCardBtnNext = document.querySelectorAll('.pets-card');
    petsCardBtnNext.forEach(item=>item.classList.add('slideInRight'));
});
prevCard.addEventListener('click', ()=>{
    pastCardHTML();
    if(screnWidth>= 1280 && arr.length>=6){
        arr.splice(0, 3);
    }else if(screnWidth>=768 && arr.length>=4){
        arr.splice(0, 2);
    }else{
        arr.splice(0, 1);
    }
    const petsCardBtnPrev = document.querySelectorAll('.pets-card');
    petsCardBtnPrev.forEach((card)=>card.classList.add('slideInLeft'));
    
});


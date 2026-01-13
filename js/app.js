const searchModal = document.getElementById("searchModal");
const menuModal = document.getElementById("menuModal");

const slideContainer = document.querySelector(".icon-card-wrapper");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slides = document.querySelectorAll(".icon-card");
let index = 0;

//슬라이드 관련
function moveSlide() {
    const slideWidth = slides[0].offsetWidth+20;//슬라이드 영역 크기
    slideContainer.scrollLeft = slideWidth * index;
}
//다음 버튼 클릭시
nextBtn.addEventListener('click', ()=>{
    if(index < slides.length +1){
        index++
        moveSlide();
    }
})
//아전 버튼 클릭 시
prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    moveSlide();
  }
});


const infoDropdown = document.querySelectorAll(".info-dropdown");

//서치 모달 관련
//버튼 클릭시 show 클래스 추가하여 내용물을 보여주고 닫기 버튼 클릭 시 클래스 제거로 안보이게 한다
document.getElementById("openSearchModal").addEventListener('click',()=>(
    searchModal.classList.add("show")
));
document.getElementById("closeSearchModal").addEventListener('click',()=>(
    searchModal.classList.remove("show")
));
//메뉴모달 관련
//버튼 클릭시 show 클래스 추가하여 내용물을 보여주고 닫기, 그 외 부분을 클릭 시 클래스 제거로 안보이게 한다.
document.getElementById("openMenuModal").addEventListener('click', ()=>(
    menuModal.classList.add("show")
));
document.getElementById("closeMenuModal").addEventListener('click',()=>(
    menuModal.classList.remove("show")
));
menuModal.addEventListener('click', (e)=>{
    if(e.target == menuModal){
        menuModal.classList.remove("show")
    }
});

//드롭다운
infoDropdown.forEach(dropdown => {
  const icon = dropdown.querySelector(".info-dropdown-icon");
  const content = dropdown.querySelector(".info-dropdown-content");

  icon.addEventListener("click", () => {
    content.classList.toggle("drop-on");
  });
});
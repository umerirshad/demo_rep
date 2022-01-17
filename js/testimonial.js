const testimonials =[
    {
        id: 1,
        name:"susan smith",
        job:"web developer",
        img:"https://images.unsplash.com/photo-1494708001911-679f5d15a946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        text:"Life isn't about finding yourself. Life is about creating yourself.",
    },
    {
        id: 2,
        name:"anna johnson",
        job:"web designer",
        img:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        text:"I love deadlines. I love the whooshing noise they make as they go by.",
    },
    {
        id: 3,
        name:"peter jones",
        job:"intern",
        img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        text:"It is better to be hated for what you are than to be loved for what you are not.",
     },
    {
        id: 4,
        name:"bill anderson",
        job:"the boss ",
        img:"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",
        text:"Nothing ever really goes away--it just changes into something else.",
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContetntLoaded", function(){
    const item = testimonials[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

});

function showPerson(person){
    const item =testimonials[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem > testimonials.length -1){
        currentItem = 0;
    }
    showPerson(currentItem);
});
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = testimonials.length -1;
    }
    showPerson(currentItem);

});

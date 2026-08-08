const treatments = [

{
title:"Medication",

image:"images/medication.webp",

description:"Antipsychotic medications may help reduce hallucinations, delusions, and other symptoms. Always consult a healthcare professional regarding medication.",

type:"Medical"
},

{
title:"Therapy",

image:"images/therapy.webp",

description:"Psychological therapies such as Cognitive Behavioral Therapy (CBT) can help individuals understand and manage their experiences.",

type:"Support"
},

{
title:"Support Networks",

image:"images/family.webp",

description:"Family members, friends, peer groups, and community organizations provide valuable emotional support.",

type:"Support"
},

{
title:"Recovery",

image:"images/recovery.webp",

description:"Recovery is a gradual process. Many people live meaningful lives with the right combination of treatment and support.",

type:"Recovery"
},

{
title:"Success Stories",

image:"images/success.webp",

description:"Hear from individuals who have successfully navigated their mental health journey and found ways to thrive.",

type:"Success"
},

{
title:"You are Special",

image:"images/special.webp",

description:"You are unique and valuable. Embrace your individuality and seek support when needed.",

type:"Special"
},



];

const container = document.querySelector("#treatmentCards");

if (container) {
    displayTreatments(treatments);
}

function displayTreatments(array){

container.innerHTML="";

array.forEach(item=>{

container.innerHTML += `

<article class="treatment-card">

<img src="${item.image}"

alt="${item.title}"

loading="lazy">

<h3>${item.title}</h3>

<p>${item.description}</p>

<button class="learnMore"
data-type="${item.type}">
Learn More
</button>

</article>

`;

});

listenButtons();

}

function listenButtons(){

const buttons=document.querySelectorAll(".learnMore");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

const type=button.dataset.type;

localStorage.setItem("lastTreatment",type);

if(type==="Medical"){

alert('Medication should always be discussed with a qualified healthcare professional.');

}

else if(type==="Support"){

alert('Support from family, friends, and professionals plays an important role in recovery.');

}

else if(type==="Recovery"){

alert('Recovery might take time but with the right support and treatment, individuals can lead fulfilling lives.');

}

else if(type==="Success"){

alert('Seek out success stories and connect with others who have navigated similar experiences for inspiration and hope.');

}

else if(type==="Special"){

alert('Do not let anyone make you feel less than anything. You are a Son/Daughter of our Heavenly Father.');

}

else{

alert('Recovery looks different for everyone. Professional care and ongoing support can make a significant difference.');

}

});

});

}

const previous=localStorage.getItem("lastTreatment");

if(previous){

console.log(`Previously viewed: ${previous}`);

}
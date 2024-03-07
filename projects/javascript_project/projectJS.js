
document.getElementById("createResume").addEventListener("click", validateEmail);


function resumeFunc() {

    //name
    let name = document.getElementById("fullName").value;
    //address
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value;
    let country = document.getElementById("country").value;
    //contact
    let phoneNum = document.getElementById("phoneNum").value;
    let email = document.getElementById("email").value;
    let portfolio = document.getElementById("portfolio").value;

    //skill set
    let skillOne = document.getElementById("skillOne").value;
    let skillTwo = document.getElementById("skillTwo").value;
    let skillThree = document.getElementById("skillThree").value;

    //tech skill set
    let techSkillOne = document.getElementById("techSkillOne").value;
    let techSkillTwo = document.getElementById("techSkillTwo").value;

    //education
    let education = document.getElementById("education").value;

    //Job experience
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let details = document.getElementById("details").value;

    let startDate2 = document.getElementById("startDate2").value;
    let endDate2 = document.getElementById("endDate2").value;
    let details2 = document.getElementById("details2").value;

    let startDate3 = document.getElementById("startDate3").value;
    let endDate3 = document.getElementById("endDate3").value;
    let details3 = document.getElementById("details3").value;

    //references
    let references = document.getElementById("references").value;
    
    let address = city + ", " + state + " "+ zip + " - " + country;
    let contact = phoneNum + " - " + email + " - " + portfolio;
    let job1 = startDate+'/'+endDate;
    let job2 = startDate2+'/'+endDate2;
    let job3 = startDate3+'/'+endDate3;
    
var html = '<html><head><meta charset="utf-8"><title>Resume</title><link rel="stylesheet" href="stylesheet.css"/></head><body><div id="newPageHeader"class="leftAlign banner"><h1>'+name+'</h1><p class="leftFloat">Address: '+address+'</p><p class="leftFloat">Contact Information: '+contact+'</p><p class="clear"></p></div><div id="techToolbox" class="center clear"><h2 class="leftAlign bottomLine">Technical Toolbox</h2><div class="leftFloat"><h3>Web Tools:</h3> <p>'+techSkillOne+'</p><p>'+techSkillTwo+'</p></div><div class="rightFloat"><h3>Web Skills:</h3> <p>'+skillOne+'</p><p>'+skillTwo+'</p><p>'+skillThree+'</p></div></div><div id="webDevExperience" class="clear center"><h2 class="leftAlign bottomLine">Web Development Experience</h2><div id="experienceOutput" class="leftFloat"><h3>Work Experience</h3><p>'+job1+'</p><p>'+details+'</p><p>'+job2+'</p><p>'+details2+'</p><p>'+job3+'</p><p>'+details3+'</p></div><div id="educationOutput" class="rightFloat"><h3>Education</h3><p>'+education+'</p> </div><div id="referencesOutput" class="rightFloat"><h3>References</h3><p>'+references+'</p></div></div></body></html>'

    var opened = window.open("");
    opened.document.write(html);

    
}

function validateEmail() {
    let email = document.getElementById("email").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.match(mailformat))
    {
        resumeFunc();
        //return true;
        
    }
    else
    {
        alert("invalid email")
       // return false;
        
    }

}




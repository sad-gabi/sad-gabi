function scrollToBottom() {
    const scrollableDiv = document.getElementById('AIchat');
    scrollableDiv.scroll({
        top: 1000000,
        left: 0,
        behavior: "smooth",
      });
}

function rmv_selchat1() {
    const selChat2 = document.getElementById("sel2");
    selChat2.remove();
    const selChat3 = document.getElementById("sel3");
    selChat3.remove();
    const selChat4 = document.getElementById("sel4");
    selChat4.remove();
    document.getElementById("sel1").id = "0";
}

function rmv_selchat2() {
    const selChat1 = document.getElementById("sel1");
    selChat1.remove();
    const selChat3 = document.getElementById("sel3");
    selChat3.remove();
    const selChat4 = document.getElementById("sel4");
    selChat4.remove();
    document.getElementById("sel2").id = "0";
}

function rmv_selchat3() {
    const selChat2 = document.getElementById("sel2");
    selChat2.remove();
    const selChat1 = document.getElementById("sel1");
    selChat1.remove();
    const selChat4 = document.getElementById("sel4");
    selChat4.remove();
    document.getElementById("sel3").id = "0";
}

function rmv_selchat4() {
    const selChat2 = document.getElementById("sel2");
    selChat2.remove();
    const selChat3 = document.getElementById("sel3");
    selChat3.remove();
    const selChat1 = document.getElementById("sel1");
    selChat1.remove();
    document.getElementById("sel4").id = "0";
}

function writingRmv() {
    const writingMsg = document.getElementById("writing");
    writingMsg.remove();
}

function writing() {
    const chat = document.getElementById("chat");
    let writing = "";
    writing += '<div id="writing" class="messageblock_ai">';
    writing += '<button></button>';
    writing += '<div class="writing">';
    writing += '<h5 style="color: #ffffff50; font-size: 16px;">Devohra is writing...</h5>';
    writing += '</div>';
    writing += '</div>';
    chat.innerHTML += writing;
    document.getElementById("0").onclick = "";
    document.getElementById("0").style.cursor = "auto";
    document.getElementById("0").id = "1";
}

function chatOp() {
    const chat = document.getElementById("chat");
    let chatOp = "";
    chatOp += '<div id="sel_chat" class="messageblock_user">';
    chatOp += '<div style="text-align: right;">';
    chatOp += '<h5 style="margin-right: 10px;">You</h5>';
    chatOp += '<div id="sel1" onclick="rmv_selchat1(); hMkComms()" class="message_user">';
    chatOp += '<h5>I wanna request for a commission</h5>';
    chatOp += '</div>';
    chatOp += '<div id="sel2" onclick="rmv_selchat2(); hCostComms();" class="message_user">';
    chatOp += '<h5>How much do I have to pay for a commission?</h5>';
    chatOp += '</div>';
    chatOp += '<div id="sel3" onclick="rmv_selchat3(); hContact();" class="message_user">';
    chatOp += '<h5>Where is the contact info?</h5>';
    chatOp += '</div>';
    chatOp += '<div id="sel4" onclick="rmv_selchat4(); hDevohra();" class="message_user">';
    chatOp += '<h5>Who are you?</h5>';
    chatOp += '</div>';
    chatOp += '</div>';
    chatOp += '<button></button>';
    chatOp += '</div>';
    chat.innerHTML += chatOp;

    scrollToBottom();
}

function hMkComms() {

    writing();

    function hMkCommsM() {
        const chat = document.getElementById("chat");
        let MkComms = "";
        MkComms += '<div class="messageblock_ai">';
        MkComms += '<button></button>';
        MkComms += '<div>';
        MkComms += '<h5 style="margin-left: 10px;">Devohra</h5>';
        MkComms += '<div class="message_ai">';
        MkComms += '<h5>Sure!</h5>';
        MkComms += '<h5>To request a commission, you can visit the <a href="sadgabi.github.io/sad-gabi/hire_me">Hire Me</a> page. There you will find a list of the services you can request!</h5>';
        MkComms += '<h5>Do you need any other help?</h5>';
        MkComms += '</div>';
        MkComms += '</div>';
        MkComms += '</div>';
        chat.innerHTML += MkComms;
    }

    setTimeout(writingRmv, 1500);
    setTimeout(hMkCommsM, 1500);
    setTimeout(chatOp, 2000);
}

function hCostComms() {

    writing();

    function hCostCommsM() {
        const chat = document.getElementById("chat");
        let CostComms = "";
        CostComms += '<div class="messageblock_ai">';
        CostComms += '<button></button>';
        CostComms += '<div>';
        CostComms += '<h5 style="margin-left: 10px;">Devohra</h5>';
        CostComms += '<div class="message_ai">';
        CostComms += '<h5>Commissions can vary on costs, but have in mind the minimum budget for asking for any service you may need is $5 USD!</h5>';
        CostComms += '<h5>You can contact Gabi via <a href="https://twitter.com/sadgabi20">Twitter</a> or <a href="https://discord.com/users/sadgabi20">Discord!</a></h5>';
        CostComms += '<h5>Do you need any other help?</h5>';
        CostComms += '</div>';
        CostComms += '</div>';
        CostComms += '</div>';
        chat.innerHTML += CostComms;
    }

    setTimeout(writingRmv, 1500);
    setTimeout(hCostCommsM, 1500);
    setTimeout(chatOp, 2000);
}

function hContact() {

    writing();

    function hContactInfo() {
        const chat = document.getElementById("chat");
        let Contact = "";
        Contact += '<div class="messageblock_ai">';
        Contact += '<button></button>';
        Contact += '<div>';
        Contact += '<h5 style="margin-left: 10px;">Devohra</h5>';
        Contact += '<div class="message_ai">';
        Contact += '<h5>The contact info is located in the <a href="sad-gabi.github.io/sad-gabi/contact">Contact Info</a> page.</h5>';
        Contact += '<h5>However, here i provide you some social media links</h5>';
        Contact += '<h5><a href="https://twitter.com/sadgabi20">Twitter</a> | <a href="https://discord.com/users/sadgabi20">Discord</a> | <a href="https://www.linkedin.com/in/sadgabi/">Linked In</a> | <a href="https://www.behance.net/sadgabi">Behance</a></h5>';
        Contact += '<h5>Also, if you wanna donate to help Gabi continue contributing solutions, you can donate here!</h5>';
        Contact += '<h5><a href="https://ko-fi.com/sadgabi">Ko-fi</a></h5>';
        Contact += '<h5>Do you need any other help?</h5>';
        Contact += '</div>';
        Contact += '</div>';
        Contact += '</div>';
        chat.innerHTML += Contact;
    }

    setTimeout(writingRmv, 1500);
    setTimeout(hContactInfo, 1500);
    setTimeout(chatOp, 2000);
}

function hDevohra() {

    writing();

    function hDevohraW() {
        const chat = document.getElementById("chat");
        let Devohra = "";
        Devohra += '<div class="messageblock_ai">';
        Devohra += '<button></button>';
        Devohra += '<div>';
        Devohra += '<h5 style="margin-left: 10px;">Devohra</h5>';
        Devohra += '<div class="message_ai">';
        Devohra += '<h5>Me? I am Devohra!</h5>';
        Devohra += "<h5>I am the Deeper Hell's office HR Manager, but sometimes I just pass by here and help users like you</h5>";
        Devohra += '<h5>Since I am a demon, and I live in hell, I used to be a bit rude, but I just got so many complaints I had to change it! Can you believe it?</h5>';
        Devohra += '<h5>Anyway, I hope I never get to see you down here :)</h5>';
        Devohra += '</div>';
        Devohra += '</div>';
        Devohra += '</div>';
        chat.innerHTML += Devohra;
    }

    setTimeout(writingRmv, 1500);
    setTimeout(hDevohraW, 1500);
    setTimeout(chatOp, 2000);
}
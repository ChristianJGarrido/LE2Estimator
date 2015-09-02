var intro = {part1: "LivePerson", part2: "Implementation Package", part3: "New LivePerson Account setup and provisioned for Company"};

var packages = ["Basic", "Intermediate", "Advanced"];

var cwebsite = {part1: "LivePerson solution deployed to", part2: "company domain as defined below to the line of business defined below:",
part3: "Company Line of Business (LOB):", part4: "Company domain (URL):"};

var cpackage = {part1: "Creation and delivery of validated Design Requirements Document (DRD)", part2: "Creation and delivery of LivePerson code package according to agreed upon design requirements as set forth in the DRD"};

var cap1 = {intro: {part1 : "LivePerson solution for",part2: "Line of Business within the account, which consists of"}, section1: {part1: "Set up and configuration of LivePerson reports up to", part2: "reporting targets"}, section2: {part1: "Set up and configuration of", part2: "standard Scorecard"}, end : "Configuration of LivePerson solution capabilities, including"};


var cap2 = ["Skill(s) created and configured", "Visitor Profile(s)", "Configuration of an Intelligent Targeting Visitor Model", "Predictive Intelligence Targeting", "Up to", "business rules", "Dynamic chat button(s) (client to provide content)", "Proactive chat invitation(s) (client to provide content)"];

var cap3 = ["Setup and configuration of up to", "standard chat window(s)", "standard pre-chat, exit, operator and offline survey(s)", "standard set(s) of canned responses", "standard system message set(s)"];

var testing = ["All applicable technical rules implemented, tested and deployed according to DRD", "LivePerson deployment support for implementation and testing."];

var training = {intro:"LivePerson Training Services as follows", remote: "remote three (3) hour Admin Console training session(s) for up to 15 participants", sura: "onsite two and one half (2.5) day Agent training session(s) utilizing LivePerson's SURA methodology (LivePerson's methodology for eSales and eService training) for up to 25 participants"};

var pm = "Weekly project meeting(s) during project term.";

var opt = {intro: "Post Launch baseline meetings to review and establish key metrics for post launch optimization activities.", creation: "Creation and delivery of up to", scorecard: "standard Scorecard Review(s)", staffing: "standard Staffing Calculator(s)", agenteff: "standard Agent Effectiveness"};

var hours = {part1: "Total work effort pursuant to this SOW shall be up to", part2: "Professional Services hours"};

var end = "Unless otherwise expressly set forth above, all services shall be performed remotely and all time frames set forth above are maximums.";
var textarea;
var sp = " ";

var gboxesClick = false;

window.onload = function() {
  loadDropDowns();
};


function loadDropDowns() {

	


}


function generateBoxes() {

gboxesClick = true;
var numdomains = $('#domain').val();

eboxes1 = document.getElementById("eboxes1");
eboxes2 = document.getElementById("eboxes2");

var generate1 = '';
var generate2 = '';
for(var i = 1; i < numdomains; i++) {
//$("#lobs").append('LOB <input type="text" id="lobs'+i+'></input>');
//lob += 'LOB <input type="text" id="lobs';
//lob += i;

//generate += '<li>';
generate1 += 'LOB ' + (i+1) + '<br>';
generate2 += '<input type="text" id="lobs'+i+'"></input><br>';
generate1 += 'DOM ' + (i+1) + '<br>';
generate2 += '<input type="text" id="domurls'+i+'"></input><br>';
//generate += '</li>';
}
//generate += '</ul>';
eboxes1.innerHTML = generate1;
eboxes2.innerHTML = generate2;


}

function makeSOW(){

var numdomains = $('#domain').val();
var SOW = "";
var domurls = [];
var lobs = [];
var intdomains = parseInt(numdomains);
if(gboxesClick && intdomains > 1) {

	for(i = 1; i < numdomains; i++) {
		domurls.push($('#domurls'+i).val());
		lobs.push($('#lobs'+i).val());
	
	}
}
var pform = document.getElementById("package");
var drdform = document.getElementById("drd");
var cpform = document.getElementById("cp");
var pitform = document.getElementById("pit");
var trainform = document.getElementById("train");
var ptype = pform.options[pform.selectedIndex].value;

var lob = $('#lob0').val();
var domurl = $('#domurl0').val();
var drd = drdform.options[drdform.selectedIndex].value;
var cp = cpform.options[cpform.selectedIndex].value;
var numlob = $('#numlob').val();
var reptargets = $('#reptargets').val();
var scards = $('#scards').val();
var numskill = $('#numskill').val();
var numvispro = $('#numvispro').val();
var numrules = $('#numrules').val();
var dbs = $('#dbs').val();
var invites = $('#invites').val();
var numwindows = $('#numwindows').val();
var numsurveys = $('#numsurveys').val();
var numcanned = $('#numcanned').val();
var numsysmsg = $('#numsysmsg').val();
var pit = pitform.options[pitform.selectedIndex].value;
var busrules = $('#busrules').val();
var train = trainform.options[trainform.selectedIndex].value;
var numpm = $('#numpm').val();
var numtrain = $('#numtrain').val();
var numplm = $('#numplm').val();
var numscr = $('#numscr').val();
var numstaffr = $('#numstaffr').val();
var numaer = $('#numaer').val();
var hrs = $('#hrs').val();
var offers = $('#offers').val();
var chat = document.getElementById('chat').checked;
var voice = document.getElementById('voice').checked;
var mobile = document.getElementById('mobile').checked;
var content = document.getElementById('content').checked;
var ios = document.getElementById('ios').checked;
var android = document.getElementById('android').checked;
var resp = document.getElementById('resp').checked;

textarea = document.getElementById("tarea");
SOW += "<u>" + intro.part1 + " " + ptype + " " + intro.part2 + "</u>";
SOW += "<ul><li>" + intro.part3 + "</li></ul>";

SOW += "<b>Company Website</b><ul><li>" + cwebsite.part1 + sp + numdomains + sp + cwebsite.part2 + "</li>";

if( intdomains > 1 && gboxesClick) {
SOW += "<ul><li>" + 'Company Line of Business 1 (LOB):' + sp + lob + "</li><li>" + 'Company domain 1 (URL):' + sp + domurl + "</li>"; 
}
else{
SOW += "<ul><li>" + cwebsite.part3 + sp + lob + "</li><li>" + cwebsite.part4 + sp + domurl + "</li>"; 
}

if( intdomains > 1 && gboxesClick) {

for (i = 0; i < intdomains - 1; i++) {
SOW += "<li>" + 'Company Line of Business' + sp + (i+2) + sp + '(LOB): ' + lobs[i] + "</li><li>" +'Company domain' + sp + (i+2) + sp + '(URL):'+ sp + domurls[i] + "</li>"; 
}
}

SOW += "</ul></ul>";
if((drd == "Yes") || (cp == "Yes")) {

	SOW += "<b>Code Package</b><ul>";

}

if(drd == "Yes") {
	SOW += "<li>" + cpackage.part1 + "</li>";

}

if(cp == "Yes") {
	SOW += "<li>" + cpackage.part2 + "</li>";

}

if((drd == "Yes") || (cp == "Yes")) {

	SOW += "</ul>";

}


SOW += "<b>Capabilities</b><ul><li>";
SOW += cap1.intro.part1 + sp + numlob + sp + cap1.intro.part2 + "</li>";
if((scards != '0') || (reptargets != '0')) {
	SOW += "<ul>";
}
if((reptargets != '0') && (reptargets != '')) {
SOW += "<li>" + cap1.section1.part1 + sp + reptargets + sp + cap1.section1.part2 +"</li>";
}
if((scards != '0') && (scards != '')) {
SOW += "<li>Up to " + cap1.section2.part1 + sp + scards + sp + cap1.section2.part2 + "(s)</li>";
}
if((scards != '0') || (reptargets != '0')) {
	SOW += "</ul>";
}
SOW += "<li>" + cap1.end + "</li></ul>";

SOW += "<dl><dd>";

if(chat) {
SOW += "<b>Chat</b><dl><dd><ul>";
if((numskill != '0') && (numskill != '')) {
SOW += "<li>Up to " + numskill + sp + cap2[0] + "</li>";
}
if((numvispro != '0') && (numvispro != '')) {
SOW += "<li>Up to " + numvispro + sp + cap2[1] + "</li>";
}
if((pit == 'Yes') || (busrules != '0')) {
	SOW += "<li>" + cap2[2] + "</li><ul>";
}

if(pit == 'Yes') {
SOW += "<li>" + cap2[3] + "</li>";
}
if((pit != 'Yes') && (busrules != '0')) {
SOW += "<li>" + cap2[4] + sp + busrules + sp+ cap2[5] +"</li>";
}

if((pit == 'Yes') || (busrules != '0')) {
	SOW += "</ul>";
}
if((dbs != '0') && (dbs != '')) {
SOW += "<li>Up to " + dbs + sp + cap2[6] + "</li>";
}
if((invites != '0') && (invites != '')) {
SOW += "<li>Up to " + invites + sp + cap2[7] + "</li>";
}
if((numwindows != '0') && (numwindows != '')) {
SOW += "<li>" + cap3[0] + sp + numwindows + sp+ cap3[1] +"</li>";
}
if((numsurveys != '0') && (numsurveys != '')) {
SOW += "<li>" + cap3[0] + sp + numsurveys + sp+ cap3[2] +"</li>";
}
if((numcanned != '0') && (numcanned != '')) {
SOW += "<li>" + cap3[0] + sp + numcanned + sp+ cap3[3] +"</li>";
}
if((numsysmsg != '0') && (numsysmsg != '')) {
SOW += "<li>" + cap3[0] + sp + numsysmsg + sp+ cap3[4] +"</li>";
}

SOW += "</ul></dl>";
}

if(voice) {
SOW += "<b>Voice</b><dl><dd><ul>";
if((numskill != '0') && (numskill != '')) {
SOW += "<li>Up to " + numskill + sp + cap2[0] + "</li>";
}
if((numvispro != '0') && (numvispro != '')) {
SOW += "<li>Up to " + numvispro + sp + cap2[1] + "</li>";
}

if ((busrules != '0') && busrules != '') {
SOW += "<li>" + cap2[4] + sp + busrules + sp+ cap2[5] +"</li>";
}

if((dbs != '0') && (dbs != '')) {
SOW += "<li>Up to " + dbs + sp + "Dynamic Voice buttons" + "</li>";
}
if((invites != '0') && (invites != '')) {
SOW += "<li>Up to " + invites + sp + "Dynamic Voice invites" + "</li>";
}
if((numwindows != '0') && (numwindows != '')) {
SOW += "<li>" + cap3[0] + sp + numwindows + sp+ "standard call windows" +"</li>";
}
if((numsurveys != '0') && (numsurveys != '')) {
SOW += "<li>" + cap3[0] + sp + numsurveys + sp+ "pre-call, exit, operator and offline surveys" +"</li>";
}
if((numcanned != '0') && (numcanned != '')) {
SOW += "<li>" + cap3[0] + sp + numcanned + sp+ cap3[3] +"</li>";
}
if((numsysmsg != '0') && (numsysmsg != '')) {
SOW += "<li>" + cap3[0] + sp + numsysmsg + sp+ cap3[4] +"</li>";
}

SOW += "</ul></dl>";
}

if(content) {
SOW += "<b>Content</b><dl><dd><ul>";

SOW += "<li>Setup and deployment of up to " + offers + sp + "concurrent offers" + "</li>";

SOW += "</ul></dl>";
}

if(mobile) {
SOW += "<b>Mobile</b><dl><dd><ul>";

if((numskill != '0') && (numskill != '')) {
SOW += "<li>Up to " + numskill + sp + "Mobile " + cap2[0] + "</li>";
}
if((numvispro != '0') && (numvispro != '')) {
SOW += "<li>Up to " + numvispro + sp + "Mobile " + cap2[1] + "</li>";
}
if((dbs != '0') && (dbs != '')) {
SOW += "<li>Up to " + dbs + sp + "Mobile chat buttons" + "</li>";
}
SOW += "<li>LP Mobile plug in code packages for mobile chat</li>";
SOW += "<ul>";
if(ios) {

SOW += "<li>for iOS native applications</li>";

}
if(android) {

SOW += "<li>for Android native applications</li>";

}
if(resp) {

SOW += "<li>for responsive web site</li>";

}

SOW += "</ul></ul></dl>";
}

SOW += "</dl>";

SOW += "<b>Testing</b><ul>";
SOW += "<li>" + testing[0] + "</li>";
SOW += "<li>" + testing[1] + "</li></ul>";

if(train != "none") {

SOW += "<b>Training</b>";
SOW += "<ul><li>" + training.intro + "</li>";

	if(train == "remote") {

		SOW += "<ul><li>" + numtrain + sp + training.remote + "</li></ul>";

	}
	
	if(train == "sura") {

		SOW += "<ul><li>" + numtrain + sp + training.sura + "</li></ul>";

	}
	
SOW += "</ul>";

}

if((numpm != '0') && (numpm != '')) {
SOW += "<b>Project management</b>";
SOW += "<ul><li>" + numpm + sp + pm + "</li></ul>";
}

if((numplm != '0') && (numplm != '')) {
SOW += "<b>Optimization</b>";
SOW += "<ul><li>Up to " + numplm + sp + opt.intro + "</li>";
SOW += "<li>" + opt.creation + sp + numscr + sp + opt.scorecard + "</li>";
SOW += "<li>" + opt.creation + sp + numstaffr + sp + opt.staffing + "</li>";
SOW += "<li>" + opt.creation + sp + numaer + sp + opt.agenteff + "</li></ul>";
}

SOW += hours.part1 + sp + hrs + sp + hours.part2;

SOW += "<br><br>" + end;

textarea.innerHTML = SOW;

}

function wordSOW(){

$("#page-content").wordExport();

}
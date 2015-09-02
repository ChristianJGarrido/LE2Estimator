var intro = {
    part1: "LivePerson",
    part2: "Implementation Package",
    part3: "New LivePerson Account setup and provisioned for Company"
};

var packages = ["Basic", "Intermediate", "Advanced"];

var cwebsite = {
    part1: "LivePerson solution deployed to",
    part2: "company domain(s) as defined below to the line of business defined below:",
    part3: "Company Line of Business (LOB):",
    part4: "Company domain (URL):"
};

var cpackage = {
    part1: "Creation and delivery of validated Design Requirements Document (DRD)",
    part2: "Creation and delivery of LivePerson code package according to agreed upon design requirements as set forth in the Migration Strategy Document"
};

var cap1 = {
    intro: {
        part1: "LivePerson solution for",
        part2: "Line of Business(es) within the account, which consists of"
    },
    section1: {
        part1: "Set up and configuration of LivePerson reports up to",
        part2: "reporting targets"
    },
    section2: {
        part1: "Set up and configuration of",
        part2: "standard Scorecard"
    },
    end: "Configuration of LivePerson solution capabilities, including"
};


var cap2 = ["Skill(s) created and configured", "Visitor Profile(s)", "Configuration of an Intelligent Targeting Visitor Model", "Predictive Intelligence Targeting", "Up to", "business rules", "LiveEngage Campaigns created and configured", "LiveEngage Engagements for Chat or Content, including: "];

var cap3 = ["Configuration of up to", "LiveEngage Engagement window(s)", "standard LiveEngage pre-chat, exit, operator and offline survey(s)", "LiveEngage standard set(s) of canned responses", "LiveEngage standard system message set(s)"];

var testing = ["All applicable technical rules implemented, tested and deployed according to DRD", "LivePerson deployment support for implementation and testing."];

var training = {
    intro: "LivePerson Training Services as follows",
    remote: "remote two (2) hour Agent training session(s) utilizing LivePerson's SURA methodology (LivePerson's methodology for eSales and eService training) for up to 25 participants",
    sura: "onsite two and one half (2.5) day Agent training session(s) utilizing LivePerson's SURA methodology (LivePerson's methodology for eSales and eService training) for up to 25 participants"
};

var pm = "Weekly project meeting(s) during project term.";

var opt = {
    intro: "Post Launch baseline meetings to review and establish key metrics for post launch optimization activities.",
    creation: "Creation and delivery of up to",
    scorecard: "standard Scorecard Review(s)",
    staffing: "standard Staffing Calculator(s)",
    agenteff: "standard Agent Effectiveness"
};

var hours = {
    part1: "Total work effort pursuant to this SOW shall be up to",
    part2: "Professional Services hours"
};

var end = "Unless otherwise expressly set forth above, all services shall be performed remotely and all time frames set forth above are maximums.";
var textarea;
var sp = " ";

var inputs = ['domain', 'numlob', 'numskill', 'busrules', 'dbs', 'invites', 'campaigns', 'engagements', 'numwindows', 'numsurveys', 'numcanned', 'numsysmsg', 'tcalls', 'numtrain', 'numatrain', 'numpm', 'numplm'];

var gboxesClick = false;

function loadDropDowns() {

    for (var i = 0; i < inputs.length; i++) {


        document.getElementById("i" + (i + 1)).innerHTML = makeDD(inputs[i], 25);

    }

    document.getElementById("d0").innerHTML = makeDD('offers', 10);

}

function makeDD(id, n) {

    var dd = '<select class="selectpicker" id ="';
    dd += id + '">';
    for (i = 0; i <= n; i++) {
        dd += '<option value=' + i + '>' + i + '</option>';

    }

    dd += '</select>';

    return dd;

}


function generateBoxes() {

    gboxesClick = true;
    var numdomains = $('#domain').val();

    eboxes1 = document.getElementById("eboxes1");
    eboxes2 = document.getElementById("eboxes2");

    var generate1 = '';
    var generate2 = '';
    for (var i = 1; i < numdomains; i++) {
        //$("#lobs").append('LOB <input type="text" id="lobs'+i+'></input>');
        //lob += 'LOB <input type="text" id="lobs';
        //lob += i;

        //generate += '<li>';
        generate1 += '<input type="text" disabled="disabled" style="width:70px;" value="LOB ' + (i + 1) + '"></input><br>';
        generate2 += '<input type="text" id="lobs' + i + '"></input><br>';
        generate1 += '<input type="text" disabled="disabled" style="width:70px;" value="DOM ' + (i + 1) + '"></input><br>';
        generate2 += '<input type="text" id="domurls' + i + '"></input><br>';
        //generate += '</li>';
    }
    //generate += '</ul>';
    eboxes1.innerHTML = generate1;
    eboxes2.innerHTML = generate2;


}

function makeSOW() {

    var numdomains = $('#domain')[0].options[$('#domain')[0].selectedIndex].value;
    var SOW = "";
    var domurls = [];
    var lobs = [];
    var intdomains = parseInt(numdomains);
	
    var pform = document.getElementById("package");
    //var drdform = document.getElementById("drd");
    //var cpform = document.getElementById("cp");
    var pitform = document.getElementById("pit");
    var trainform = document.getElementById("train");
    var ptype = pform.options[pform.selectedIndex].value;

    var lob = $('#lob0').val();
    var domurl = $('#domurl0').val();
	domurls.push(lob);
    lobs.push(domurl);
    if (gboxesClick && intdomains > 1) {

        for (i = 1; i < numdomains; i++) {
		
            domurls.push($('#domurls' + i).val());
            lobs.push($('#lobs' + i).val());

        }
    }
    //var drd = drdform.options[drdform.selectedIndex].value;
    //var cp = cpform.options[cpform.selectedIndex].value;
    var numlob = $('#numlob')[0].options[$('#numlob')[0].selectedIndex].value;
    //var reptargets = $('#reptargets')[0].options[$('#reptargets')[0].selectedIndex].value;
    //var scards = $('#scards')[0].options[$('#scards')[0].selectedIndex].value;
    var numskill = $('#numskill')[0].options[$('#numskill')[0].selectedIndex].value;
    //var numvispro =$('#numvispro')[0].options[$('#numvispro')[0].selectedIndex].value;
    //var numrules = $('#numrules')[0].options[$('#numrules')[0].selectedIndex].value;
    var dbs = $('#dbs')[0].options[$('#dbs')[0].selectedIndex].value;
    var invites = $('#invites')[0].options[$('#invites')[0].selectedIndex].value;
    var numwindows = $('#numwindows')[0].options[$('#numwindows')[0].selectedIndex].value;
    var numsurveys = $('#numsurveys')[0].options[$('#numsurveys')[0].selectedIndex].value;
    var numcanned = $('#numcanned')[0].options[$('#numcanned')[0].selectedIndex].value;
    var numsysmsg = $('#numsysmsg')[0].options[$('#numsysmsg')[0].selectedIndex].value;
    var pit = pitform.options[pitform.selectedIndex].value;
    var busrules = $('#busrules')[0].options[$('#busrules')[0].selectedIndex].value;
    var train = trainform.options[trainform.selectedIndex].value;
    var numpm = $('#numpm')[0].options[$('#numpm')[0].selectedIndex].value;
    var numtrain = $('#numtrain')[0].options[$('#numtrain')[0].selectedIndex].value;
    var numplm = $('#numplm')[0].options[$('#numplm')[0].selectedIndex].value;
    //var numscr = $('#numscr')[0].options[$('#numscr')[0].selectedIndex].value;
    //var numstaffr = $('#numstaffr')[0].options[$('#numstaffr')[0].selectedIndex].value;
    //var numaer = $('#numaer')[0].options[$('#numaer')[0].selectedIndex].value;
    var hrs = $('#hrs').val();
    var offers = $('#offers')[0].options[$('#offers')[0].selectedIndex].value;
    var pml = $('#pml')[0].options[$('#pml')[0].selectedIndex].value;
    var chat = document.getElementById('chat').checked;
    //var voice = document.getElementById('voice').checked;
    var mobile = document.getElementById('mobile').checked;
    var content = document.getElementById('content').checked;
    //var ios = document.getElementById('ios').checked;
    //var android = document.getElementById('android').checked;
    //var resp = document.getElementById('resp').checked;
    var tcalls = $('#tcalls')[0].options[$('#tcalls')[0].selectedIndex].value;
    var sso = $('#sso')[0].options[$('#sso')[0].selectedIndex].value;
    var ssotype = $('#ssotype')[0].options[$('#ssotype')[0].selectedIndex].value;
    //var windowbrand = $('#windowbrand')[0].options[$('#windowbrand')[0].selectedIndex].value;
    var atrain = $('#atrain')[0].options[$('#atrain')[0].selectedIndex].value;
    var numatrain = $('#numatrain')[0].options[$('#numatrain')[0].selectedIndex].value;
    var itype = $('#itype')[0].options[$('#itype')[0].selectedIndex].value;
	if(mobile) {
		var mobskill = $('#mobskill')[0].options[$('#mobskill')[0].selectedIndex].value;
		var mobbutt = $('#mobbutt')[0].options[$('#mobbutt')[0].selectedIndex].value;
		var mobwind = $('#mobwind')[0].options[$('#mobwind')[0].selectedIndex].value;
	}
	var campaigns = $('#campaigns')[0].options[$('#campaigns')[0].selectedIndex].value;
	var engagements = $('#campaigns')[0].options[$('#engagements')[0].selectedIndex].value;
    var nl = "<p class=MsoNormal style='margin-left:.25in'><span style='font-size:10.0pt; font-family:\"Arial\",sans-serif'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class=SpellE><span style='font-size:9.0pt;font-family:\"Arial\",sans-serif'>";
    var bullet = "<p class=MsoNormal style='margin-left:1.0in;text-indent:-.25in'><span style='font-size:9.0pt;font-family:Symbol'>&#8226;</span><span style='font-size:7.0pt'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style='font-size:9.0pt;font-family:\"Arial\",sans-serif'>";
    var el = "</span></p>";

    textarea = document.getElementById("tarea");
    if(itype != "Migration") {
		SOW += "<u>" + intro.part1 + sp + ptype + sp + intro.part2 + "</u>";
		SOW += "<ul style=\"margin-top:0.0in;\">";
		if (itype == "New") {

			SOW += "<li>" + intro.part3 + el + "</li>";
		}

		SOW += '</ul>';
	}
    SOW += "<b>Company Website</b><ul style=\"margin-top:0.0in;\"><li>" + cwebsite.part1 + sp + numdomains + sp;

    SOW += cwebsite.part2 + "</li>";

    if (intdomains > 1 && gboxesClick) {
        SOW += "<ul style=\"margin-top:0.0in;\"><li>" + 'Company Line of Business 1 (LOB):' + sp + lob + "</li><li>" + 'Company domain 1 (URL):' + sp + domurl + "</li>";
    } else {
        SOW += "<ul style=\"margin-top:0.0in;\"><li>" + cwebsite.part3 + sp + lob + "</li><li>" + cwebsite.part4 + sp + domurl + "</li>";
    }

    if (intdomains > 1 && gboxesClick) {

        for (i = 0; i < intdomains - 1; i++) {
            SOW += "<li>" + 'Company Line of Business' + sp + (i + 2) + sp + '(LOB): ' + lobs[i] + "</li><li>" + 'Company domain' + sp + (i + 2) + sp + '(URL):' + sp + domurls[i] + "</li>";
        }
    }

    SOW += "</ul></ul>";


    if ((itype == "Migration")) {

        SOW += "<b>Code Package</b><ul style=\"margin-top:0.0in;\">";

    }
    /*
    if(drd == "Yes") {
    	SOW += "<li>" + cpackage.part1 + "</li>";

    }
    */
    if (itype == "Migration") {
        SOW += "<li>" + cpackage.part2 + "</li>";

    }

    if (itype == "Migration") {

        SOW += "</ul>";

    }

    if (itype != "Migration") {
        SOW += "<b>Capabilities</b><ul style=\"margin-top:0.0in;\"><li>";
        SOW += cap1.intro.part1 + sp + numlob + sp;

        if (itype == "Expansion") {

            SOW += 'existing ';

        }

        SOW += cap1.intro.part2 + "</li>";

        /*
        if((scards != '0') || (reptargets != '0')) {
        	SOW += "<ul style=\"margin-top:0.0in;\">";
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
        */
        SOW += "<li>" + cap1.end + "</li>";

        //SOW += "<dl style=\"margin-top:0.0in;margin-left:25;\"><dd>";

        //if(chat) {
        //SOW += '<b>Chat</b><dl style=\"margin-top:0.0in;\"><dd id ="left"><ul style=\"margin-top:0.0in;\">';
        /*if((numskill != '0') && (numskill != '')) {
        SOW += "<li>Up to " + numskill + sp + cap2[0] + "</li>";
        }
        if((numvispro != '0') && (numvispro != '')) {
        SOW += "<li>Up to " + numvispro + sp + cap2[1] + "</li>";
        }
        */

        SOW += "<ul>";
        if ((pit == 'Yes')) {
            SOW += "<li>" + cap2[2] + "</li><ul style=\"margin-top:0.0in;\">";
        }

        if (pit == 'Yes') {
            SOW += "<li>" + cap2[3] + "</li></ul>";
        }

        /*
        if((pit != 'Yes') && (busrules != '0')) {
        SOW += "<li>" + cap2[4] + sp + busrules + sp+ cap2[5] +"</li>";
        }

        if((pit == 'Yes') || (busrules != '0')) {
        	SOW += "</ul>";
        }
        */
        if ((campaigns != '0') && (campaigns != '')) {
            SOW += "<li>Up to " + campaigns + sp + cap2[6] + "</li>";
        }
        if ((engagements != '0') && (engagements != '')) {
            SOW += "<li>Up to " + engagements + sp + cap2[7] + "</li>";
        }
        if ((numwindows != '0') && (numwindows != '')) {
            SOW += "<li>" + cap3[0] + sp + numwindows + sp + cap3[1] + "</li>";
        }
        /*if (windowbrand == 'Yes' && numwindows != '0') {
            SOW += '<ul style=\"margin-top:0.0in;\"><li>Window(s) to have custom branding</li></ul>';

        }*/
        if ((numsurveys != '0') && (numsurveys != '')) {
            SOW += "<li>" + cap3[0] + sp + numsurveys + sp + cap3[2] + "</li>";
        }
        if ((numcanned != '0') && (numcanned != '')) {
            SOW += "<li>" + cap3[0] + sp + numcanned + sp + cap3[3] + "</li>";
        }
        if ((numsysmsg != '0') && (numsysmsg != '')) {
            SOW += "<li>" + cap3[0] + sp + numsysmsg + sp + cap3[4] + "</li>";
        }

        if ((sso == 'Yes')) {
            SOW += "<li>" + 'Setup and configuration of' + sp + ssotype + " SSO</li>";
        }

        SOW += "</ul>"

        SOW += "<li>Creation and delivery of validated Business Requirements Document (BRD)</li>";
        SOW += "<li>All applicable engagements tested and deployed according to BRD</li>";

        SOW += "</ul>";

    } else {

        for (var i = 0; i < lobs.length; i++) {
            SOW += "<b>Migration of Existing Configuration - " + lobs[i] + "</b><ul style=\"margin-top:0.0in;\"><li>";
            SOW += "Current LivePerson solution capabilities will be migrated, if available to LiveEnage:</li>";


            SOW += "<dl style=\"margin-top:0.0in;margin-left:25;\"><dd>";
            SOW += '<b>Strategy and Design</b><dl style=\"margin-top:0.0in;\"><dd id ="left"><ul style=\"margin-top:0.0in;\">';
            SOW += '<li>Creation and delivery of Migration Strategy Document</li></ul></dd><dl>'
            if (chat) {
                SOW += '<b>Chat - Desktop</b><dl style=\"margin-top:0.0in;\"><dd id ="left"><ul style=\"margin-top:0.0in;\">';
                if ((numskill != '0') && (numskill != '')) {
                    SOW += "<li>Up to " + numskill + sp + "skill(s)" + "</li>";
                }
                /*if((numvispro != '0') && (numvispro != '')) {
                SOW += "<li>Up to " + numvispro + sp + cap2[1] + "</li>";
                }
                */
                

                if (pit == 'Yes') {
                    SOW += "<li>" + cap2[3] + "</li>";
                }
                if ((pit != 'Yes') && (busrules != '0')) {
                    SOW += "<li>" + "Agreed upon business rules as defined in the Migration Strategy Document not to exceed" + sp + busrules + sp + "engagements" + "</li>";
                }

              
                if ((dbs != '0') && (dbs != '')) {
                    SOW += "<li>Up to " + dbs + sp + "chat button(s)" + "</li>";
                }
                if ((invites != '0') && (invites != '')) {
                    SOW += "<li>Up to " + invites + sp + " proactive chat invite(s)" + "</li>";
                }
                if ((numwindows != '0') && (numwindows != '')) {
                    SOW += "<li>Up to" + sp + numwindows + sp + "engagement chat windows or" +sp + numwindows + sp +"embedded chat windows</li>";
                }
                /*if(windowbrand == 'Yes') {
                	SOW += '<ul style=\"margin-top:0.0in;\"><li>Window(s) to have custom branding</li></ul>';

                }*/
                if ((numsurveys != '0') && (numsurveys != '')) {
                    SOW += "<li>Up to" + sp + numsurveys + sp + "pre-chat, exit, operator, and offline surveys</li>";
                }
                if ((numcanned != '0') && (numcanned != '')) {
                    SOW += "<li>Uo to" + sp + numcanned + sp + "set of canned responses" + "</li>";
                }
                if ((numsysmsg != '0') && (numsysmsg != '')) {
                    SOW += "<li>Up to"+ sp + numsysmsg + sp + "system message sets" + "</li>";
                }

                if ((sso == 'Yes')) {
                    SOW += "<li>" + 'Setup and configuration of' + sp + ssotype + " SSO</li>";
                }

                SOW += "</ul></dl>";
            }

            if (mobile) {
                SOW += '<b>Chat -Mobile</b><dl style=\"margin-top:0.0in;\"><dd id="left"><ul style=\"margin-top:0.0in;\">';

                if ((mobskill != '0') && (mobskill != '')) {
                    SOW += "<li>Up to " + mobskill + sp + "Mobile " + cap2[0] + "</li>";
                }
                if ((mobbutt != '0') && (mobbutt != '')) {
                    SOW += "<li>Up to " + mobbutt + sp + "Mobile " + cap2[1] + "</li>";
                }
                if ((mobwind != '0') && (mobwind != '')) {
                    SOW += "<li>Up to " + mobwind + sp + "embedded chat windows" + "</li>";
                }

                SOW += "</ul></dl>";
            }

            if (content) {
                SOW += '<b>Content</b><dl class = style=\"margin-top:0.0in;\"><dd id="left"><ul style=\"margin-top:0.0in;\">';

                SOW += "<li>Setup and migration of up to " + offers + sp + "concurrent offers" + "</li>";

                SOW += "</ul></dl>";
            }



            SOW += "</ul>";


        }

    }
    /*
    if(voice) {
    SOW += '<b>Voice</b><dl style=\"margin-top:0.0in;\"><dd id = "left"><ul style=\"margin-top:0.0in;\">';
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

    if(windowbrand == 'Yes') {
    	SOW += '<ul style=\"margin-top:0.0in;\"><li>Window(s) to have custom branding</li></ul>';

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

    if((sso == 'Yes')) {
    SOW += "<li>" + 'Setup and configuration of' + sp + ssotype + " SSO</li>";
    }

    SOW += "</ul></dl>";
    }

    if(content) {
    SOW += '<b>Content</b><dl class = style=\"margin-top:0.0in;\"><dd id="left"><ul style=\"margin-top:0.0in;\">';

    SOW += "<li>Setup and deployment of up to " + offers + sp + "concurrent offers" + "</li>";

    SOW += "</ul></dl>";
    }

    if(mobile) {
    SOW += '<b>Mobile</b><dl style=\"margin-top:0.0in;\"><dd id="left"><ul style=\"margin-top:0.0in;\">';

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
    SOW += "<ul style=\"margin-top:0.0in;\">";
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
    */
    SOW += "<b>Testing</b><ul style=\"margin-top:0.0in;\">";
    //SOW += "<li>" + testing[0] + "</li>";
    SOW += "<li>" + testing[1] + "</li>";
    SOW += "<li>Up to " + tcalls + sp + "testing call(s)</li></ul>";

    if ((train != "none") || (atrain != "none")) {

        SOW += "<b>Training</b>";
        SOW += "<ul style=\"margin-top:0.0in;\"><li>" + training.intro + "</li>";

        if (train == "remote") {

            SOW += "<ul style=\"margin-top:0.0in;\"><li>" + numtrain + sp + training.remote + "</li>";

        }

        /*if(train == "sura") {

		SOW += "<ul style=\"margin-top:0.0in;\"><li>" + numtrain + sp + training.sura + "</li>";

	}
	*/

        if ((atrain == "remote") && (train == "none")) {

            SOW += "<ul style=\"margin-top:0.0in;\"><li>Up to " + numatrain + sp + 'remote three (3) hour Admin Console training session for up to 15 participants' + "</li>";
        }

        if ((atrain == "remote") && (train != "none")) {

            SOW += "<li>Up to " + numatrain + sp + 'remote one (1) hour LiveEngage Console training session for up to 15 participants' + "</li>";
        }

        SOW += "</ul></ul>";

    }

    if ((numpm != '0') && (numpm != '')) {
        SOW += "<b>Project management</b>";
        SOW += "<ul style=\"margin-top:0.0in;\"><li>" + numpm + sp + pml + sp + pm + "</li></ul>";

    }

    if ((numplm != '0') && (numplm != '')) {
        SOW += "<b>Optimization</b>";
        SOW += "<ul style=\"margin-top:0.0in;\"><li>Up to " + numplm + sp + opt.intro + "</li>";
        /*SOW += "<li>" + opt.creation + sp + numscr + sp + opt.scorecard + "</li>";
        SOW += "<li>" + opt.creation + sp + numstaffr + sp + opt.staffing + "</li>";
        SOW += "<li>" + opt.creation + sp + numaer + sp + opt.agenteff + "</li></ul>";
        */
        SOW += "</ul>";
    }

    SOW += hours.part1 + sp + hrs + sp + hours.part2;

    SOW += "<br><br>" + end;

    textarea.innerHTML = SOW;

}

function wordSOW() {

    $("#page-content").wordExport();

}

function myCreateFunction() {
    var table = document.getElementById("tab");
    var row = table.insertRow(5);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Mobile Skills";
    cell2.innerHTML = makeDD("mobskill", 25);
    var row2 = table.insertRow(6);
    var cell21 = row2.insertCell(0);
    var cell22 = row2.insertCell(1);
    cell21.innerHTML = "Mobile Buttons";
    cell22.innerHTML = makeDD("mobbutt", 25);
    $('.selectpicker').selectpicker('refresh');
    var row3 = table.insertRow(7);
    var cell31 = row3.insertCell(0);
    var cell32 = row3.insertCell(1);
    cell31.innerHTML = "Mobile Windows";
    cell32.innerHTML = makeDD("mobwind", 25);
    $('.selectpicker').selectpicker('refresh');
}

function myDeleteFunction() {
    document.getElementById("tab").deleteRow(5);
    document.getElementById("tab").deleteRow(5);
    document.getElementById("tab").deleteRow(5);
}

function iType() {

	var selected = $(this).find("option:selected").val();
	if(selected == "Migration") {
		migration();
	
	}
	else{
	
		newexp();
	
	}
	$('.selectpicker').selectpicker('refresh');

}

function newexp() {

	resetDD();
	$('#numskill').attr('disabled',true);
	$('#pit').attr('disabled',true);
	$('#busrules').attr('disabled',true);
	$('#sso').attr('disabled',true);
	$('#ssotype').attr('disabled',true);
	$('#dbs').attr('disabled',true);
	$('#invites').attr('disabled',true);
	$('#campaigns').attr('disabled',true);
	$('#engagements').attr('disabled',true);
	$('#tcalls').attr('disabled',true);
	$('#numtrain').attr('disabled',true);
	$('#numatrain').attr('disabled',true);
	$('#numpm').attr('disabled',true);
	$('#numplm').attr('disabled',true);
	$('#hrs').attr('readonly','readonly');
}

function migration() {
	
	resetDD();
	$('#package').attr('disabled',true);
	$('#sso').attr('disabled',true);
	$('#pit').attr('disabled',true);
	$('#ssotype').attr('disabled',true);
	$('#numlob').attr('disabled',true);
	//$('#busrules').attr('disabled',true);
	$('#campaigns').attr('disabled',true);
	$('#engagements').attr('disabled',true);
	$('#numtrain').attr('disabled',true);
	$('#numatrain').attr('disabled',true);
	$('#numpm').attr('disabled',true);
	$('#numplm').attr('disabled',true);
	$('#hrs').attr('readonly','readonly');
	/*ptype
	sso
	ssotype
	numlob
	busrules
	campaigns
	engagements
	*/

}

function resetDD() {

	var dds = $('.selectpicker');
	
	for(var i = 0; i < dds.length; i++) {
	
		if(dds[i].disabled) {
			dds[i].removeAttribute('disabled');
			//dds[i].selectpicker('refresh');
		}
	}
}

window.onload = function() {
    loadDropDowns();
    initData();
    initTable(window.data);
    $('input[name=mobilecheck]').change(function() {

        if ($(this).is(':checked')) {
            myCreateFunction();
        } else {
            myDeleteFunction();
        }

    });
	$(function() {
		$('#itype').on('change', iType);
		//$('.selectpicker').on('change', update);
	});
	
	migration();
};
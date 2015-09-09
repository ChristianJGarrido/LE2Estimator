var data = [];
var hot;
var len;
var max;
var lastCell = null;
var items = ["Upgrade Project Planning",
			"Campaign Creation",
			"Engagement Migration",
			"Upgrade Kick Off Meeting",
			"Engagement Review Meeting",
			"Update Migration Strategy Document",
			"Validating Created Engagements",
			"Internal Engagement Testing",
			"Code Review Meeting and Delivery",
			"External Testing Meeting",
			"Agent Console Training (Remote)",
			"LiveEngage Console Training (Remote)",
			"Post Launch Review Meeting",
			"Post Launch Support",
			"Project Status Meetings", "Skill setup", "Campaign setup", "Engagement Set Up", "Live Engage Console Training", "Agent Training (Remote)", "Internal Testing", "External Testing Meetings (One hour for 2 people)", "Scheduled Project Meetings", "Post Launch Meetings (should at least be 2)", "A/B Test", "PIT"
			];
var mins = [30,
			20,
			20,
			60,
			60,
			60,
			20,
			20,
			60,
			60,
			180,
			60,
			60,
			300,
			30, 10, 30, 30, 60, 180, 60, 60, 30, 60, 300, 300
			];

var sc = [1,0,0,1,1,1, -1, -1, 1, 1, 1, 1, 1, 1, 3
			];

function initData() {

	for(var i = 0; i < items.length; i++)  {
	
		data.push({item: items[i], minutes: mins[i]});
	
	}

}

function initTable(dataArray) {
		var data =[];
		data.push(["Migration", "Minutes", "Scope", "Total Hrs", "", ""]);
		len = 15;
		max = len + 2;
		for(var i = 1; i <= len; i++) {
			var row = i + 1;
			var c = 'C'+row;
			var b = 'B'+row;
			var formula = "=(" + c + "*" + b + ")/60";
			var scope;
			if(row == 8 || row == 9 ) {
				scope = "=(c4)";
				//if(row == 11)
				//formula = "=if(C4<6,1,((C11*B11) / 60))";
			}
			else {
				scope = sc[i-1];
			}
			data.push([dataArray[i-1].item,dataArray[i-1].minutes,scope, formula,"", ""]);
		}
		data.push(["", "", "Total", "=SUM(D2:D"+ (len+1) + ")", 250, "=D"+max+"*E"+max+""]);
		data.push(["Extraneous Project Management", "", "", "=(D"+max+"*E"+(max+1)+")+D"+(max), 0.3, "=(F"+max+"*E"+(max+1)+")+F"+max]);
		data.push(["", "", "", "", "", ""]);
		data.push(["", "", "Project Quote", "=D"+(max+1), "", "=F"+(max+1)]);
		data.push(["","","","","",""]);
		data.push(["New New Deployment", "Minutes", "Scope", "Total Hrs", "", ""]);
		len = dataArray.length+ 4;
		max = len + 5;
		var add = 0;
		for(var i = 20; i <= len; i++) {
			var row = i + 3 + add;
			var c = 'C'+row;
			var b = 'B'+row;
			var formula = "=(" + c + "*" + b + ")/60";
			var scope;
			
			scope = 0;
			if(row != 32) {
			data.push([dataArray[i-5].item,dataArray[i-5].minutes,scope, formula,"", ""]);
			}
			else {
			data.push(["Add Ons", "", "", "","", ""]);
			i--;
			add = 1;
			}
		}
		//len = len - 1;
		data.push(["", "", "Total", "=SUM(D23:D"+ (len+1) + ")+ SUM(D33:D34)", 250, "=D"+max+"*E"+max+""]);
		data.push(["Extraneous Project Management", "", "", "=(D"+max+"*E"+(max+1)+")+D"+(max), 0.3, "=(F"+max+"*E"+(max+1)+")+F"+max]);
		data.push(["", "", "", "", "", ""]);
		data.push(["", "", "Project Quote", "=D"+(max+1), "", "=F"+(max+1)]);
		hot = new Handsontable($('#estimator')[0], {
			data: data,
			colHeaders: true,
			rowHeaders: true,
			formulas: true,
			autoWrapRow: true,
            minSpareRows: true,
			fillHandle: false
		});
		
	hot.updateSettings({
      
	beforeChange: function (changes, source) {
	    //alert(changes[0][0]);
		if ((changes[0][0] > 0) && (changes[0][0] <= len + 5) && (changes[0][1] == 2) ) {
			//alert('valid');
		  if(changes[0][3].match(/^\d+$/) == null) {
		  //alert(changes[0][3].match(/^\d+$/));
          changes[0][3] = changes[0][2];
		  }
        }
		else if (((changes[0][0] == 17) || (changes[0][0] == 35)) && (changes[0][1] == 4) ) {
			//alert('valid');
		  var change = changes[0][3];
		  if((changes[0][3].match(/^\s*(?=.*[1-9])0{0,1}(?:\.\d{1,2})?\s*$/) == null) && (changes[0][3].match(/^\s*(1\.0)|(1\.00)\s*$/) == null)) {
		  //alert(changes[0][3].match(/^\d+$/));
			changes[0][3] = changes[0][2];
		  }
		  if(change  .match(/^\s*1\s*$/) != null) {
			changes[0][3] = '1.00';
		  
		  }
        }
		else {
		
			changes[0][3] = changes[0][2];
		
		}
		
    },
	afterChange: function (changes, source) {
			updateSOW();
	
	}
   }
  );
}

function updateSOW() {

	var itype = $('#itype')[0].options[$('#itype')[0].selectedIndex].value;
	
	if(itype != "Migration") {
		$('#campaigns')[0].selectedIndex = hot.getDataAtCell(23,2);
		$('#engagements')[0].selectedIndex = hot.getDataAtCell(24,2);
		$('#numtrain')[0].selectedIndex = hot.getDataAtCell(26,2);
		$('#numatrain')[0].selectedIndex = hot.getDataAtCell(25,2);
		$('#tcalls')[0].selectedIndex = hot.getDataAtCell(28,2);
		$('#numpm')[0].selectedIndex = hot.getDataAtCell(29,2);
		$('#numplm')[0].selectedIndex = hot.getDataAtCell(30,2);
		if(parseInt(hot.getDataAtCell(33,2)) > 0) {
			$('#pit')[0].selectedIndex = '1';
		}
		else {
			$('#pit')[0].selectedIndex = '0';
		}
		$('#hrs')[0].value = getTotalHRS(22, 33, parseFloat(hot.getDataAtCell(35,4)));
		
	
	}
	else {
		$('#numtrain')[0].selectedIndex = hot.getDataAtCell(11,2);
		$('#numatrain')[0].selectedIndex = hot.getDataAtCell(12,2);
		$('#tcalls')[0].selectedIndex = hot.getDataAtCell(10,2);
		$('#numpm')[0].selectedIndex = hot.getDataAtCell(15,2);
		$('#numplm')[0].selectedIndex = hot.getDataAtCell(13,2);
		$('#hrs')[0].value = getTotalHRS(1, 15, parseFloat(hot.getDataAtCell(17,4)));
		
	}
	/*
	$('#numskill')[0].selectedIndex = hot.getDataAtCell(1,2);
	$('#numvispro')[0].selectedIndex = hot.getDataAtCell(3,2);
	$('#busrules')[0].selectedIndex = hot.getDataAtCell(4,2);
	$('#dbs')[0].selectedIndex = hot.getDataAtCell(9,2);
	$('#reptargets')[0].selectedIndex = hot.getDataAtCell(11,2);
	$('#scards')[0].selectedIndex = hot.getDataAtCell(12,2);
	$('#numstaffr')[0].selectedIndex = hot.getDataAtCell(14,2);
	$('#numaer')[0].selectedIndex = hot.getDataAtCell(15,2);
	$('#tcalls')[0].selectedIndex = hot.getDataAtCell(21,2);
	$('#numpm')[0].selectedIndex = hot.getDataAtCell(22,2);
	$('#numplm')[0].selectedIndex = hot.getDataAtCell(23,2);
	$('#hrs')[0].value = getTotalHRS();
	$('.selectpicker').selectpicker('refresh');
	*/
	$('.selectpicker').selectpicker('refresh');

}

function getTotalHRS(k, j, pad) {
	var sum = 0;
	for(var i=k;i <= j; i++) {
	
		if(i == 31) i++;
		var scope = parseInt(hot.getDataAtCell(i, 2));
		var min = parseInt(hot.getDataAtCell(i, 1));
		
		if(isNaN(scope)) {scope = parseInt(hot.getDataAtCell(3, 2));}
		sum += (scope * min)/60;
		
		//alert(sum +' ' + i);
	}
	var padding = pad * sum;
	//alert(sum);
	sum = sum + padding;
	//alert(sum);
	return Math.ceil(sum);
}



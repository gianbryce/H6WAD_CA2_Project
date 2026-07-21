/*
H6WD CA2-Smart Home Sustainability(Water & Energy ,SDG 6 & 7)
Written by Catherine Wanjiru
Energy Saving Calculator pages
1.The script reads 4input values from the form using DOM.
2.Validates them using if/else statements 
3.Calculates LED and heating savings.
4.Writes results back into the page using DOM ,with no page reload
*/
function calculateSavings(){
	//read input values from page
	let bulbCount =document.getElementById("bulb-count").value;
	let bulbHours=document.getElementById("bulb-hours").value;
	let unitPrice =document.getElementById("unit-price").value;
	let heatingBill =document.getElementById("heating-bill").value;
	
	//Convert text into numbers
	bulbCount=parseFloat(bulbCount);
	bulbHours=parseFloat(bulbHours);
	unitPrice=parseFloat(unitPrice);
	heatingBill=parseFloat(heatingBill);

	//validate the inputs using if statements
	if(isNaN(bulbCount)||bulbCount<0){
		document.getElementById("results").innerHTML="Please enter a valid number of bulbs.";
			return;
	}
	if(isNaN(bulbHours)||bulbHours<0||bulbHours>24){
		document.getElementById("results").innerHTML="Hours per day must be between 0 and 24.";
		return;
	}
	if(isNaN(unitPrice)||unitPrice<0){
		document.getElementById("results").innerHTML="Please enter a valid electricity price.";
		return;
	}
	if(isNaN(heatingBill)||heatingBill<0){
		document.getElementById("results").innerHTML="Please enter a valid monthly heating bill.";
		return;
	}
	//calculate LED lighting saving
	//60W old bulb replaced by 9W LED(ENERGY STAR)
	let wattsSaved=60-9;
	let dailyKwh=(bulbCount*bulbHours*wattsSaved)/1000;
	let ledSaving=Math.round(dailyKwh*365*unitPrice*100)/100;

	//Calculate smart heating saving-10% off annual bill
	let thermostatSaving=Math.round(heatingBill*12*0.10*100)/100;

	//total savings
	let totalSaving=Math.round((ledSaving+thermostatSaving)*100)/100;

	//Write results back to the page

	document.getElementById("results").innerHTML=
	"LED Lighting Saving:€"+ledSaving+"<br>"+
	"Smart Heating Saving:€"+thermostatSaving+"<br>"+
	"Total Annual Saving:€"+totalSaving;

}

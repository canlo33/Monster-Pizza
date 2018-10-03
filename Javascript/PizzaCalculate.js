// JavaScript Document

function PizzaCalculate() {
	var totalprice;
	var toppings;
	var form1 = document.getElementsByClassName("form1");
	var form2 = document.getElementsByClassName("form2");
	var form3 = document.getElementsByClassName("form3");
	var form4 = document.getElementsByClassName("form4");
	totalprice = totalprice + form1.size.selected.value;
	if(form2.cheese.checked === true){
		totalprice+=1.5;
		toppings+=", Extra Cheese";
	}
	if(form2.pineapple.checked === true){
		totalprice+=1.5;
		toppings+=", Pineapple";
	}
	if(form2.mushroom.checked === true){
		totalprice+=1.5;
		toppings+=", Mushroom";
	} 
	if(form2.meat.checked === true){
		totalprice+=1.5;
		toppings+=", Meat";
	}
	if(form2.mushroom.checked === true){
		totalprice+=1.5;
		toppings+=", Mushroom";
	}
	if(form2.peppers.checked === true){
		totalprice+=1.5;
		toppings+=", Green Peppers";
	}
	if(form2.olive.checked === true){
		totalprice+=1.5;
		toppings+=", Olive";
	}
	totalprice+=form3.bread.selected.value;
	toppings+="Your Toppings are: " + toppings;
	form4.text.value=totalprice;
	}
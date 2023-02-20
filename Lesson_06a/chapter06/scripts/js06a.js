"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
     Author: austin steffes
      Date:   2/20/23  

      Filename: js06a.js
 */

window.addEventListener("load", function(){
      let orderForm = document.forms.orderForm;
      let model = orderForm.elements.model;

      //select model selection list when form opens. focus your mouse/attention.
      model.focus();

      //add event listener for every form element.
      for (let i = 0; i <  orderForm.elements.length; i++)
      {
            orderForm.elements[i].addEventListener("change", calcOrder); 
      }

      //calling function.
      calcOrder();

      //creating another function inside the eventlistener.
      function calcOrder()
      { 
            let mIndex = model.selectedIndex;
            let mValue = model.options[mIndex].value;

            let qIndex = orderForm.elements.qty.selectedIndex;
            let quantity = orderForm.elements.qty[qIndex].value;

            let modelCost = mValue * quantity;
            orderForm.elements.modelCost.value = modelCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

            let planValue = document.querySelector('input[name="plan"]:checked').value;

            let planCost = planValue * quantity;
            orderForm.elements.planCost.value = planCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

            let subtotal = modelCost + planCost;
            orderForm.elements.subtotal.value = subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"});

            let salesTax = subtotal * .05;
            orderForm.elements.salesTax.value = salesTax.toLocaleString("en-US", {style: "currency", currency: "USD"});

            let totalCost = subtotal + salesTax;
            orderForm.elements.totalcost.value = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

            orderForm.elements.modelName.value = model.options[mIndex].text;
            let selectedPlan = document.querySelector('input[name="plan"]:checked');
            orderForm.elements.planName.value = selectedPlan.labels[0].textContent;
      }
}) 


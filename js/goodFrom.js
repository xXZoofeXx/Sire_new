// 3 form

// available 
var availableNumber_Burger = 5;
var availableNumber_Fries = 5;
var availableNumber_Soup = 0;
var availableNumber_Noodle = 5;
var availableNumber_DrpCoffee = 8;
var availableNumber_Dalgona = 4;
var availableNumber_Cola = 10;
var availableNumber_Cocktail = 8;
var availableNumber_CupCake = 6;
var availableNumber_QuafeBrade = 9;
var availableNumber_Sandwitch = 14;
var availableNumber_FruitSalad = 0;

// price
var goodPrice_Burger = 8.85;
var goodPrice_Fries = 7.85;
var goodPrice_Soup = 8.85;
var goodPrice_Noodle = 8.85;
var goodPrice_DrpCoffee = 8.85;
var goodPrice_Dalgona = 4.97;
var goodPrice_Cola = 3.50;
var goodPrice_Cocktail = 8.85;
var goodPrice_CupCake = 4.85;
var goodPrice_QuafeBrade = 7.85;
var goodPrice_Sandwitch = 3.97;
var goodPrice_FruitSalad = 3.97;

var BurgerPrice = document.querySelector("#BurgerPriceId");
BurgerPrice.innerHTML = "$" + goodPrice_Burger;
var FriesPrice = document.querySelector("#FriesPriceId");
FriesPrice.innerHTML = "$" + goodPrice_Fries;
var SoupPrice = document.querySelector("#SoupPriceId");
SoupPrice.innerHTML = "$" + goodPrice_Soup;
var NoodlePrice = document.querySelector("#NoodlePriceId");
NoodlePrice.innerHTML = "$" + goodPrice_Noodle;
var DrpCoffeePrice = document.querySelector("#DrpCoffeePriceId");
DrpCoffeePrice.innerHTML = "$" + goodPrice_DrpCoffee;
var DalgonaPrice = document.querySelector("#DalgonaPriceId");
DalgonaPrice.innerHTML = "$" + goodPrice_Dalgona;
var ColaPrice = document.querySelector("#ColaPriceId");
ColaPrice.innerHTML = "$" + goodPrice_Cola;
var CocktailPrice = document.querySelector("#CocktailPriceId");
CocktailPrice.innerHTML = "$" + goodPrice_Cocktail;
var CupCakePrice = document.querySelector("#CupCakePriceId");
CupCakePrice.innerHTML = "$" + goodPrice_CupCake;
var QuafeBradePrice = document.querySelector("#QuafeBradePriceId");
QuafeBradePrice.innerHTML = "$" + goodPrice_QuafeBrade;
var SandwitchPrice = document.querySelector("#SandwitchPriceId");
SandwitchPrice.innerHTML = "$" + goodPrice_Sandwitch;
var FruitSaladPrice = document.querySelector("#FruitSaladPriceId");
FruitSaladPrice.innerHTML = "$" + goodPrice_FruitSalad;

// btn clicker
document.addEventListener('click', function (e) {
    if (e.target.classList.contains("goodGrid-item-btn-plus")) {
        let CurrentAvailableNumberText = e.target.parentElement.parentElement.parentElement.querySelector("p.goodGrig-item-btn-info").textContent;
        let CurrentAvailableNumber = +CurrentAvailableNumberText.replace('Available Number: ', '');
        if (CurrentAvailableNumber == 0) {
            e.target.parentElement.querySelector("button.goodGrid-item-btn-plus").classList.add('goodGrid-item-btn-plus-inactive');
            e.target.parentElement.querySelector("button.goodGrid-item-btn-plus").classList.remove('goodGrid-item-btn-plus');
            /* e.target.parentElement.querySelector("button.goodGrid-item-btn-plus").setAttribute('disabled', ''); */
            e.target.parentElement.parentElement.parentElement.querySelector("p.goodGrig-item-btn-info").classList.add('goodGrig-item-btn-info-lighted');
        } else {
            ++e.target.parentElement.querySelector("input").value;

            let CurrentGoodValue = e.target.parentElement.querySelector("input").value;
            let CurrentGoodPriceText = e.target.parentElement.parentElement.parentElement.parentElement.querySelector("div.goodGrid-item-info p.goodGrid-item-info-text2").textContent;
            let CurrentGoodPrice = +CurrentGoodPriceText.replace('$', '');
            let CurrentPriceSum = (CurrentGoodValue * CurrentGoodPrice).toFixed(2);
            e.target.parentElement.parentElement.querySelector("p").innerHTML = "$" + CurrentPriceSum;


            if (CurrentGoodValue == CurrentAvailableNumber) {
                e.target.parentElement.querySelector("button.goodGrid-item-btn-plus").classList.add('goodGrid-item-btn-plus-inactive');
                e.target.parentElement.querySelector("button.goodGrid-item-btn-plus").classList.remove('goodGrid-item-btn-plus');
                /* e.target.parentElement.querySelector("button.goodGrid-item-btn-plus").setAttribute('disabled', ''); */
                e.target.parentElement.parentElement.parentElement.querySelector("p.goodGrig-item-btn-info").classList.add('goodGrig-item-btn-info-lighted');
            };

            // making table
            let CurrentGoodNameFull = e.target.parentElement.parentElement.parentElement.parentElement.querySelector("div.goodGrid-item-info p.goodGrid-item-info-text").textContent;
            let CurrentGoodName = CurrentGoodNameFull.replace(' ', '');
            let CurrentCreatedRawId = CurrentGoodName + 'TableId';
            let QCurrentCreatedRawId = '#' + CurrentCreatedRawId;
            if (CurrentGoodValue == 1) {
                $('.userOrder-SummaryTable .SummaryTableRaw-Head').after('<tr class="SummaryTableRaw" id=""><td><div class="SummaryTable-CellBox" id="TableDivName"><p>Name</p></div></td><td><div class="SummaryTable-CellBox" id="TableDivQ"><p>Q</p></div></td><td><div class="SummaryTable-CellBox" id="TableDivSum"><p>Sum</p></div></td></tr>');
                let CurrentCreatedRaw = $('.userOrder-SummaryTable .SummaryTableRaw');
                CurrentCreatedRaw = CurrentCreatedRaw[0];

                CurrentCreatedRaw.id = CurrentCreatedRawId;

                document.querySelector(`${QCurrentCreatedRawId} #TableDivName p`).innerHTML = CurrentGoodNameFull;
                document.querySelector(`${QCurrentCreatedRawId} #TableDivQ p`).innerHTML = CurrentGoodValue;
                document.querySelector(`${QCurrentCreatedRawId} #TableDivSum p`).innerHTML = ('$' + CurrentPriceSum);



            } else {

                document.querySelector(`${QCurrentCreatedRawId} #TableDivQ p`).innerHTML = CurrentGoodValue;
                document.querySelector(`${QCurrentCreatedRawId} #TableDivSum p`).innerHTML = ('$' + CurrentPriceSum);
            };

            /* console.log(document.querySelector('#SummaryTableTotalSum').textContent); */
            let CurrentFinalSumText = document.querySelector('#SummaryTableTotalSum').textContent;
            let CurrentFinalSum = +CurrentFinalSumText.replace('$', '');
            let NewCurrentFinalSum = (CurrentFinalSum + CurrentGoodPrice).toFixed(2);
            document.querySelector('#SummaryTableTotalSum').innerHTML = ('$' + NewCurrentFinalSum);

        }
    } else if (e.target.classList.contains("goodGrid-item-btn-min")) {
        if (e.target.parentElement.querySelector("input").value > 1) {
            --e.target.parentElement.querySelector("input").value;

            let CurrentGoodValue = e.target.parentElement.querySelector("input").value;
            let CurrentGoodPriceText = e.target.parentElement.parentElement.parentElement.parentElement.querySelector("div.goodGrid-item-info p.goodGrid-item-info-text2").textContent;
            let CurrentGoodPrice = +CurrentGoodPriceText.replace('$', '');
            let CurrentPriceSum = (CurrentGoodValue * CurrentGoodPrice).toFixed(2);
            e.target.parentElement.parentElement.querySelector("p").innerHTML = "$" + CurrentPriceSum;

            let CurrentAvailableNumberText = e.target.parentElement.parentElement.parentElement.querySelector("p.goodGrig-item-btn-info").textContent;
            let CurrentAvailableNumber = +CurrentAvailableNumberText.replace('Available Number: ', '');


            let CurrentGoodNameFull = e.target.parentElement.parentElement.parentElement.parentElement.querySelector("div.goodGrid-item-info p.goodGrid-item-info-text").textContent;
            let CurrentGoodName = CurrentGoodNameFull.replace(' ', '');
            let CurrentCreatedRawId = CurrentGoodName + 'TableId';
            let QCurrentCreatedRawId = '#' + CurrentCreatedRawId;
            document.querySelector(`${QCurrentCreatedRawId} #TableDivQ p`).innerHTML = CurrentGoodValue;
            document.querySelector(`${QCurrentCreatedRawId} #TableDivSum p`).innerHTML = ('$' + CurrentPriceSum);

            if (CurrentGoodValue == (CurrentAvailableNumber - 1)) {
                e.target.parentElement.querySelector("button.goodGrid-item-btn-plus-inactive").classList.add('goodGrid-item-btn-plus');
                e.target.parentElement.querySelector("button.goodGrid-item-btn-plus").classList.remove('goodGrid-item-btn-plus-inactive');
                e.target.parentElement.querySelector("button.goodGrid-item-btn-plus").removeAttribute('disabled');
                e.target.parentElement.parentElement.parentElement.querySelector("p.goodGrig-item-btn-info").classList.remove('goodGrig-item-btn-info-lighted');
            };
            let CurrentFinalSumText = document.querySelector('#SummaryTableTotalSum').textContent;
            let CurrentFinalSum = +CurrentFinalSumText.replace('$', '');
            let NewCurrentFinalSum = (CurrentFinalSum - CurrentGoodPrice).toFixed(2);
            document.querySelector('#SummaryTableTotalSum').innerHTML = ('$' + NewCurrentFinalSum);

        } else {
            e.target.parentElement.querySelector("input").value = "";
            e.target.parentElement.parentElement.querySelector("p").innerHTML = "$0.00";

            let CurrentGoodNameFull = e.target.parentElement.parentElement.parentElement.parentElement.querySelector("div.goodGrid-item-info p.goodGrid-item-info-text").textContent;
            let CurrentGoodName = CurrentGoodNameFull.replace(' ', '');
            let CurrentCreatedRawId = CurrentGoodName + 'TableId';
            let QCurrentCreatedRawId = '#' + CurrentCreatedRawId;
            document.querySelector(QCurrentCreatedRawId).remove();

            let CurrentGoodPriceText = e.target.parentElement.parentElement.parentElement.parentElement.querySelector("div.goodGrid-item-info p.goodGrid-item-info-text2").textContent;
            let CurrentGoodPrice = +CurrentGoodPriceText.replace('$', '');

            let CurrentFinalSumText = document.querySelector('#SummaryTableTotalSum').textContent;
            let CurrentFinalSum = +CurrentFinalSumText.replace('$', '');
            let NewCurrentFinalSum = (CurrentFinalSum - CurrentGoodPrice).toFixed(2);
            document.querySelector('#SummaryTableTotalSum').innerHTML = ('$' + NewCurrentFinalSum);
        };
    }
});

//Contact data form 

const OrderTypeInputChange = {
    addEventListener() {
        document.querySelector('#UserOrderTypeId').onclick = () => {
            if (document.querySelector('#UserOrderTypeId').value == "InCafe") {
                document.querySelector('#UserOrderTypeAdressId').classList.add('hidden');
                document.querySelector('#UserOrderTypeTimeId').classList.remove('hidden');
                document.querySelector('#UserOrderTypeAdressId').value = "";
            } else if (document.querySelector('#UserOrderTypeId').value == "Delivery") {
                document.querySelector('#UserOrderTypeAdressId').classList.remove('hidden');
                document.querySelector('#UserOrderTypeTimeId').classList.add('hidden');
                document.querySelector('#UserOrderTypeTimeId').value = "";
            }
        }
    }
};

OrderTypeInputChange.addEventListener();

const FormSubmitOrder = {
    addEventListener() {
        document.querySelector('#OrderFormButtonSubmit').onclick = () => {
            let Total = document.querySelector('#SummaryTableTotalSum').textContent;
            if (Total == "$0.00") {
                alert('Order Something First!');
            } else if (document.querySelector('#UserOrderTypeId').value == "") {
                alert('Choose the order type !');
            } else if (document.querySelector('#UserOrderFormName').value == "") {
                alert('Fill your name !');
            } else if (document.querySelector('#UserOrderFormPhone').value == "") {
                alert('Fill your phone number !');
            } else {
                document.querySelector('#TotalOrderSumInput').value = Total;
                document.querySelector('#UserOrderFormEnter').submit();
            }

        }
    }
};

FormSubmitOrder.addEventListener();

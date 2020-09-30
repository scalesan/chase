if (document.querySelector("#submitButton") !== null) {
document.getElementById("submitButton").onclick = function (e) {
    let urlparam = document.getElementById("inputValue").value;
    fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=" +
        urlparam +
        "&apikey=5KZBIG65DG43J3MN"
    )
      .then((res) => res.json())
      .then((out) => {
        console.log("Output: ", out);
      })
      .catch((err) => console.error(err));
  }
};


if (document.querySelector('#weeklySubmitButton') !== null) {
document.getElementById("weeklySubmitButton").onclick = function (e) {

    let urlparam2 = document.getElementById("weeklyInputValue").value;
    fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol= " +
        urlparam2 +
        "&apikey=5KZBIG65DG43J3MN"
    )
      .then((res) => res.json())
      .then((weekly) => {
        console.log("Output: ", weekly);
      })
      .catch((err) => console.error(err));
  }
};

if (document.querySelector("#yearlySubmitButton") !== null) {
document.getElementById("yearlySubmitButton").onclick = function (e) {
    let urlparam3 = document.getElementById("yearlyInputValue").value;
    fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_YEARLY&symbol=" +
        urlparam3 +
        "&apikey=5KZBIG65DG43J3MN"
    )
      .then((res) => res.json())
      .then((yearly) => {
        console.log("Output: ", yearly);
      })
      .catch((err) => console.error(err));
  }
}


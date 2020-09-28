document.getElementById("submitButton").onclick = function (e) {
  let urlparam = document.getElementById("inputValue").value;
  let response = fetch(
    "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=" +
      urlparam +
      "&apikey=5KZBIG65DG43J3MN"
  );
  console.log(response);
};

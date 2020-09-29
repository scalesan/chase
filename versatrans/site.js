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
};

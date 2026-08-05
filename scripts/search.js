function searchCompany() {
  let company = document.getElementById("companySearch").value;

  if (company === "") {
    document.getElementById("searchResult").innerHTML =
    "Please enter a company name.";
  } else {
    document.getElementById("searchResult").innerHTML =
    "Searching for: " + company;
  }
}

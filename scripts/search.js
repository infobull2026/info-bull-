console.log("New search file loaded");
function searchCompany() {

  let company = document.getElementById("companySearch").value.toUpperCase();

  let companies = {
    "NABIL": "Nabil Bank Ltd - Banking Sector",
    "NICA": "NIC Asia Bank - Banking Sector",
    "SHIVM": "Shivam Cement - Manufacturing Sector",
    "HDL": "Himalayan Distillery - Manufacturing Sector"
  };

  if (companies[company]) {
    document.getElementById("searchResult").innerHTML =
    companies[company];
  } 
  else if (company === "") {
    document.getElementById("searchResult").innerHTML =
    "Please enter a company name.";
  } 
  else {
    document.getElementById("searchResult").innerHTML =
    "Company not found. Try NABIL, NICA, SHIVM, or HDL.";
  }

}

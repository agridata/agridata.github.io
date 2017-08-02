var countyForm = $('#dropDown');

var imageSrc = [
  "Florida", "Alachua", "Baker", "Bay", "Bradford", "Brevard", "Broward", "Calhoun", "Charlotte", "Citrus", "Clay", "Collier", "Columbia", "Dade", "DeSoto", "Dixie", "Duval", "Flagler", "Franklin", "Gilchrist", "Glades", "Gulf", "Hardee", "Hendry", "Hernando", "Highlands", "IndianRiver", "Jackson", "Jefferson", "Lafayette", "Lee", "Leon", "Levy", "Liberty", "Madison", "Marion", "Martin", "Monroe", "Nassau", "Okaloosa", "Orange", "Osceola", "PalmBeach", "Pasco", "Polk", "Putnam", "SantaRosa", "StJohns", "StLucie", "Sumter", "Suwannee", "Taylor", "Union", "Volusia", "Wakulla", "Walton"
];

var imageList = Array ();
for (var i = 0; i <= 56; i++){
  imageList[i] = new Image(500, 500);
  imageList[i].src = imageSrc[i] + ".png";
}


countyForm.change(function(){
  var selectedImage = document.getElementById("dropDown").value;

  // var selectedImage = document.myForm.dropDown.options[document.myForm.dropDown.selectedIndex].value;
  document.theMap.src = imageList[selectedImage].src;
});

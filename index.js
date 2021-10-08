///////////// Bai 1
let input = [4, 5, 3, -6, 7, 9, 2, 5, 7, 2, 5, 7];
let arr = [];
for (let i = 0; i < input.length - 1; i++) {
  arr = [...arr, input[i] * input[i + 1]];
}

console.log("OUTPUT: ", Math.max(...arr));

////////// Bai 2
let input2 = [60, 40, 55, 75, 64, 56, 45];
let sum1 = null;
let sum2 = null;
let arr1 = [];
for (let i = 0; i < input2.length; i++) {
  if (i % 2 == 1) {
    sum1 += input2[i];
  } else {
    sum2 += input2[i];
  }
}
arr1 = [sum1, sum2];
console.log("OUTPUT: ", arr1);

//////////// Bai 3///////////////////////////
let url =
  "https://genk.vn/steve-jobs-tung-nhieu-lan-co-thuyet-phuc-dell-bo-windows-de-chuyen-sang-mac-os-20211006112628245.chn";
let $app = document.getElementById("app");

let $container = document.createElement("div");

let $title = document.createElement("h2");
$title.innerHTML = "Link Shortener";
// $title.className = 'text-center'
let inputValue = null;
let $textInput = document.createElement("div");
$textInput.className = "d-flex align-items-center justify-content-center";
$textInput.innerHTML = "Enter a Link: ";
let $input = document.createElement("input");
$input.className = "form-control w-25 ml-2";
$input.style.height = "45px";
$input.placeholder = "example.com";
$input.onchange = (event) => {
  console.log(event.target.value);
  inputValue = event.target.value;
};
let option = [];
let $btn = document.createElement("button");
$btn.innerHTML = ">";
$btn.className = "btn btn-primary ml-1 ";
$btn.style.height = "40px";
$btn.onclick = async (event) => {
  console.log(inputValue);

  if (inputValue) {
    $error.innerHTML = "";
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${inputValue}/very/long/link.html`
    );
    const myJson = await response.json();
    console.log(myJson.ok);
    if (myJson.ok) {
      option = [
        myJson.result["full_short_link"],
        myJson.result["full_short_link2"],
        myJson.result["full_short_link3"],
      ];
      $linkConten.innerHTML = option[0];
      $linkConten.href = option[0];
      $container.append($link);
    }
  } else {
    $textInput.append($error);
  }
};
let $error = document.createElement("div");
$error.className = "text-danger";
$error.innerHTML = "Error  input";
$textInput.append($input, $btn);

let $shortDomain = document.createElement("div");
let $textShortDomain = document.createElement("div");
$textShortDomain.innerHTML = "Short domain: ";

let $btnShrtco = document.createElement("button");
$btnShrtco.innerHTML = "shrtco.de";
$btnShrtco.className = " btn btn-primary mr-1";
$btnShrtco.onclick = () => {
  $btn9qr.className = "btn btn-secondary mr-1";
  $btnShrtco.className = " btn btn-primary mr-1";
  $btnShiny.className = "btn btn-secondary ";
  $linkConten.innerHTML = option[0] ? option[0] : '';
  $linkConten.href = option[0] ? option[0] : '';
  if (option) {
      console.log(option[0]);
    $container.append($link);
  }
};

let $btn9qr = document.createElement("button");
$btn9qr.innerHTML = "9qr.de";
$btn9qr.className = "btn btn-secondary mr-1";
$btn9qr.onclick = () => {
  $btn9qr.className = " btn btn-primary mr-1";
  $btnShrtco.className = " btn btn-secondary mr-1";
  $btnShiny.className = "btn btn-secondary";
  $linkConten.innerHTML = option[1] ? option[1] : '';
  $linkConten.href = option[1] ? option[1] : '';
  if (option) {
    $container.append($link);
  }
};

let $btnShiny = document.createElement("button");
$btnShiny.innerHTML = "shiny.link";
$btnShiny.className = "btn btn-secondary";
$btnShiny.onclick = () => {
  $btn9qr.className = "btn btn-secondary mr-1";
  $btnShrtco.className = "btn btn-secondary mr-1";
  $btnShiny.className = " btn btn-primary ";
  $linkConten.innerHTML = option[2] ? option[2] : '';
  $linkConten.href = option[2] ? option[2] : '';
  if (option) {
    $container.append($link);
  }
};

$shortDomain.append($textShortDomain, $btnShrtco, $btn9qr, $btnShiny);

let $link = document.createElement("div");
let $titleLink = document.createElement("div");
$titleLink.innerHTML = "Link generated!";
let $linkConten = document.createElement("a");

$link.append($titleLink, $linkConten);

$container.append($title, $textInput, $shortDomain);
$container.className = "";
$app.append($container);

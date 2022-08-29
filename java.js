"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  document.querySelector("#generate").addEventListener("click", showOutput);
}

function showOutput() {
  let input = document.querySelector("#input_text").value;
  let selection = document.querySelector("#selectfunction").value;

  console.log(`${input}`);
  // den virker - done
  if (selection == "first_character_uppercase_rest_lowercase") {
    let part1 = input.substring(0, 1).toUpperCase();
    let part2 = input.substring(1);
    output.innerHTML = `${part1}${part2}`;
  }
  // den virker - done
  else if (selection == "Find_first_name") {
    let firstname = input.split(" ", 1);
    output.innerHTML = `${firstname}`;
  }
  // den virker ikke - giver op
  else if (selection == "Find_length_firstname") {
    const firstSpace = input.indexOf(" ");
    let name = input.substring(0, firstSpace).lenght;
    // document.querySelector("#output").value = name;
    // let len = name.lenght;

    output.innerHTML = name;
  }
  // den virker - done
  else if (selection == "Find_middlename_startandend_position") {
    let firstSpace = input.indexOf(" ");
    let lastSpace = input.lastIndexOf(" ");
    let middleName = input.substring(firstSpace, lastSpace);
    output.innerHTML = middleName;
  }
  // den virker hvis du i input skriver .jpg eller .png bag et navn - ellers intet udkom- done
  else if (
    selection == "Check_if_filename_png_or_jpg" &&
    input.endsWith(".jpg") == true
  ) {
    output.innerHTML = "file is a jpg";
  } else if (
    selection == "Check_if_filename_png_or_jpg" &&
    input.endsWith(".png") == true
  ) {
    output.innerHTML = "file is a png";
  }
  // den virker ikke - giver op
  else if (selection == "Hide_password") {
    let len = input.lenght;
    let tegn = "*";
    output.innerHTML = tegn.repeat(len);
  }
  // den virker - done
  else if (selection == "Make_third_character_uppercase") {
    const name1 = input.substring(2, 3).toUpperCase();
    const part1 = input.substring(0, 2);
    const part2 = input.substring(3);
    output.innerHTML = `${part1}${name1}${part2}`;
  }
  // ved ikke hvordan den skal fikses
  else if (selection == "Make_character_uppercase") {
  }
}

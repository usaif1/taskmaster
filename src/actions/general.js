// function to capitalize first letter of string
export const capitalize = (subheading) => {
  var splitStr = subheading.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
};

//validate email
export const validEmail = (email) => {
  //eslint-disable-next-line
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(email) === false) {
    alert("Invalid Email Address");
    return false;
  }
  return true;
};

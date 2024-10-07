// string s-> ABCCVABCD
const minLength = (s) => {
    let stringArray = [];
    let i = s.length;
    while (i--) {
       if(s.includes("AB")) {
        stringArray = s.split("AB");
        s = stringArray.join("").trim();
       }
       if (s.includes("CD")) {
        stringArray = s.split("CD");
        s = stringArray.join("").trim();
       }
    }
    console.log(s.length);
    return s.length;
}
const str = "ABFCACD";
minLength(str);
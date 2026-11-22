document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  // LOGIN formasi yuborilganda
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Sahifa qayta yuklanishini to'xtatadi

      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value.trim();

      if (email !== "" && password !== "") {
        // Xohlasangiz foydalanuvchi ma'lumotini vaqtincha saqlab qo'yish mumkin
        localStorage.setItem("loggedInUser", email);

        // Boshqa sahifaga o'tish (home.html fayli shu papkada bo'lishi kerak)
        window.location.href = "home.html";
      } else {
        alert("Iltimos, Email va Password kiriting!");
      }
    });
  }

  // SIGN UP formasi yuborilganda ham o'tishni xohlasangiz
  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("signupName").value.trim();
      const email = document.getElementById("signupEmail").value.trim();
      const password = document.getElementById("signupPassword").value.trim();

      if (name !== "" && email !== "" && password !== "") {
        localStorage.setItem("loggedInUser", email);
        window.location.href = "home.html";
      }
    });
  }
});
for (const [key, value] of mySearchParams) {
}
for (const [key, value] of mySearchParams.entries()) {
}
const paramsString = "q=URLUtils.searchParams&topic=api";
const searchParams = new URLSearchParams(paramsString);

// Iterating the search parameters
for (const p of searchParams) {
  console.log(p);
}

console.log(searchParams.has("topic")); // true
console.log(searchParams.has("topic", "fish")); // false
console.log(searchParams.get("topic") === "api"); // true
console.log(searchParams.getAll("topic")); // ["api"]
console.log(searchParams.get("foo") === null); // true
console.log(searchParams.append("topic", "webdev"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=api&topic=webdev"
console.log(searchParams.set("topic", "More webdev"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=More+webdev"
console.log(searchParams.delete("topic"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams"
const paramsObj = { foo: "bar", baz: "bar" };
const searchParams = new URLSearchParams(paramsObj);

console.log(searchParams.toString()); // "foo=bar&baz=bar"
console.log(searchParams.has("foo")); // true
console.log(searchParams.get("foo")); // "bar"
// Assume page has location:
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams?foo=a
const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
console.log(searchParams.get("foo")); // a
const paramStr = "foo=bar&foo=baz";
const searchParams = new URLSearchParams(paramStr);

console.log(searchParams.toString()); // "foo=bar&foo=baz"
console.log(searchParams.has("foo")); // true
console.log(searchParams.get("foo")); // bar, only returns the first value
console.log(searchParams.getAll("foo")); // ["bar", "baz"]
// Creation from parsing a string: percent-encoding is decoded
const params = new URLSearchParams("%24%25%26=%28%29%2B");
// Retrieving all keys/values: only decoded values are returned
console.log([...params]); // [["$%&", "()+"]]
// Getting an individual value: use the decoded key and get the decoded value
console.log(params.get("$%&")); // "()+"
console.log(params.get("%24%25%26")); // null
// Setting an individual value: use the unencoded key and value
params.append("$%&$#@+", "$#&*@#()+");
// Serializing: percent-encoding is applied
console.log(params.toString());
// "%24%25%26=%28%29%2B&%24%25%26%24%23%40%2B=%24%23%26*%40%23%28%29%2B"
const params = new URLSearchParams();

params.append("%24%26", "value");
params.toString(); // "%2524%2526=value"
const rawData = "\x13à\x17@\x1F\x80";
const base64Data = btoa(rawData); // 'E+AXQB+A'

const searchParams = new URLSearchParams(`bin=${base64Data}`); // 'bin=E+AXQB+A'
const binQuery = searchParams.get("bin"); // 'E AXQB A', '+' is replaced by spaces

console.log(atob(binQuery) === rawData); // false
const rawData = "\x13à\x17@\x1F\x80";
const base64Data = btoa(rawData); // 'E+AXQB+A'

const searchParams = new URLSearchParams();
searchParams.append("bin", base64Data); // 'bin=E%2BAXQB%2BA'
const binQuery = searchParams.get("bin"); // 'E+AXQB+A'

console.log(atob(binQuery) === rawData); // true
const url = new URL("https://example.com/?a=b ~");
console.log(url.href); // "https://example.com/?a=b%20~"
console.log(url.searchParams.toString()); // "a=b+%7E"
// This should be a no-op, but it changes the URL's query to the
// serialization of its searchParams
url.searchParams.sort();
console.log(url.href); // "https://example.com/?a=b+%7E"

const url2 = new URL("https://example.com?search=1234&param=my%20param");
console.log(url2.search); // "?search=1234&param=my%20param"
url2.searchParams.delete("search");
console.log(url2.search); // "?param=my+param"
const emptyVal = new URLSearchParams("foo=&bar=baz");
console.log(emptyVal.get("foo")); // returns ''
const noEquals = new URLSearchParams("foo&bar=baz");
console.log(noEquals.get("foo")); // also returns ''
console.log(noEquals.toString()); // 'foo=&bar=baz'
// Tizimga kirishni tekshirish va keyingi sahifaga o'tkazish
    document.getElementById('login-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const pass = document.getElementById('login-pass').value;
      const savedUser = JSON.parse(localStorage.getItem('user'));

      const msg = document.getElementById('login-msg');
      if (savedUser && savedUser.email === email && savedUser.pass === pass) {
        msg.style.color = "#4ade80";
        msg.textContent = "Xush kelibsiz, " + savedUser.name + "! Sahifaga o'tilmoqda...";

        // 1 soniyadan keyin keyingi sahifaga o'tkazadi
        setTimeout(() => {
          window.location.href = "darslik.html"; // <-- Keyingi sahifa fayl nomi
        }, 1000);
      } else {
        msg.style.color = "#f87171";
        msg.textContent = "E-pochta yoki parol noto'g'ri!";
      }
    });
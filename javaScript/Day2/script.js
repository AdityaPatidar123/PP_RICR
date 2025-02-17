function sbmt() {
  let isValid = true;
  const txt = document.getElementById("text").value.trim();
  const em = document.getElementById("email").value.trim();
  const ps = document.getElementById("ps").value.trim();

  document.getElementById("text").classList.remove("error");
  document.getElementById("email").classList.remove("error");
  document.getElementById("ps").classList.remove("error");

  if (!/^[A-Za-z\s]+$/.test(txt) || txt.length < 3) {
    document.getElementById("text").classList.add("error");
    isValid = false;
  }

  if (
    !/^[A-Za-z\d._]+@(gmail|yahoo|outlook|hotmail).(com|in)$/.test(em) ||
    em.length < 9
  ) {
    document.getElementById("email").classList.add("error");
    isValid = false;
  }

  if (!/^[\d]+$/.test(ps) || ps.length < 5) {
    document.getElementById("ps").classList.add("error");
    isValid = false;
  }

  let gn = document.querySelector("input[name='gnder']:checked").value;

  let ql = [];

  document
    .querySelectorAll("input[name='qualification']:checked")
    .forEach((element) => {
      ql.push(element.value);
    });
  if (isValid) {
    console.log(txt, em, ps, gn, ql);
    document.getElementById("text").value = "";
    document.getElementById("email").value = "";
    document.getElementById("ps").value = "";
    
  }
}

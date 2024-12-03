const validation = () => {
  const name = document.querySelector('input[name="fio"]');
  const tel = document.querySelector('input[name="tel"]');

  const prefixNumber = (str) => {
    if (str === "7") {
      return "7 (";
    }
    if (str === "8") {
      return "+7 (";
    }
    if (str === "9") {
      return "7 (9";
    }
    return "7 (";
  }

  document.addEventListener("input", (e) => {
    if (e.target.classList.contains("tel")) {
      const input = e.target;
      const value = input.value.replace(/\D+/g, "");
      const numberLength = 11;

      let result;
      if (input.value.includes("+8") || input.value[0] === "8") {
        result = "";
      } else {
        result = "+";
      }
      for (let i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
          case 0:
            result += prefixNumber(value[i]);
            continue;
          case 4:
            result += ") ";
            break;
          case 7:
            result += "-";
            break;
          case 9:
            result += "-";
            break;
          default:
            break;
        }
        result += value[i];
      }
      input.value = result;
    }
  });
  
  name.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-Я]/g, '');
  });

  tel.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9+]/g, '');
  });
}

export default validation;
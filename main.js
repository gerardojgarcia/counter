let count = 0

const valueEl = document.getElementById('value')
btnsEl = document.querySelectorAll('.btn')



btnsEl.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')) {
            count--

        }else if (styles.contains('increase')) {
            count++
        }else {
            count = 0
        }
        if (count > 0) {
            value.style.color = "green";
          }
          if (count < 0) {
            value.style.color = "red";
          }
          if (count === 0) {
            value.style.color = "#222";
          }
          value.textContent = count;


    })

})



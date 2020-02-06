   const btnsArr = document.querySelectorAll('.faq__plus');

   btnsArr.forEach((btn, i) => {
      btn.addEventListener('click',  e => {
         const answers = document.querySelectorAll('.faq__content-answer');
         answers[i].classList.toggle('hide')
            if(answers[i].classList.contains('hide')) {
               btn.innerHTML = '<i class="fas fa-plus"></i>'
            } else {
               btn.innerHTML = '<i class="fas fa-minus"></i>'
            }
      })
   })

function sendEmail(event) {
  event.preventDefault();

  let parms = {
      name: document.getElementById('first-name').value,
      value: document.getElementById('yes').checked ? 'Sim' : 'Não'
  };
  console.log('parms', parms);

  // fetch('https://api.emailjs.com/api/v1.0/email/send', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     mode: 'no-cors',
  //     body: JSON.stringify({
  //         service_id: 'service_prcr3b1',
  //         template_id: 'template_2l7nq56',
  //         user_id: '8qg7okQzz9D-Ifk9D',
  //         template_params: parms
  //     })
  // }).then(response => {
  //     console.log('SUCCESS!', response);
  // }).catch(error => {
  //     console.log('FAILED...', error);
  // });
}
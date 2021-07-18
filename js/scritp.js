const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const Form = document.getElementById('form')
const ButtonSubmit = document.querySelector('.subscribe__submit')
const Input = document.querySelector('.subscribe__input')
const MessageError = document.querySelector('.error')
const MessageExit = document.querySelector('.modal')


const ValidateEmail = (e)=>{
  e.preventDefault()
  if(emailRegex.test(Input.value)){
    Input.classList.remove('error--email')
    MessageError.classList.remove('show--error')
    Input.value = ''
    MessageExit.classList.add('modal--show')
  }else{
    Input.classList.add('error--email')
    MessageError.classList.add('show--error')
  }
}

Form.addEventListener('submit',(e)=>{
  ValidateEmail(e)
});

MessageExit.children[0].children[2].addEventListener('click',()=>MessageExit.classList.remove('modal--show'))

ButtonSubmit.addEventListener('click',(e)=>{
  ValidateEmail(e)
})
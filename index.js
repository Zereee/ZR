window.onload = function() {
  const check = word => {
    if (word.length > 8) {
      return '<span class="hightlight">' + word + '</span>'
    } else {
      return word
    }
  }

  const task = document.querySelector("#task")
  task.innerHTML = task
    .innerText
    .trim()
    .split(' ')
    .map(check)
    .join(' ') ;
}

const task = document.querySelector('.some_text');
task.textContent = task.textContent.replace(/\?/g, '😧').replace(/\!/g, '😱');

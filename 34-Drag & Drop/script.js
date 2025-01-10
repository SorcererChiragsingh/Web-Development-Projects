document.addEventListener('DOMContentLoaded', () => {
    const emptyDivs = document.querySelectorAll('.empty');
  
    emptyDivs.forEach(div => {
      div.style.backgroundColor = getRandomColor();
    });
  });
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  const fill = document.querySelector('.fill');
  const empties = document.querySelectorAll('.empty');
  
  fill.addEventListener('dragstart', dragStart);
  fill.addEventListener('dragend', dragEnd);
  
  for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
  }
  
  function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
  }
  
  function dragEnd() {
    this.className = 'fill';
  }
  
  function dragOver(e) {
    e.preventDefault();
  }
  
  function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
  }
  
  function dragLeave() {
    this.className = 'empty';
  }
  
  function dragDrop() {
    this.className = 'empty';
    this.append(fill);
    this.style.backgroundColor = getRandomColor(); // Change color after drop
  }
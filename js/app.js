const createBtn = document.getElementById('add');

createBtn.addEventListener('click', () => addEntry());

let addEntry = (text = '') => {
  const entry = document.createElement('div');
  entry.classList.add('entry');
  entry.innerHTML = `

  <div class="card shadow-sm p-2">
  <div class="card-body">
      <div class="d-flex tools justify-content-end gap-2">
          <button class="btn btn-warning"><i class="far fa-edit btn-edit"></i></button>
          <button class="btn btn-warning"> <i class="far fa-trash-alt btn-delete"></i></button>
      </div>
     
      <input class='card-title'type="text" placeholder="Title">
      <div class="${text ? '' : 'hidden'} main">
          <textarea class="${text ? 'hidden' : ''}"card-text main">

         
          
          </textarea>
      </div>                        
      <a href="#" class="btn btn-warning">Go somewhere</a>
  </div>
</div>
  `;

  const deleteBtn = entry.querySelector('.btn-delete');
  const editBtn = entry.querySelector('.btn-edit');
  const main = entry.querySelector('.main');
  const textArea = entry.querySelector('textarea');

  deleteBtn.addEventListener('click', () => {
    entry.remove();
  });

  let cardParent = document.getElementById('card-container-body');
  cardParent.appendChild(entry);
};

function updateStorage() {
  let notesText = document.querySelectorAll('textarea');
  let notes = [];

  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem('notes', JSON.stringify(notes));
}

//TARGETING THE ADD BUTTON & SETTING AN EVENT

const addBtn = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
  notes.forEach((note) => addNote(note));
}

addBtn.addEventListener('click', () => addNote(''));

//DEFINING THE ADD NOTE FUNCTION

function addNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');
  note.classList.add('col-md');
  // note.classList.add('my-sm-2');

  note.innerHTML = `

  <div class="card my-2 shadow-sm p-2">
      <div class="card-body">
          <div class="d-flex tools justify-content-end gap-2">
              <button class="btn btn-outline-warning btn-edit"><i class="far btn-style fa-edit"></i></button>
              <button class="btn btn-outline-warning btn-delete"> <i class="far btn-style fa-trash-alt"></i></button>
          </div>

          <div class="py-4 main ${text ? '' : 'hidden'}">
          </div>
          <textarea class=" py-4 card-text ${
            text ? 'hidden' : ''
          }" placeholder='Message'></textarea>
      </div>
  `;

  //TARGETING THE PARENT BODY

  let cardParent = document.querySelector('.row');

  //TARGETING THE ELEMENTS

  const deleteBtn = note.querySelector('.btn-delete');
  const editBtn = note.querySelector('.btn-edit');
  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  //TARGETING TEXT AREA

  textArea.value = text;
  main.innerHTML = marked(text);

  //DELETING A NOTE

  deleteBtn.addEventListener('click', () => {
    note.remove();

    updateStorage();
  });

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });

  //EVENTLISTENER ON TEXTAREA

  textArea.addEventListener('input', (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);
    updateStorage();
  });

  //ADDING NEW DIV TO PARENT

  cardParent.appendChild(note);
}

//INTERACTING WITH LOCAL STORAGE

function updateStorage() {
  const notesText = document.querySelectorAll('textarea');
  const notes = [];
  notesText.forEach((note) => notes.push(note.value));
  localStorage.setItem('notes', JSON.stringify(notes));
}

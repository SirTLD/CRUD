const createBtn = document.getElementById('add');

createBtn.addEventListener('click', () => addEntry());

let addEntry = (text = '') => {
  const entry = document.createElement('div');
  entry.classList.add('entry');
  entry.innerHTML = `

  <div class="card shadow-sm p-2">
  <div class="card-body">
      <div class="d-flex tools justify-content-end gap-2">
          <button class="btn btn-outline-warning"><i class="far fa-edit btn-edit"></i></button>
          <button class="btn btn-outline-warning"> <i class="far fa-trash-alt btn-delete"></i></button>
      </div>
      <h3 class="card-title">Card title</h3>

      <div class="${text ? '' : 'hidden'} main">
          <textarea class="${
            text ? 'hidden' : ''
          }"card-text main">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, assumenda. Nam
              saepe tenetur cum aperiam corporis ducimus excepturi illo? Harum!</textarea>
      </div>                        
      <a href="#" class="btn btn-warning">Go somewhere</a>
  </div>
</div>



  `;

  let cardParent = document.getElementById('card-container-body');
  cardParent.appendChild(entry);
};

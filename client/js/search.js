async function main() {
  let data = await fetch("js/tmp.json");
  let people = await data.json();
  console.log(people);



  const list = document.querySelector("#list");

  function setList(group) {
    clearList();
    for (const person of group) {
      const item = document.createElement('li');
      item.classList.add('list-group-item');
      const text = document.createTextNode(person.title)
      item.appendChild(text);
      list.appendChild(item);
    }
    if (group.length === 0) {
      setNoResults()
    }
  }

  function clearList() {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }

  function setNoResults() {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const text = document.createTextNode('Немає результатів пошуку')
    item.appendChild(text);
    list.appendChild(item);
  }

  function gerRelevancy(value, searchTerm) {
    if (value === searchTerm) {
      return 2;
    } else if (value.startsWith(searchTerm)) {
      return 1;
    } else if (value.includes(searchTerm)) {
      return 0;
    } else {
      return -1;
    }
  }

  const searchInput = document.getElementById("search");

  searchInput.addEventListener('input', (event) => {
    let value = event.target.value;
    if (value && value.trim().length > 0) {
      value = value.trim().toLowerCase();
      setList(people.filter(person => {
        return person.title.toLowerCase().includes(value);
      }).sort((personA, personB) => {
        return gerRelevancy(personB.title.toLowerCase(), value) - gerRelevancy(personA.title.toLowerCase(), value)
      }));
    } else {
      clearList()
    }
  });

  //ul
  //style element of ul
  list.style.background = "white";
}

main()
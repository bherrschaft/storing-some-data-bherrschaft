document.addEventListener('DOMContentLoaded', function() {
    // Update the 'Apples' item to say 'Granny Smith Apples'
    const applesItem = document.querySelector('#list li:nth-child(2)');
    applesItem.textContent = 'Granny Smith Apples';
  
    // Remove 'Oat Milk' from the list
    const oatMilkItem = document.querySelector('#list li:nth-child(4)');
    oatMilkItem.remove();
  
    // Add an item 'Kombucha'
    const kombuchaItem = document.createElement('li');
    kombuchaItem.textContent = 'Kombucha';
    document.getElementById('list').appendChild(kombuchaItem);
  
    // Clear the list and programmatically add items from the array ['protein bars', 'almonds', 'peanut butter']
    const newListItems = ['protein bars', 'almonds', 'peanut butter'];
    const listContainer = document.getElementById('list');
    listContainer.innerHTML = ''; // Clear existing list items
  
    newListItems.forEach(item => {
      const newItem = document.createElement('li');
      newItem.textContent = item;
      listContainer.appendChild(newItem);
    });
  
    // Add the class 'important' to the almonds item
    const almondsItem = document.querySelector('#list li:nth-child(2)');
    almondsItem.classList.add('important');
  });
  
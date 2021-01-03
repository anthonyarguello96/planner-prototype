const inputField = document.getElementById('inputField');
const toDoContainer = document.getElementById('to-do-items-container');
const arr = [];
const addBtn = document.getElementById('add-to-do');
addBtn.addEventListener('click', () => {
  const toDo = document.createElement('p');
  toDo.innerText = inputField.value;
  arr.push(toDo.innerText);
  toDoContainer.appendChild(toDo);
  inputField.value = '';
  toDo.addEventListener('click', () => {
    toDo.classList.add('done');
  });
  toDo.addEventListener('dblclick', () => {
    toDoContainer.removeChild(toDo);
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJpbnB1dEZpZWxkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvRG9Db250YWluZXIiLCJhcnIiLCJhZGRCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwidG9EbyIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJ2YWx1ZSIsInB1c2giLCJhcHBlbmRDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFuQjtBQUNBLE1BQU1DLGFBQWEsR0FBRUYsUUFBUSxDQUFDQyxjQUFULENBQXdCLHVCQUF4QixDQUFyQjtBQUNBLE1BQU1FLEdBQUcsR0FBRyxFQUFaO0FBQ0EsTUFBTUMsTUFBTSxHQUFHSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBZjtBQUVBRyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLE1BQUk7QUFDbkMsUUFBTUMsSUFBSSxHQUFHTixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjtBQUNBRCxFQUFBQSxJQUFJLENBQUNFLFNBQUwsR0FBaUJULFVBQVUsQ0FBQ1UsS0FBNUI7QUFDQU4sRUFBQUEsR0FBRyxDQUFDTyxJQUFKLENBQVNKLElBQUksQ0FBQ0UsU0FBZDtBQUNBTixFQUFBQSxhQUFhLENBQUNTLFdBQWQsQ0FBMEJMLElBQTFCO0FBQ0FQLEVBQUFBLFVBQVUsQ0FBQ1UsS0FBWCxHQUFtQixFQUFuQjtBQUNBSCxFQUFBQSxJQUFJLENBQUNELGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLE1BQUk7QUFDakNDLElBQUFBLElBQUksQ0FBQ00sU0FBTCxDQUFlQyxHQUFmLENBQW1CLE1BQW5CO0FBQ0QsR0FGRDtBQUdBUCxFQUFBQSxJQUFJLENBQUNELGdCQUFMLENBQXNCLFVBQXRCLEVBQWtDLE1BQUk7QUFDcENILElBQUFBLGFBQWEsQ0FBQ1ksV0FBZCxDQUEwQlIsSUFBMUI7QUFDRCxHQUZEO0FBR0QsQ0FaRCIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0RmllbGQnKTtcbmNvbnN0IHRvRG9Db250YWluZXIgPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0by1kby1pdGVtcy1jb250YWluZXInKTtcbmNvbnN0IGFyciA9IFtdO1xuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10by1kbycpO1xuXG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICBjb25zdCB0b0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0b0RvLmlubmVyVGV4dCA9IGlucHV0RmllbGQudmFsdWU7XG4gIGFyci5wdXNoKHRvRG8uaW5uZXJUZXh0KTtcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvKTtcbiAgaW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xuICB0b0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICB0b0RvLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgfSk7XG4gIHRvRG8uYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKT0+e1xuICAgIHRvRG9Db250YWluZXIucmVtb3ZlQ2hpbGQodG9Ebyk7XG4gIH0pO1xufSk7XG4iXX0=
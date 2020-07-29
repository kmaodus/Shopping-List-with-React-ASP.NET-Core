# Shopping list app

Testing ASP.NET Core Web API based on a MSSQL Server database with React.js for frontend.



react-app file structure
-------------

● src
+---● actions
|   |
|   |-- api.js (handle all http request)
|   |-- product.js (Redux actions & action creators) 
|   |-- shoppingList.js (Redux actions & action creators) 
|   |-- store.js (configure redux store)
|
+---● components
|   |
|   |--ProductForm.js (form operations) - child
|   |--Product.js  (list of records) - parent
|   |--ShopingListForm.js (form operations) - child
|   |--ShopingList.js  (list of records) - parent
|   |--useForm.js (handles common form opearations)
|
|---● reducers
|   |
|   |--product.js
|   |--shoppingList.js
|   |--index.js
|
|-- App.js
|-- index.js
|-- index.css


redux, react-redux, redux-thunk

actions - create, update, delete etc ,data 
reducers
store

cmpnt -> dispatch(action) -> reducer -> cmpnt
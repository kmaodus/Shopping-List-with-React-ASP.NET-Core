
# Shopping list app

  

Testing ASP.NET Core 3.1 Web API based on a MSSQL Server database with React.js for frontend with Redux and React Hooks.



**Material UI** for styling. https://material-ui.com/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Chrome extension**: https://github.com/zalmoxisus/redux-devtools-extension

  

**Tools used:**

 - Microsoft SQL Server
 -  Visual Studio 2019
 -  Visual Studio Code
 -  Git bash
 -  GitKraken
 - Postman





  

## Setup

Check your connection string inside appsettings.json -->
*.\ShoppingListReact_ASP.NET_API\ShoppingList.Test\WebAPI\appsettings.json*

In my case it is: 
**"ShoppingListDbContext": 
"Server=LocalDb)\\MSSQLLocalDB;Database=shoppingListTest;Trusted_Connection=True;MultipleActiveResultSets=True;"**

Inside Visual Studio Package Manager Console run ***Update-Database*** command to create the database to the latest migration.

If that's not working please run the SQL scripts: 

 - **CreateDatabase.sql**
 - **ImportData.sql**

After you start the project it should be running on http://localhost:60528 .
<br/>

In the **react-app** directory, you can run:

  

### `npm install`
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
# DPS Frontend Coding Challenge

This repository includes the code for a simple frontend application that allows searching for users and filtering through them, created as part of the DPS Frontend Coding Challenge. 

## Project Structure

This project structure focuses on the most important files in this project. 

```
dps-react-challenge
├── README.md
└── src
    ├── node_modules                    Installed node modules (do not touch)
    ├── assets                          Contains assets for display
    ├── components                      Contains custom built UI components used in the views
    │   ├── FilterBar.tsx               Component for filtering users by name, city, or birthday
    │   └── UserTable.tsx               Component for displaying the filtered user list
    ├── services                    
    │   └── api.ts                      Defines API calls to the endpoint
    ├── types                           Contains the interface that defines the structure of users
    ├── views
    │   └── HomepageView.tsx            Main displayed page                         
    ├── App.tsx                         Defines the main application component
    └── main.tsx                        Sets up the React root and renders the App component into the DOM

```

## Project Description

This project offers a user-friendly, responsive interface to search for a user listed in the  https://dummyjson.com/users endpoint. It allows searching for a specific user by first or last name and filtering through all users' cities or birthdays leveraging React, Typescript, Material-UI, and Vite.


## Get Started

### Application Requirements
  - Node.js (LTS)
  - npm for dependency management

### Run the Application

1. Clone respository using `git clone https://github.com/katjanakosic/dps-react-challenge`
2. Client:
   1. In the `dps-react-challenge` folder install the necessary dependencies using `npm install`
   2. Start the app using `npm run dev`


## Usage
1. Open http://localhost:3000 in your browser (Google Chrome is recommended).
2. Enter a username in the search field on the homepage. Matching users will be displayed in the table below.
3. Use the FilterBar to filter the displayed user list by city or birthday.
4. Click on a user row to display their personal information.


## Requirements

### Minimal Requirements
- UI Implementation: Implement the user interface according to the provided design mockup.
- Data Integration: Utilize the endpoint https://dummyjson.com/users to fetch user data. If no filter is applied all data is displayed.
- Client-side Filtering
    * Name Filter: An input field that dynamically filters by firstName or lastName as you type.
    * City Filter: A dropdown that lists all cities present in the data alphabetically. Users can select a city to filter the list accordingly.
    * Highlight Feature: A checkbox that when checked, highlights the oldest users within each city.

### Extra Features
- **No Match Handling**: Handles the case that no matched users are found and displays a corresponding message.
- **User Details Modal**: When a user clicks a row in the table, a modal that shows extra details about that user—like email, phone, and email provided by the dummyjson API is displayed. 
- **Responsive UI**: The application is designed to work seamlessly on various screen sizes.
- **DPS Styling**: The application reflects the company's branding and colors.


## Future Improvements

1. **Enhanced Filtering and Sorting**: Allow additional filtering options (e.g., age, maiden name, gender).
2. **Dark Mode Toggle**: Provide a toggle in the UI that switches between light and dark themes.


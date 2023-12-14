# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Certainly! Here's a suggested documentation for your React component, which you can include in your README file:

---

# ReusableTable Component Documentation

The `ReusableTable` component is a versatile and customizable table component built with React and Material-UI. It provides essential functionalities such as sorting, searching, filtering, and pagination, making it suitable for a wide range of data display scenarios.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Examples](#examples)

## Installation

To use the `ReusableTable` component in your React project, follow these steps:

1. Install the necessary dependencies:

   ```bash
   npm install @material-ui/core @mui/material
   ```

2. Copy and paste the `ReusableTable.js` file into your project.

3. Import the component into your desired file:

   ```javascript
   import ReusableTable from './path/to/ReusableTable';
   ```

## Usage

To use the `ReusableTable` component, simply include it in your React application and pass the required data and configuration as props.

```javascript
import React from 'react';
import ReusableTable from './path/to/ReusableTable';

const YourComponent = () => {
  // Define your data and columns
  const data = [...]; // Your data array
  const columns = [...]; // Your columns configuration

  return <ReusableTable data={data} columns={columns} />;
};

export default YourComponent;
```

## Props

The `ReusableTable` component accepts the following props:

- `data` (Array): An array of objects representing the data to be displayed in the table.

- `columns` (Array): An array of objects specifying the configuration for each table column.

- `rowsPerPageOptions` (Array): An optional array specifying the available options for rows per page in the pagination control. Default is `[5, 10, 25]`.

## Examples

### Sorting

The table supports column sorting. Click on a column header to toggle between ascending and descending order.

### Searching

Utilize the search bar to filter the displayed data based on a case-insensitive search query.

### Filtering

Click the filter icon to reveal a menu allowing the user to toggle the visibility of specific columns.

### Pagination

Navigate through the data using the pagination control at the bottom of the table. Choose the number of rows to display per page.

Feel free to customize and adapt the component to suit your specific requirements.

---

Feel free to modify this documentation based on any additional features or customization you might have in your `ReusableTable` component.
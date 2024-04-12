Goal of this project is to provide overview of e-commerce revenue, customer satisfaction and logistics partner delivery service through a dashboard. By consolidating improvement areas for business into single view, insights can be derived from data faster and more conveniently

![dashboard](./imgs/olist/dashboard.png)

### Data Preparation

Work done in this step are

- CSV data joining according to [table relationships](https://i.imgur.com/HRhd2Y0.png) defined in data source
    
    **Reason :** To get complete set of attributes from normalized data

![joining](./imgs/olist/joining.png)

- creating calculated fields such as difference in sales from previous month, count of delayed deliveries, percent of orders rated less than average rating etc.
    
    **Reason :** To derive additional fields especially when filtering by parameter is not applicable

![calculation](./imgs/olist/calculation.png)

- mapping of customer locations in dataset to county names available in Tableau
    
    **Reason :** To make data consistent in terms of geographic level and to create visualization that is easy to look at without zooming
    

![mapping](./imgs/olist/mapping.png)

- grouping of product category names
    
    **Reason :** To reduce cardinality of product category names for ease of visualization

![grouping](./imgs/olist/grouping.png)

### Data Visualization

Work done in this step are

- creating order year, order month and customer state parameters
    
    **Reason :** To use the parameter values for data filtering
    
- visualization of sales accompanied with year to date sales and difference in sales from previous calendar month
    
    **Reason :** To summarize revenue generated throughout the month and year (when the month ended) and to provide comparison with last month sales

![revenue](./imgs/olist/sales.png)

- displaying average of order ratings, percent of orders rated and percent of orders rated less than the average
    
    **Reason :** To provide overview of customer satisfaction along with customer feedback rate and rate of orders that were perceived as dissatisfactory than average

![order-ratings](./imgs/olist/ratings.png)

- summarization of delayed order deliveries in terms of count, proportion and worst case
    
    **Reason :** To highlight whether improvements are needed in delivery service which also have effect on customer satisfaction

![delayed-deliveries](./imgs/olist/delays.png)

- map visualization of state counties with at least one order made in selected calendar month
    
    **Reason :** To provide aggregated measures similar to state level and additionally provide the contribution of county sales to state level revenue

![county-map](./imgs/olist/county.png)

- making use of bar chart to represent sales by product category group
    
    **Reason :** To determine product classifications that are major source of income and the extent to which those classifications contribute towards total revenue

![category-sales](./imgs/olist/category-sales.png)

- creating action that is triggered upon clicking a county in map visualization
    
    **Reason :** To summarize revenue by product classification at county level of detail

![county-category-sales](./imgs/olist/filtered-category-sales.png)

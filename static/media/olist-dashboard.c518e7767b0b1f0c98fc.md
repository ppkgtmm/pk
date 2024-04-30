### Data Preparation

Work done in this step are

1. joining CSV data according to [table relationships](https://i.imgur.com/HRhd2Y0.png) defined in data source to get complete set of attributes from normalized data

![joining](./imgs/olist/joining.png)

2. defining calculation such as difference in sales from previous month, percent of orders rated less than average rating and etc. to derive additional metrics beyond current filter

![calculation](./imgs/olist/calculation.png)

3. mapping customer locations to county names available in Tableau for data consistency in terms of geographic level and to  visualize locations as area which is easy to comprehend
    

![mapping](./imgs/olist/mapping.png)

4. grouping product category names to reduce cardinality of the categories and to increase user friendliness of dashboard

![grouping](./imgs/olist/grouping.png)

### Data Visualization

Work done in this step are

1. creating order year, order month and customer state parameters to use for data filtering
2. visualizing sales accompanied with year to date sales and difference in sales from last calendar month for comparison

![revenue](./imgs/olist/sales.png)

3. displaying average of order ratings, percent of orders rated and percent of orders rated less than the average to provide overview of customer satisfaction, customer feedback rate and proportion of orders perceived as dissatisfactory than average

![order-ratings](./imgs/olist/ratings.png)

4. summarizing delayed order deliveries in terms of count, proportion and worst case to highlight if improvements are required in delivery service since it also impacts customer satisfaction

![delayed-deliveries](./imgs/olist/delays.png)

5. visualizing contribution of county sales to state level revenue and summarizing a subset of state level measures for each county

![county-map](./imgs/olist/county.png)

6. representing sales by product category group using bar chart to highlight top selling group for filtered location

![category-sales](./imgs/olist/category-sales.png)

7. creating action that is triggered upon clicking a county in map to summarize revenue by product category for the county

![county-category-sales](./imgs/olist/filtered-category-sales.png)

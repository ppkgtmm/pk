### 🌻 Data Preparation

1. Joined normalized CSV data according to table relationships to get complete set of attributes

![joining](./imgs/olist/joining.png)

2. Defined calculation such as difference in sales from previous month, percent of orders rated less than average rating and etc. to derive additional metrics beyond current filter

![calculation](./imgs/olist/calculation.png)

3. Mapped customer locations to county names in Tableau to standardize geographic level and to visualize the locations as polygons instead of points for tidiness
    

![mapping](./imgs/olist/mapping.png)

4. Grouped similar product categories to reduce cardinality of the product category names and to increase user friendliness of dashboard

![grouping](./imgs/olist/grouping.png)

### 📊 Data Visualization

1. Created order year, order month and customer state parameters for data filtering
2. Visualized monthly sales along with difference in sales from last calendar month and year to date sales for comparison

![revenue](./imgs/olist/sales.png)

3. Displayed average order ratings, percent of orders rated and percentage of orders rated less than the average to provide overview of customer satisfaction, customer feedback rate and proportion of orders perceived as dissatisfactory than average

![order-ratings](./imgs/olist/ratings.png)

4. Summarized delayed order deliveries as count, proportion and worst case (days) to highlight if delivery service needs to be improved

![delayed-deliveries](./imgs/olist/delays.png)

5. Visualized contribution of county sales to state level revenue and summarized subset of state level metrics for each county

![county-map](./imgs/olist/county.png)

6. Presented revenue by product category through bar chart to highlight top selling categories for filtered location

![category-sales](./imgs/olist/category-sales.png)

7. Applied Tableau action on map plot to filter data used in bar chart with the selected county

![county-category-sales](./imgs/olist/filtered-category-sales.png)

# E-Commerce Dashboard

Goal of this project is to provide overview of e-commerce revenue, customer satisfaction and logistics partner delivery service through a dashboard. By consolidating improvement areas for business into single view, insights can be derived from data faster and more conveniently

![Untitled](E-Commerce%20Dashboard%2076500939c8144497929e93b6b2e197f1/Untitled.png)

### Data Preparation

Work done in this step are

- CSV data joining according to [table relationships](https://i.imgur.com/HRhd2Y0.png) defined in data source
    
    **Reason :** To get complete set of attributes from normalized data
    

![Screenshot 2566-10-09 at 21.56.07.png](E-Commerce%20Dashboard%2076500939c8144497929e93b6b2e197f1/Screenshot_2566-10-09_at_21.56.07.png)

- creating calculated fields such as difference in sales from previous month, count of delayed deliveries, percent of orders rated less than average rating etc.
    
    **Reason :** To derive additional fields especially when filtering by parameter is not applicable
    

![Untitled](E-Commerce%20Dashboard%2076500939c8144497929e93b6b2e197f1/Untitled%201.png)

- mapping of customer locations in dataset to county names available in Tableau
    
    **Reason :** To make data consistent in terms of geographic level and to create visualization that is easy to look at without zooming
    

![Untitled](E-Commerce%20Dashboard%2076500939c8144497929e93b6b2e197f1/Untitled%202.png)

- grouping of product category names
    
    **Reason :** To reduce cardinality of product category names for ease of visualization
    

![Screenshot 2566-10-10 at 20.26.00.png](E-Commerce%20Dashboard%2076500939c8144497929e93b6b2e197f1/Screenshot_2566-10-10_at_20.26.00.png)

### Data Visualization

Work done in this step are

- creating order year, order month and customer state parameters
    
    **Reason :** To use the parameter values for data filtering
    
- visualization of sales accompanied with year to date sales and difference in sales from previous calendar month
    
    **Reason :** To summarize revenue generated throughout the month and year (when the month ended) and to provide comparison with last month sales
    

![Untitled](E-Commerce%20Dashboard%2076500939c8144497929e93b6b2e197f1/Untitled%203.png)

- displaying average of order ratings, percent of orders rated and percent of orders rated less than the average
    
    **Reason :** To provide overview of customer satisfaction along with customer feedback rate and rate of orders that were perceived as dissatisfactory than average
    

![Untitled](E-Commerce%20Dashboard%2076500939c8144497929e93b6b2e197f1/Untitled%204.png)

- summarization of delayed order deliveries in terms of count, proportion and worst case
    
    **Reason :** To highlight whether improvements are needed in delivery service which also have effect on customer satisfaction
    

![Untitled](E-Commerce%20Dashboard%2076500939c8144497929e93b6b2e197f1/Untitled%205.png)

- map visualization of state counties with at least one order made in selected calendar month
    
    **Reason :** To provide aggregated measures similar to state level and additionally provide the contribution of county sales to state level revenue
    

![Untitled](E-Commerce%20Dashboard%2076500939c8144497929e93b6b2e197f1/Untitled%206.png)

- making use of bar chart to represent sales by product category
    
    **Reason :** To determine product classifications that are major source of income and the extent to which those classifications contribute towards total revenue
    

![Untitled](E-Commerce%20Dashboard%2076500939c8144497929e93b6b2e197f1/Untitled%207.png)

- creating action that is triggered upon clicking a county in map visualization
    
    **Reason :** To summarize revenue by product classification at county level of detail
    

![Untitled](E-Commerce%20Dashboard%2076500939c8144497929e93b6b2e197f1/Untitled%208.png)

### **References**

- [brazilian-ecommerce-dataset](https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce)
- [calculated-fields-lod](https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_lod.htm)
- [tableau-online-course](https://www.linkedin.com/learning/tableau-essential-training-22386688)
- [tableau-public-desktop](https://public-pantheon.tableau.com/en-us/s/download)
- [final-tableau-dashboard](https://public.tableau.com/views/OlistDashboard_16876242836040/e-commercedashboard?:language=en-US&:display_count=n&:origin=viz_share_link)
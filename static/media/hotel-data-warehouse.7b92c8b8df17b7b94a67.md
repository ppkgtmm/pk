### 📑 Business Requirement

Suppose you work as a data engineer for a hospitality business. The business has a reservation system where registered users can create bookings. A booking may reserve multiple types of rooms available between specified check in and check out date. Each room reserved must have a contact person whose information is registered in the system. The business also offer add-on services that must be purchased in advance. Any modifications to a booking or add-on purchase must be made at least 7 days prior to check in date

### 🚀 Data Modeling

1. Designed transactional database based on the requirement to finalize attributes, tables and relationship between the tables in data source

    ![oltp-db-diagram](./imgs/hotel-bookings/oltp-db-diagram.png)

2. Designed data warehouse with star schema to minimize join operations between tables

    ![dwh-db-diagram](./imgs/hotel-bookings/dwh-db-diagram.png)

### 👀 Data Source

1. Coded data generator which configures external library to generate realistic data and uploads the resulting data to cloud storage
2. Scripted data seeder to download the data from cloud storage and populate tables in source database according to their dependencies
3. Used infrastructure as code (IaC) to provision source database instance on cloud
4. Deployed cloud functions for data generation and seeding with IaC. Code used by the cloud functions were pre-uploaded to cloud storage through CI/CD pipeline

    ![data-source](./imgs/hotel-bookings/data-source.png)
    ![cloud-functions](./imgs/hotel-bookings/cloud-functions.png)

### 🔥 Change Data Capture

1. Created and deployed cloud function to prepare source database, destination Pub/Sub topics and topic subscriptions for change data capture (CDC)
2. Installed CDC server on cloud virtual machine, performed set up and configuration in order to get database events flowing from source to sink
    
    ![change-data-capture](./imgs/hotel-bookings/change-data-capture.png)
    ![pubsub-topics](./imgs/hotel-bookings/pubsub-topics.png)

### 🌩️ Stream Processing

1. Developed Pub/Sub consumer to process relevant messages into slowly changing dimension (SCD) type 2
2. Additionally, coded the consumer to stage transaction data and other supporting information useful in populating fact tables

    ![stream-processing](./imgs/hotel-bookings/stream-processing.png)
    ![spark-job](./imgs/hotel-bookings/spark-job.png)

### 📦 Batch Processing

1. Written SQL queries to populate date dimension and fact tables. Scripted additional queries to clean up processed or deleted data from staging table regularly
2. Created and deployed cloud function to initialize data warehouse, schedule batch processing queries and submit streaming job

    ![batch-processing](./imgs/hotel-bookings/batch-processing.png)
    ![scheduled-query](./imgs/hotel-bookings/scheduled-query.png)

### 📊 Data Visualization

1. Developed SQL queries to prepare data in data warehouse for dashboards creation
2. Built dashboards to summarize booking and amenity demand by service name, month, guest location and other guest attributes such age range and gender 
    ![amenity-dashboard](./imgs/hotel-bookings/amenity-dashboard.png)

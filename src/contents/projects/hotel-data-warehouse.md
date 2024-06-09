### Business Requirement

suppose you work as a data engineer in a hospitality business. the business has a reservation system where a registered user can create bookings. a booking may reserve multiple types of rooms available between specified checkin and checkout date. each of the rooms reserved has a contact person whose information is registered in the system. the business also offers add-on services or amenities that must be purchased in advance. any modification to bookings and amenities must be made at least 7 days before checkin date

### Data Modeling

Work done in this step are

1. transactional database design based on requirement to finalize attributes, tables and relationship between the tables in data source

![oltp-db-diagram](./imgs/hotel-bookings/oltp-db-diagram.svg)

2. data warehouse design using star schema to minimize join operations required to assemble data
    

![dwh-db-diagram](./imgs/hotel-bookings/dwh-db-diagram.svg)

### Data Seeding

![data-seeding-diagram](./imgs/hotel-bookings/data-seeding-diagram.svg)

Work done to populate source database with artificial dataset are

- generating values for table attributes that have no dependencies on other tables e.g.
    - person full name, gender, email, birth date and address
    - product data i.e. hotel room types and add-ons (amenities)
    - booking checkin, checkout and payment dates
    - room floor and room number information
- selection of unique columns as join key between parent and foreign tables
    - using email address column to join users and bookings table
    - using room type name to join room types and rooms table
- population of data to source database
    - seed tables with no foreign key constraints e.g. user, guest, room type and add-ons
    - seed tables that require only joining with parent table e.g. room and booking
    - seed tables that need to satisfy business related constraints apart from joining
        - booking rooms where no guest or room are tied to overlapping bookings
        - booking add-ons where date time lie between booking checkin and checkout dates

### Streaming ETL

![stream-diagram](./imgs/hotel-bookings/stream-diagram.svg)

Work done in this step are

- creation of user with specific permissions on source database for CDC connector
    
    **Reason :** To provide minimal privilege required to perform the task to connector
    
- registration of source database CDC connector to Kafka connect
    
    **Reason :** To read and stream row level changes from source database log to Kafka
    
- source database change events consumption from Kafka and data processing
    
    **Reason :** To read and prepare change events into suitable format for destination
    
- using slowly changing dimension (SCD) type 2 for dimension tables
    
    **Reason :** To capture both current and historical versions of data
    
- retaining latest version of raw data from rooms and guests tables
    
    **Reason :** To utilize additional fields which are helpful in fact tables population 
    
- keeping only latest data from bookings, booking rooms and booking add-ons tables
    
    **Reason :** To avoid updating fact tables by populating the fact tables only when there cannot be changes in the related data (as defined in business requirement)
    

![docker-stream-log](./imgs/hotel-bookings/docker-stream-log.png)

### Batch Loading

![batch-diagram](./imgs/hotel-bookings/batch-diagram.svg)

Work done in this step are

- on demand loading of data into location dimension table
    
    **Reason :** To only update the dimension table when there are changes in location data
    
- date dimension table initial load from earliest checkin date to script execution date
    
    **Reason :** To allow population of both current and historical data into fact tables
    
- doing incremental load on date dimension table before populating fact tables daily
    
    **Reason :** To ensure date dimension data is available before inserting new data to fact tables
    

![airflow-process-facts](./imgs/hotel-bookings/airflow-process-facts.png)

- data aggregation and loading into one big table for further use in visualization
    
    **Reason :** To reduce wait time consumed by on the fly data aggregation for dashboard users
    

![airflow-full-picture](./imgs/hotel-bookings/airflow-full-picture.png)

- clean up of records that are marked as processed or invalid from staging tables
    
    **Reason :** To reduce storage consumption by already processed records or records that are deleted in source database
    

![airflow-clean-up](./imgs/hotel-bookings/airflow-clean-up.png)

### Testing

Work done to verify correctness of fact table population logic are

- insertion of data that is yet to be picked up for processing into staging tables
- triggering pipeline that populates fact tables and checking if the data inserted previously is not present in fact tables
- modification of data in staging tables to be picked up by the pipeline for processing
- pipeline re-triggering and verifying if the updated data was correctly inserted into fact tables
- clean up of test data from fact tables

Assertion error is thrown and test fails right away after fact table population logic has produced incorrect output

### Data Visualization

Work done in this step are

- exportation of data from one big table into text files for visualization purpose
    
    **Reason :** To visualize data using tool that provides dashboard serialization and cross filtering features without any charges e.g. Tableau Public
    
- creating dashboards with data exported from previous step
    
    **Reason :** To create a tangible project output by summarizing thousands of data records
    

![booking-dashboard](./imgs/hotel-bookings/amenity-dashboard.png)

# Hotel Bookings ETL

Aim of this project is to convert hotel reservation data from transactional processing optimized format into a format better suited for visualization and analysis. The transformation enables business users to create dashboards from data for insights discovery and decision making more effortlessly

### Business Process

Images below illustrate business process defined to help identify data required for project

- creating reservation

![booking-diagram](./imgs/hotel-bookings/booking-diagram.svg)

- purchasing amenities

![amenity-diagram](./imgs/hotel-bookings/amenity-diagram.svg)

the following constraints have been enforced for simplicity and ease of data management

- Each user must also be registered as guest before making reservation for own self
- A guest cannot have multiple bookings with overlapping dates
- None of the guests can be tied to multiple rooms reserved through same booking
- The following cannot be done when less than 7 days left before checkin date : room booking, amenity purchase, cancelation or modification of booking and amenities purchased

### Data Modeling

Work done in this step are

- design of transactional database from defined business process
    
    **Reason :** To finalize attributes, tables and relationship between the tables in data source
    **Remarks**

    - booking rooms table contains guests and reserved rooms data for each booking
    - booking add-ons table holds details of amenities if any was purchased for a booked room

![oltp-db-diagram](./imgs/hotel-bookings/oltp-db-diagram.svg)

- data warehouse design using star schema
    
    **Reason :** To reduce number of join operations required to contruct one big table
    

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
    
- creating sample dashboard with data exported from previous step
    
    **Reason :** To create a tangible project output by summarizing thousands records of data
    

![booking-dashboard](./imgs/hotel-bookings/booking-dashboard.png)

### **References**

- [wiki-activity-diagram](https://en.wikipedia.org/wiki/Activity_diagram)
- [database-diagram-tool](https://dbdiagram.io)
- [data-warehouse-online-course](https://www.udemy.com/share/106qIm/)
- [fake-data-generator-documentation](https://faker.readthedocs.io/en/master/)
- [sql-alchemy-documentation](https://docs.sqlalchemy.org/en/20/)
- [debezium-mysql-documentation](https://debezium.io/documentation/reference/stable/connectors/mysql.html)
- [debezium-mysql-privileges](https://stackoverflow.com/questions/70658178/how-to-grant-all-mysql-8-0-privileges-to-debezium-in-windows)
- [debezium-avro-documentation](https://debezium.io/documentation/reference/stable/configuration/avro.html)
- [reading-confluent-avro-with-spark](https://medium.com/@mrugankray/real-time-avro-data-analysis-with-spark-streaming-and-confluent-kafka-in-python-426f5e05392d)
- [spark-kafka-integration](https://spark.apache.org/docs/3.4.0/structured-streaming-kafka-integration.html)
- [spark-package-specification](https://stackoverflow.com/questions/54285151/kafka-structured-streaming-kafkasourceprovider-could-not-be-instantiated)
- [pyspark-3.4.0-documentation](https://spark.apache.org/docs/3.4.0/api/python/index.html)
- [install-python-on-alpine-linux](https://stackoverflow.com/a/73294721)
- [guide-running-airflow-with-docker](https://stackabuse.com/running-airflow-locally-with-docker-a-technical-guide/)
- [creating-airflow-connection-from-cli](https://airflow.apache.org/docs/apache-airflow/stable/howto/connection.html#creating-a-connection-from-the-cli)
- [airflow-templates-and-macros](https://airflow.apache.org/docs/apache-airflow/stable/templates-ref.html)
- [airflow-external-task-sensor](https://airflow.apache.org/docs/apache-airflow/stable/_api/airflow/sensors/external_task/index.html#airflow.sensors.external_task.ExternalTaskSensor)
- [working-with-json-in-mysql](https://www.digitalocean.com/community/tutorials/working-with-json-in-mysql)
- [unnest-extract-json-data-in-mysql](https://andreessulp.medium.com/how-to-unnest-extract-nested-json-data-in-mysql-8-0-c9322c90df12)
- [tableau-public-desktop-download](https://www.tableau.com/products/public/download)
- [booking-dashboard-tableau-public](https://public.tableau.com/views/HotelBookingDemand_16990387653270/bookingdemand?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link)
- [addon-dashboard-tableau-public](https://public.tableau.com/views/HotelAddonDemand/addondemand?:language=en-US&:display_count=n&:origin=viz_share_link)

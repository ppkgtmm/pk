Purpose of this project is to build a machine learning model to spot out customers who are likely to churn. By knowing possibility to churn of high value customers beforehand, businesses can start taking actions and retain customers in time

### **Data Exploration**

Work done in this step are

- column data type and values validation against data description
    
    **Reason :** To see if further data cleansing or transformation are needed
    
- target variable distribution analysis
    
    **Reason :** To determine if weighted classification is needed because of class imbalance
    
- numerical and categorical feature distribution analysis by target class
    
    **Reason :** To decide if test of independence is needed to reduce no. of features 
    
- correlation analysis between each feature variable and target
    
    **Reason :** To observe direction of relationship between each feature variable and target
    

To know more about the observations, refer to [exploration notebook](https://github.com/ppkgtmm/churn-prediction/blob/main/notebooks/exploration.ipynb) 

### **Data Preprocessing**

Apache Airflow was used to build data processing pipeline or DAG as illustrated below

![dag-diagram](./imgs/churn/dag-diagram.png)

Work done through the pipeline are

- reading training, validation and testing input data files
- categorical features selection through chi-square test of independence done on training dataset with cutoff p-value 0.05
    
    **Reason :** To prevent model overfitting by keeping only features with p-value lower than 0.05
    
- preprocessors creation and input data preprocessing
- serialization of preprocessors and processed data to output directory
    
    **Reason :** To make preprocessors and processed data available for future use
    
- freeing up of disk space used by the pipeline

### **Model Training**

Work done in this step are

- input datasets transformation using each type of preprocessor created in previous step
    
    **Reason :** To encode categorical values for usability and to normalize numeric feature so that unexpected dominance from broad range features is prevented
    
- using preprocessed datasets to train machine learning algorithms
- evaluation of preprocessor and algorithm performance on validation set using recall metric
    
    **Reason :** To select preprocessor and algorithm combination that gives minimum incorrect predictions for churning customers i.e. minimum false negatives
    
- hyper parameter tuning of algorithm with highest recall value on validation set
    
    **Reason :** To obtain final model with better performance than model from default settings
    
- serialization of model obtained from hyper parameter tuning step
- evaluation on testing dataset using combination of selected preprocessor and tuned model
    
    **Reason :** To get performance estimate of preprocessor and model on unseen dataset
    

selected combination : Support Vector Machine algorithm and Standard Scaler

![evaluation-result](./imgs/churn/evaluation-result.png)

For more information about the results, refer to [modeling notebook](https://github.com/ppkgtmm/hello-hello/blob/main/notebooks/modeling.ipynb)

### **Inference**

Work done in this step are

- API development to serve predictions from input data provided to `/predict` endpoint

![api-input.png](./imgs/churn/api-input.png)

![api-output.png](./imgs/churn/api-output.png)

- implementation of front end to display predictions for input data file uploaded

![front-end.png](./imgs/churn/front-end.png)

### **Future Work**

- using K-Fold cross validation to select algorithm for tuning
    
    **Reason :** To better ensure that good performance of model on validation set is not by chance

### **Data Exploration**

Work done in this step are

1. validation of column data type and values against data description to see if further data cleansing or transformation are needed
2. analysis of target distribution to determine if there is imbalance in the distribution and weighted classification is required
3. analysing feature distribution by target to find if redundant features can be determined or test of independence will be required 
4. correlation analysis between each feature variable and target to observe direction of relationship between each feature variable and target
    

To know more about the observations, refer to [exploration notebook](https://github.com/ppkgtmm/churn-prediction/blob/main/notebooks/exploration.ipynb) 

### **Data Preprocessing**

Apache Airflow was used to build data processing pipeline or DAG as illustrated below

![dag-diagram](./imgs/churn/dag-diagram.png)

Work done through the pipeline are

1. reading training, validation and testing input data files
2. chi-square test of independence on categorical features with cutoff p-value 0.05 in training data to eliminate irrelevant features and reduce risk of overfitting
3. preprocessors creation and input data preprocessing
4. serialization of preprocessors and processed data to output directory to make preprocessors and processed data available for future use
5. freeing up of disk space used by the pipeline

### **Model Training**

Work done in this step are

1. encoding categorical values for usability in machine learning task using the preprocessors
2. normalizing numeric features to prevent those with broad range from dominating over prediction
3. using preprocessed datasets to train machine learning algorithms
4. evaluating preprocessor and algorithm performance on validation set with recall metric to finalize preprocessor and algorithm combination that gives minimum false negatives
5. hyper parameter tuning of algorithm with highest recall value on validation set to obtain model with better performance than model from default settings
6. serializing model obtained from hyper parameter tuning step
7. evaluating combination of selected preprocessor and tuned model on testing dataset to estimate performance on unseen dataset

Selected combination : Support Vector Machine algorithm and Standard Scaler

![evaluation-result](./imgs/churn/evaluation-result.png)

For more information about the results, refer to [modeling notebook](https://github.com/ppkgtmm/hello-hello/blob/main/notebooks/modeling.ipynb)

### **Inference**

Work done in this step are

1. API development to serve predictions based on input data provided to `/predict` endpoint

![api-input.png](./imgs/churn/api-input.png)

![api-output.png](./imgs/churn/api-output.png)

2. implementation of front end to display predictions for uploaded input data file 

![front-end.png](./imgs/churn/front-end.png)

### **Future Work**

using K-Fold cross validation to select algorithm and better ensure that good model performance on validation set is not by chance

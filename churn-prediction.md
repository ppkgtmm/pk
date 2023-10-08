# Churn Prediction

Purpose of this project is to build a machine learning model to spot out customers who are likely to churn. By knowing possibility to churn of high value customers beforehand, businesses can start taking actions and retain customers in time

> **Data Exploration**
> 

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

> **Data Preprocessing**
> 

Apache Airflow was used to build data processing pipeline or DAG as illustrated below

![https://github.com/ppkgtmm/churn-prediction/blob/main/images/dag-diagram.png?raw=true](https://github.com/ppkgtmm/churn-prediction/blob/main/images/dag-diagram.png?raw=true)

Work done through the pipeline are

- reading training, validation and testing input data files
- categorical features selection through chi-square test of independence done on training dataset with cutoff p-value 0.05
    
    **Reason :** To prevent model overfitting by keeping only features with p-value lower than 0.05
    
- preprocessors creation and input data preprocessing
- serialization of preprocessors and processed data to output directory
    
    **Reason :** To make preprocessors and processed data available for future use
    
- freeing up of disk space used by the pipeline

> **Model Training**
> 

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

![https://github.com/ppkgtmm/churn-prediction/blob/main/images/evaluation-result.png?raw=true](https://github.com/ppkgtmm/churn-prediction/blob/main/images/evaluation-result.png?raw=true)

For more information about the results, refer to [modeling notebook](https://github.com/ppkgtmm/hello-hello/blob/main/notebooks/modeling.ipynb)

> **Inference**
> 

Work done in this step are

- API development to serve predictions from input data provided to `/predict` endpoint

![https://github.com/ppkgtmm/churn-prediction/blob/main/images/api-input.png?raw=true](https://github.com/ppkgtmm/churn-prediction/blob/main/images/api-input.png?raw=true)

![https://github.com/ppkgtmm/churn-prediction/blob/main/images/api-output.png?raw=true](https://github.com/ppkgtmm/churn-prediction/blob/main/images/api-output.png?raw=true)

- implementation of front end to display predictions for input data file uploaded

![https://github.com/ppkgtmm/churn-prediction/blob/main/images/front-end.png?raw=true](https://github.com/ppkgtmm/churn-prediction/blob/main/images/front-end.png?raw=true)

> **Further Work**
>

- using K-Fold cross validation to select algorithm for tuning
    
    **Reason :** To better ensure that good performance of model on validation set is not by chance
    

> **References**
>

- [credit-card-customers-churn-dataset](https://www.kaggle.com/datasets/sakshigoyal7/credit-card-customers)
- [multicollinearity](https://en.wikipedia.org/wiki/Multicollinearity)
- [apache-airflow-quick-start](https://airflow.apache.org/docs/apache-airflow/stable/start/local.html)
- [apache-airflow-modules-management](https://airflow.apache.org/docs/apache-airflow/stable/modules_management.html)
- [importing-local-module-python-script-in-airflow-dag](https://stackoverflow.com/questions/50150384/importing-local-module-python-script-in-airflow-dag)
- [pandas-dataframe-styling-color-palette](https://pandas.pydata.org/docs/user_guide/style.html)
- [sklearn-model-selection-randomized-search-cv](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RandomizedSearchCV.html)
- [sklearn-metrics-make-scorer](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.make_scorer.html)
- [saving-and-loading-objects-and-using-pickle](https://stackoverflow.com/questions/4530611/saving-and-loading-objects-and-using-pickle)
- [fast-api-framework-tutorial](https://fastapi.tiangolo.com/)
- [pandas-dataframe-to-json](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_json.html)
- [dynamically-create-an-enum-with-custom-values-in-python](https://stackoverflow.com/questions/33690064/dynamically-create-an-enum-with-custom-values-in-python)
- [how-to-manage-airflow-connections](https://airflow.apache.org/docs/apache-airflow/2.2.4/howto/connection.html)
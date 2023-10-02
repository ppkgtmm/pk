# Churn Prediction

Purpose of this project is to build a machine learning model to spot out customers who are likely to churn. By knowing possibility to churn of high value customers beforehand, businesses can start taking actions and retain customers in time

> **Data Exploration**
> 

Work done in this step are

- column data type and values validation against data description
- target variable distribution analysis
- numerical and categorical feature distribution analysis by target class
- correlation analysis between each feature variable and target

To know more about the observations, refer to [exploration notebook](https://github.com/ppkgtmm/churn-prediction/blob/main/notebooks/exploration.ipynb) 

> **Data Preprocessing**
> 

Apache Airflow was used to build data processing pipeline or DAG as illustrated below

![https://github.com/ppkgtmm/churn-prediction/blob/main/images/dag-diagram.png?raw=true](https://github.com/ppkgtmm/churn-prediction/blob/main/images/dag-diagram.png?raw=true)

Work done through the pipeline are

- reading training, validation and testing input data files
- categorical features selection through chi-square test of independence done on training dataset with cutoff p-value 0.05
- preprocessors creation and input data preprocessing
- serialization of preprocessors and processed data to output directory
- free up of disk space used by the pipeline

> **Cross Validation**
> 

Work done in this step are

- input datasets transformation using each type of preprocessor created in previous step
- machine learning algorithms training using preprocessed datasets
- evaluation of preprocessor and algorithm performance on validation set
- selecting preprocessor and algorithm combination that gave highest recall value

Optimal combination ****: Support Vector Machine and Standard Scaler

![https://github.com/ppkgtmm/churn-prediction/blob/main/images/evaluation-result.png?raw=true](https://github.com/ppkgtmm/churn-prediction/blob/main/images/evaluation-result.png?raw=true)

For more information about the results, refer to [modeling notebook](https://github.com/ppkgtmm/hello-hello/blob/main/notebooks/modeling.ipynb)

- **Reason for choosing recall**
    
    To minimize false negatives i.e. incorrectly predicting customers as not churning
    

> **Inference**
> 

Work done in this step are

- API development to serve predictions from input data provided to `/predict` endpoint

![https://github.com/ppkgtmm/churn-prediction/blob/main/images/api-input.png?raw=true](https://github.com/ppkgtmm/churn-prediction/blob/main/images/api-input.png?raw=true)

![https://github.com/ppkgtmm/churn-prediction/blob/main/images/api-output.png?raw=true](https://github.com/ppkgtmm/churn-prediction/blob/main/images/api-output.png?raw=true)

- implementation of front end which receives input data as CSV file and displays predictions

![https://github.com/ppkgtmm/churn-prediction/blob/main/images/front-end.png?raw=true](https://github.com/ppkgtmm/churn-prediction/blob/main/images/front-end.png?raw=true)

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
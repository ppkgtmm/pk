### 📊 Data Exploration

1. Validated column data type and values against data description to see if data cleansing or transformation are needed
2. Analyzed target distribution to check for class imbalance and use weighted classification
3. Performed feature distribution analysis to check if redundant features are visible or test of independence will be needed 
4. Conducted correlation analysis between each feature variable and target to observe the direction of relationship

<!-- To know more about the observations, refer to [exploration notebook](https://github.com/ppkgtmm/churn-prediction/blob/main/notebooks/exploration.ipynb)  -->

### 🔥 Data Preprocessing

Apache Airflow was used to manage data processing pipeline or DAG as illustrated below

![dag-diagram](./imgs/churn/dag-diagram.png)

The pipeline reads training, validation and testing data files. Then it runs Chi-square test with cutoff p-value 0.05 on training dataset to discard redundant categorical features and reduce risk of overfitting. The pipeline creates preprocessors and preprocesses input data before serializing both the data and preprocessors for future use. At the end of pipeline, disk space used to store temporary files is released

### 🤖 Model Training

1. Encoded categorical values for usability in machine learning task using the preprocessors
2. Normalized numeric features to prevent those with broad range from dominating over prediction result
3. Trained machine learning algorithms with the preprocessed datasets
4. Evaluated preprocessor and algorithm performance on validation set with recall metric to select preprocessor and algorithm combination that produce minimum false negatives
    ![evaluation-result](./imgs/churn/evaluation-result.png)
    Selected combination : Support Vector Machine algorithm and Standard Scaler


5. Tuned finalized algorithm hyper parameters to obtain better performing model
6. Serialized model resulted from hyper parameter tuning step
7. Evaluated performance of optimal preprocessor and tuned model on testing dataset

### 🚀 Inference

1. Developed API to serve predictions from input data through `/predict` endpoint

    ![api-input.png](./imgs/churn/api-input.png)

    ![api-output.png](./imgs/churn/api-output.png)

2. Implementated front end to display predictions for uploaded input data file 

    ![front-end.png](./imgs/churn/front-end.png)

### 🥋 Future Work

Using K-Fold cross validation to select algorithm and ensure that good performance on validation set is not by chance

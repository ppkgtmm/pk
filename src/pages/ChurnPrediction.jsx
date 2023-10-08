import { useEffect } from 'react';

function ChurnPrediction() {
  useEffect(() => {
    document.title = 'churn prediction';
    window.scrollTo({ top: 0, left: 0 });
  });
  return (
    <article className="prose-styled">
      <h1>Churn Prediction</h1>
      <p>
        Purpose of this project is to build a machine learning model to spot out
        customers who are likely to churn. By knowing possibility to churn of
        high value customers beforehand, businesses can start taking actions and
        retain customers in time
      </p>
      <blockquote>
        <p>
          <strong>Data Exploration</strong>
        </p>
      </blockquote>
      <p>Work done in this step are</p>
      <ul>
        <li>
          <p>column data type and values validation against data description</p>
          <p>
            <strong>Reason : </strong>
            To see if further data cleansing or
            transformation are needed
          </p>
        </li>
        <li>
          <p>target variable distribution analysis</p>
          <p>
            <strong>Reason : </strong>
            To determine if weighted classification is
            needed because of class imbalance
          </p>
        </li>
        <li>
          <p>
            numerical and categorical feature distribution analysis by target
            class
          </p>
          <p>
            <strong>Reason : </strong>
            To decide if test of independence is
            needed to reduce no. of features
          </p>
        </li>
        <li>
          <p>correlation analysis between each feature variable and target</p>
          <p>
            <strong>Reason : </strong>
            To observe direction of relationship
            between each feature variable and target
          </p>
        </li>
      </ul>
      <p>
        To know more about the observations, refer to
        {' '}
        <a href="https://github.com/ppkgtmm/churn-prediction/blob/main/notebooks/exploration.ipynb">
          exploration notebook
        </a>
      </p>
      <blockquote>
        <p>
          <strong>Data Preprocessing</strong>
        </p>
      </blockquote>
      <p>
        Apache Airflow was used to build data processing pipeline or DAG as
        illustrated below
      </p>
      <p>
        <img
          src="https://github.com/ppkgtmm/churn-prediction/blob/main/images/dag-diagram.png?raw=true"
          alt="https://github.com/ppkgtmm/churn-prediction/blob/main/images/dag-diagram.png?raw=true"
        />
      </p>
      <p>Work done through the pipeline are</p>
      <ul>
        <li>reading training, validation and testing input data files</li>
        <li>
          <p>
            categorical features selection through chi-square test of
            independence done on training dataset with cutoff p-value 0.05
          </p>
          <p>
            <strong>Reason : </strong>
            To prevent model overfitting by keeping
            only features with p-value lower than 0.05
          </p>
        </li>
        <li>preprocessors creation and input data preprocessing</li>
        <li>
          <p>
            serialization of preprocessors and processed data to output
            directory
          </p>
          <p>
            <strong>Reason : </strong>
            To make preprocessors and processed data
            available for future use
          </p>
        </li>
        <li>freeing up of disk space used by the pipeline</li>
      </ul>
      <blockquote>
        <p>
          <strong>Model Training</strong>
        </p>
      </blockquote>
      <p>Work done in this step are</p>
      <ul>
        <li>
          <p>
            input datasets transformation using each type of preprocessor
            created in previous step
          </p>
          <p>
            <strong>Reason : </strong>
            To encode categorical values for usability
            and to normalize numeric feature so that unexpected dominance from
            broad range features is prevented
          </p>
        </li>
        <li>
          using preprocessed datasets to train machine learning algorithms
        </li>
        <li>
          <p>
            evaluation of preprocessor and algorithm performance on validation
            set using recall metric
          </p>
          <p>
            <strong>Reason : </strong>
            To select preprocessor and algorithm
            combination that gives minimum incorrect predictions for churning
            customers i.e. minimum false negatives
          </p>
        </li>
        <li>
          <p>
            hyper parameter tuning of algorithm with highest recall value on
            validation set
          </p>
          <p>
            <strong>Reason : </strong>
            To obtain final model with better
            performance than model from default settings
          </p>
        </li>
        <li>
          serialization of model obtained from hyper parameter tuning step
        </li>
        <li>
          <p>
            evaluation on testing dataset using combination of selected
            preprocessor and tuned model
          </p>
          <p>
            <strong>Reason : </strong>
            To get performance estimate of
            preprocessor and model on unseen dataset
          </p>
        </li>
      </ul>
      <p>
        selected combination : Support Vector Machine algorithm and Standard
        Scaler
      </p>
      <p>
        <img
          src="https://github.com/ppkgtmm/churn-prediction/blob/main/images/evaluation-result.png?raw=true"
          alt="https://github.com/ppkgtmm/churn-prediction/blob/main/images/evaluation-result.png?raw=true"
        />
      </p>
      <p>
        For more information about the results, refer to
        {' '}
        <a href="https://github.com/ppkgtmm/hello-hello/blob/main/notebooks/modeling.ipynb">
          modeling notebook
        </a>
      </p>
      <blockquote>
        <p>
          <strong>Inference</strong>
        </p>
      </blockquote>
      <p>Work done in this step are</p>
      <ul>
        <li>
          API development to serve predictions from input data provided to
          {' '}
          <code>/predict</code>
          {' '}
          endpoint
        </li>
      </ul>
      <p>
        <img
          src="https://github.com/ppkgtmm/churn-prediction/blob/main/images/api-input.png?raw=true"
          alt="https://github.com/ppkgtmm/churn-prediction/blob/main/images/api-input.png?raw=true"
        />
      </p>
      <p>
        <img
          src="https://github.com/ppkgtmm/churn-prediction/blob/main/images/api-output.png?raw=true"
          alt="https://github.com/ppkgtmm/churn-prediction/blob/main/images/api-output.png?raw=true"
        />
      </p>
      <ul>
        <li>
          implementation of front end to display predictions for input data file
          uploaded
        </li>
      </ul>
      <p>
        <img
          src="https://github.com/ppkgtmm/churn-prediction/blob/main/images/front-end.png?raw=true"
          alt="https://github.com/ppkgtmm/churn-prediction/blob/main/images/front-end.png?raw=true"
        />
      </p>
      <blockquote>
        <p>
          <strong>Further Work</strong>
        </p>
      </blockquote>
      <ul>
        <li>
          <p>using K-Fold cross validation to select algorithm for tuning</p>
          <p>
            <strong>Reason : </strong>
            To better ensure that good performance of
            model on validation set is not by chance
          </p>
        </li>
      </ul>
      <blockquote>
        <p>
          <strong>References</strong>
        </p>
      </blockquote>
      <ul>
        <li>
          <a href="https://www.kaggle.com/datasets/sakshigoyal7/credit-card-customers">
            credit-card-customers-churn-dataset
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Multicollinearity">
            multicollinearity
          </a>
        </li>
        <li>
          <a href="https://airflow.apache.org/docs/apache-airflow/stable/start/local.html">
            apache-airflow-quick-start
          </a>
        </li>
        <li>
          <a href="https://airflow.apache.org/docs/apache-airflow/stable/modules_management.html">
            apache-airflow-modules-management
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/questions/50150384/importing-local-module-python-script-in-airflow-dag">
            importing-local-module-python-script-in-airflow-dag
          </a>
        </li>
        <li>
          <a href="https://pandas.pydata.org/docs/user_guide/style.html">
            pandas-dataframe-styling-color-palette
          </a>
        </li>
        <li>
          <a href="https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RandomizedSearchCV.html">
            sklearn-model-selection-randomized-search-cv
          </a>
        </li>
        <li>
          <a href="https://scikit-learn.org/stable/modules/generated/sklearn.metrics.make_scorer.html">
            sklearn-metrics-make-scorer
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/questions/4530611/saving-and-loading-objects-and-using-pickle">
            saving-and-loading-objects-and-using-pickle
          </a>
        </li>
        <li>
          <a href="https://fastapi.tiangolo.com/">
            fast-api-framework-tutorial
          </a>
        </li>
        <li>
          <a href="https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_json.html">
            pandas-dataframe-to-json
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/questions/33690064/dynamically-create-an-enum-with-custom-values-in-python">
            dynamically-create-an-enum-with-custom-values-in-python
          </a>
        </li>
        <li>
          <a href="https://airflow.apache.org/docs/apache-airflow/2.2.4/howto/connection.html">
            how-to-manage-airflow-connections
          </a>
        </li>
      </ul>
    </article>
  );
}
export default ChurnPrediction;

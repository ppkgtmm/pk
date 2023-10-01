function ChurnPrediction() {
  return (
    <article className="my-12 lg:my-16 component prose prose-zinc prose-blockquote:not-italic prose-blockquote:border-zinc-900 prose-blockquote:border-l-3 prose-p:text-zinc-900 prose-a:text-zinc-400 prose-a:underline-offset-[3px] prose-a:font-normal prose-li:my-1">
      <header>
        <h1>Churn Prediction</h1>
      </header>
      <div>
        <p>
          Purpose of this project is to build a machine learning model to spot
          out customers who are likely to churn. By knowing possibility to churn
          of high value customers beforehand, businesses can start taking
          actions and retain customers in time
        </p>
        <blockquote>
          <strong>Data Exploration</strong>
        </blockquote>
        <p>Work done in this step are</p>
        <li>
          column data type and values validation against data description
        </li>
        <li>target variable distribution analysis</li>
        <li>
          numerical and categorical feature distribution analysis by target
          class
        </li>
        <li>correlation analysis between each feature variable and target</li>
        <p>
          To know more about the observations, refer to
          {' '}
          <a target="_blank" rel="noreferrer" href="https://github.com/ppkgtmm/churn-prediction/blob/main/notebooks/exploration.ipynb">
            exploration notebook
          </a>
        </p>
        <blockquote>
          <strong>Data Preprocessing</strong>
        </blockquote>
        <p>
          Apache Airflow was used to build data processing pipeline or DAG as
          illustrated below
        </p>
        <figure>
          <a target="_blank" rel="noreferrer" href="https://github.com/ppkgtmm/churn-prediction/blob/main/images/dag-diagram.png?raw=true">
            <img src="https://github.com/ppkgtmm/churn-prediction/blob/main/images/dag-diagram.png?raw=true" alt="sirflow-dag" />
          </a>
        </figure>
        <p>Work done through the pipeline are</p>
        <li>reading training, validation and testing input data files</li>
        <li>
          categorical features selection through chi-square test of
          independence done on training dataset with cutoff p-value 0.05
        </li>
        <li>preprocessors creation and input data preprocessing</li>
        <li>
          serialization of preprocessors and processed data to output
          directory
        </li>
        <li>free up of disk space used by the pipeline</li>
        <blockquote>
          <strong>Cross Validation</strong>
        </blockquote>
        <p>Work done in this step are</p>
        <li>
          input datasets transformation using each type of preprocessor
          created in previous step
        </li>

        <li>
          machine learning algorithms training using preprocessed datasets
        </li>

        <li>
          evaluation of preprocessor and algorithm performance on validation
          set
        </li>

        <li>
          selecting preprocessor and algorithm combination that gave highest
          recall value
        </li>
        <p>
          Optimal combination : Support Vector Machine and Standard Scaler
        </p>
        <figure>
          <a target="_blank" rel="noreferrer" href="https://github.com/ppkgtmm/churn-prediction/blob/main/images/evaluation-result.png?raw=true">
            <img className="max-w-screen-sm mx-auto" src="https://github.com/ppkgtmm/churn-prediction/blob/main/images/evaluation-result.png?raw=true" alt="evaluation-result" />
          </a>
        </figure>
        <p>
          For more information about the results, refer to
          {' '}
          <a target="_blank" rel="noreferrer" href="https://github.com/ppkgtmm/hello-hello/blob/main/notebooks/modeling.ipynb">
            modeling notebook
          </a>
        </p>
        <details open="">
          <summary>
            <strong>Reason for choosing recall </strong>
          </summary>
          <p>
            To minimize false negatives i.e. incorrectly predicting
            customers as not churning
          </p>
        </details>
        <blockquote>
          <strong>Inference</strong>
        </blockquote>
        <p>Work done in this step are</p>
        <li>
          API development to serve predictions from input data provided to
          {' '}
          <code>/predict</code>
          {' '}
          endpoint
        </li>
        <figure>
          <a target="_blank" rel="noreferrer" href="https://github.com/ppkgtmm/churn-prediction/blob/main/images/api-input.png?raw=true">
            <img src="https://github.com/ppkgtmm/churn-prediction/blob/main/images/api-input.png?raw=true" alt="api-input" />
          </a>
        </figure>
        <figure>
          <a target="_blank" rel="noreferrer" href="https://github.com/ppkgtmm/churn-prediction/blob/main/images/api-output.png?raw=true">
            <img src="https://github.com/ppkgtmm/churn-prediction/blob/main/images/api-output.png?raw=true" alt="api-output" />
          </a>
        </figure>
        <li>
          implementation of front end which receives input data as CSV file
          and displays predictions
        </li>
        <figure>
          <a target="_blank" rel="noreferrer" href="https://github.com/ppkgtmm/churn-prediction/blob/main/images/front-end.png?raw=true">
            <img src="https://github.com/ppkgtmm/churn-prediction/blob/main/images/front-end.png?raw=true" alt="front-end" />
          </a>
        </figure>
        <blockquote>
          <strong>References</strong>
        </blockquote>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.kaggle.com/datasets/sakshigoyal7/credit-card-customers">
            credit-card-customers-churn-dataset
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Multicollinearity">
            multicollinearity
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://airflow.apache.org/docs/apache-airflow/stable/start/local.html">
            apache-airflow-quick-start
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://airflow.apache.org/docs/apache-airflow/stable/modules_management.html">
            apache-airflow-modules-management
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/questions/50150384/importing-local-module-python-script-in-airflow-dag">
            importing-local-module-python-script-in-airflow-dag
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://pandas.pydata.org/docs/user_guide/style.html">
            pandas-dataframe-styling-color-palette
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RandomizedSearchCV.html">
            sklearn-model-selection-randomized-search-cv
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://scikit-learn.org/stable/modules/generated/sklearn.metrics.make_scorer.html">
            sklearn-metrics-make-scorer
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/questions/4530611/saving-and-loading-objects-and-using-pickle">
            saving-and-loading-objects-and-using-pickle
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://fastapi.tiangolo.com/">
            fast-api-framework-tutorial
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_json.html">
            pandas-dataframe-to-json
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/questions/33690064/dynamically-create-an-enum-with-custom-values-in-python">
            dynamically-create-an-enum-with-custom-values-in-python
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://airflow.apache.org/docs/apache-airflow/2.2.4/howto/connection.html">
            how-to-manage-airflow-connections
          </a>
        </li>
      </div>
    </article>
  );
}
export default ChurnPrediction;

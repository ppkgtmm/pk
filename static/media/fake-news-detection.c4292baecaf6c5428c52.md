# Fake News Detection

Objective of this project is to automate fake news detection using machine learning. With such automation, news authenticity can be figured out early which could save news readers valuable time and reduce negative effects from decisions made based on fake news

![diagram](./imgs/fake-news/diagram.png)

### **Data Preprocessing**

Work done in this step are

- normalization of high cardinality values such as urls, email addresses, hashtags, social media mentions, numbers and special characters
    
    **Reason :** To help model better generalize on new or unseen data
    
- removal of HTML tags
    
    **Reason :** To discard meaningless texts
    
- expansion of modal verbs e.g. `didnt`, `didn’t` to `did not`
    
    **Reason :** To standardize modal verbs and emphasize negation if present
    
- serialization of data preprocessed according to steps mentioned above
    
    **Reason :** For immediate availability of preprocessed data to use i
    

```
[2023-09-17 17:48:46,226][__main__][INFO] - Config param validation successful
[2023-09-17 17:48:46,226][__main__][INFO] - Begin text data preprocessing
[2023-09-17 17:57:41,950][preprocessing.main][INFO] - Done preprocessing text variable
[2023-09-17 17:57:43,023][__main__][INFO] - Done preprocessing file data/True.csv, output saved to data/True_prep.csv
[2023-09-17 18:07:41,104][preprocessing.main][INFO] - Done preprocessing text variable
[2023-09-17 18:07:42,356][__main__][INFO] - Done preprocessing file data/Fake.csv, output saved to data/Fake_prep.csv
[2023-09-17 18:07:42,356][__main__][INFO] - End text data preprocessing
```

News data used in this project can be found in [data directory](https://github.com/ppkgtmm/fake-news-detection/tree/main/data)

### **Data Visualization**

Work done in this step are

- target variable distribution analysis
    
    **Reason :** To determine if weighted classification is needed due to class imbalance
    
- visualization of news subject, word count distribution and average word length distribution
    
    **Reason :** To understand and compare overall characteristics of news in each target class
    
- visualization of real news and fake news as separate word clouds
    
    **Reason :** To find common words in each type of news and compare the difference
    

For detailed findings from data visualization step, refer to [visualization results](https://github.com/ppkgtmm/fake-news-detection/blob/main/visualization/README.md)

### **Model Training**

Work done in this step are

- conversion of news inputs into word count matrix using Count Vectorizer
    
    **Reason :**  To achieve a better representation of text inputs for machine learning task
    
- transforming word count into inverse document frequency
    
    **Reason :** To prevent model from overemphasizing words that appear often in news but are not helpful for making prediction e.g. stop words like a, an, the etc.
    
- picking Logistic Regression and Naive Bayes machine learning algorithms for cross validation
    
    **Reason :** The algorithms are fast and easy to understand because of simple computation
    
- selection of machine learning algorithm using ROC AUC score of model on validation set
    
    **Reason :** To determine final machine learning algorithm for further tuning through its ability to separate between real and fake news when there is no imbalance between target classes
    
- hyper parameter tuning of machine learning algorithm finalized
    
    **Reason :** To get model with better performance than model from default settings
    
- serialization of model obtained from hyper parameter tuning step
- performance evaluation of final model on testing dataset using ROC AUC score
    
    **Reason :** To get unbiased estimate of model ability in separating between types of news
    

```
[2023-09-17 18:37:35,613][__main__][INFO] - Config param validation successful
[2023-09-17 18:37:35,613][__main__][INFO] - Begin modeling process
[2023-09-17 18:38:19,768][modeling.training][INFO] - Logistic regression validation AUC score : 0.9840257205725704
[2023-09-17 18:38:34,351][modeling.training][INFO] - Multinomial NB validation AUC score : 0.945421586414332
[2023-09-17 18:38:34,352][__main__][INFO] - End modeling process
```

For additional information about tuning results, refer to [tuning log](https://github.com/ppkgtmm/fake-news-detection/blob/main/outputs/2023-09-17/18-55-22/tune.log)

### **Model inference**

Work done in this step are

- API development to serve predictions for news provided to `/predict` endpoint

![api-input](./imgs/fake-news/api-input.png)

![api-output](./imgs/fake-news/api-output.png)

- implementation of front end to display prediction for news input filled in text box

![ui-real-news](./imgs/fake-news/ui-real-news.png)

![ui-fake-news](./imgs/fake-news/ui-fake-news.png)

### **Further Work**

- Optimization of preprocessing code
    
    **Reason :** To consume less amount of time when executed
    
- Using K-Fold cross validation to select algorithm for tuning
    
    **Reason :** To better ensure that good performance of model on validation set is not by chance
    

### **References**

- [fake-and-real-news-dataset](https://www.kaggle.com/datasets/clmentbisaillon/fake-and-real-news-dataset)
- [hydra-cc-a-powerful-framework-to-configure-your-data-science-projects](https://towardsdatascience.com/introduction-to-hydra-cc-a-powerful-framework-to-configure-your-data-science-projects-ed65713a53c6)
- [concatenate-two-pyspark-dataframes](https://stackoverflow.com/questions/37332434/concatenate-two-pyspark-dataframes)
- [spark-documentation](https://spark.apache.org/docs/3.1.1/)
- [logging-with-hydra](https://hydra.cc/docs/tutorials/basic/running_your_app/logging/)
- [how-can-i-add-a-blank-directory-to-a-git-repository](https://stackoverflow.com/questions/115983/how-can-i-add-a-blank-directory-to-a-git-repository)
- [what-are-the-differences-between-gitignore-and-gitkeep](https://stackoverflow.com/questions/7229885/what-are-the-differences-between-gitignore-and-gitkeep)
- [pyspark-java-lang-outofmemoryerror](https://stackoverflow.com/questions/32336915/pyspark-java-lang-outofmemoryerror-java-heap-space)
- [countvectorizer-hashingtf](https://towardsdatascience.com/countvectorizer-hashingtf-e66f169e2d4e)
- [pyspark-mllib-feature-extraction](https://spark.apache.org/docs/1.4.1/mllib-feature-extraction.html)
- [hydra-compose-api](https://hydra.cc/docs/advanced/compose_api/)
- [pandas-dataframe-to-json](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_json.html)
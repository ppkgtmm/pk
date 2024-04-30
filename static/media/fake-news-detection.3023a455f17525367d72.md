### **Data Preprocessing**

![diagram](./imgs/fake-news/diagram.png)

Work done in this step are

1. normalization of high cardinality values including URLs, email addresses, hashtags, social media mentions, numbers and special characters for model to generalize better on new or unseen data
2. removal of HTML tags to discard meaningless texts
3. expansion of modal verbs e.g. `didnt`, `didn’t` to `did not` to standardize modal verbs and emphasize negation if present
4. serialization of data preprocessed according to steps mentioned above for reuse
    

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

1. target distribution analysis to determine if weighted classification is needed due to class imbalance
2. visualization of news subject, word count and average word length distribution to understand and compare overall characteristics of news in each target class
3. creating separate word clouds for real news and fake news to find common words in each type of news and compare the difference

For detailed findings from data visualization step, refer to [visualization results](https://github.com/ppkgtmm/fake-news-detection/blob/main/visualization/README.md)

### **Model Training**

Work done in this step are

1. conversion of news inputs into word count matrix using Count Vectorizer to better represent text inputs for machine learning task
2. transforming word count into inverse document frequency to prevent model from overemphasizing words that appear often in news but are not helpful for making prediction e.g. a, an and the
3. picking Logistic Regression and Naive Bayes machine learning algorithms for cross validation as the algorithms are fast and easy to understand because of simple computation
4. selection of machine learning algorithm using ROC AUC score of model on validation set to finalize machine learning algorithm for further tuning through its ability to separate between news
5. hyper parameter tuning of finalized algorithm to get model with better performance than model from default parameter settings
6. serialization of model obtained from hyper parameter tuning step
7. performance evaluation of final model on testing dataset using ROC AUC score to get unbiased estimate of model ability in separating between the news
    

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

1. API development to serve predictions for news provided to `/predict` endpoint

![api-input](./imgs/fake-news/api-input.png)

![api-output](./imgs/fake-news/api-output.png)

2. implementation of front end to display prediction for news input filled in text box

![ui-real-news](./imgs/fake-news/ui-real-news.png)

![ui-fake-news](./imgs/fake-news/ui-fake-news.png)

### **Future Work**

1. Optimization of preprocessing code to consume less amount of execution time 
2. Using K-Fold cross validation to select algorithm for tuning to better ensure that good performance of model on validation set is not by chance

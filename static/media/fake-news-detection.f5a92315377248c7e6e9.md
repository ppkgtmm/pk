### ✨ Data Preprocessing

<!-- ![diagram](./imgs/fake-news/diagram.png) -->

1. Normalized high cardinality values including URLs, email addresses, hashtags, social media mentions, numbers and special characters for better model generalization
2. Removed of HTML tags to discard meaningless texts
3. Developed logic to expand modal verbs e.g. `didnt`, `didn’t` to `did not` to standardize modal verbs and emphasize negation if present
4. Serialized data preprocessed according to steps mentioned above for reuse
    ![processing-log](./imgs/fake-news/processing.png)


<!-- News data used in this project can be found in [data directory](https://github.com/ppkgtmm/fake-news-detection/tree/main/data) -->

### 👀 Data Visualization

1. Analyzed target distribution to detect class imbalance problem
2. Visualized news subject, word count and average word length distribution to understand and compare overall characteristics of news in each class
3. Created word clouds for real news and fake news to find common words in each type of news and compare the difference
    ![real-news-wc](./imgs/fake-news/visualization.png)

### 🚀 Model Training

1. Converted news inputs into word count matrix using Count Vectorizer to better represent text inputs for machine learning task
2. Transformed word count into inverse document frequency to prevent model from excessively emphasizing stop words words like `a`, `an` and `the` which appear often in news but are not helpful for making prediction
3. Selected Logistic Regression and Naive Bayes algorithms for cross validation because of their speed and simplicity
4. Cross validated the algorithms using ROC AUC score on validation set to evaluate ability of resulting models in separating between news
    ![training-log](./imgs/fake-news/training.png)
5. Tuned hyper parameters of the finalized algorithm to achieve better performing model
    ![tuning-result](./imgs/fake-news/tuning.png)
6. Serialized model produced from hyper parameter tuning step
7. Evaluated performance of the tuned model on testing dataset using ROC AUC metric to get unbiased estimate of model ability

### 📰 Model inference

1. Developed API to serve predictions for news provided through `/predict` endpoint

    ![api-input](./imgs/fake-news/api-input.png)
    ![api-output](./imgs/fake-news/api-output.png)

2. Implemented front end to display prediction for news input filled in text box

### 📚 Future Work

1. Optimization of preprocessing code to consume less execution time 
2. Using K-Fold cross validation to select algorithm which ensures that good validation set performance is not by chance

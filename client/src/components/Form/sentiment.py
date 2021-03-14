from '../../actions/posts' import { createPost , updatePost}
from textblob import Textblob

y = {postData.shop}
e = Textblob(y)
x = e.sentiment.polarity
z = {postData.amount}
if x<0:
    z = "Negative"           
else if x == 0:
    z = "Neutral"            
else
    z = "Positive"
            

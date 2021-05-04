const tweetForm = document.querySelector("#tweetForm");
const tweetContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function(e) {
	e.preventDefault(); 

    const username = tweetForm.elements.username.value
	const tweet = tweetForm.elements.tweet.value

    addTweet(username, tweet);

})

const addTweet = (username, tweet) => {
	const newTweet = document.createElement('li');
	const bTag = document.createElement('b');

	bTag.append(username);
	newTweet.append(bTag);
	newTweet.append(`: ${tweet}`);
    tweetContainer.append(newTweet);
}
const tweetForm = document.querySelector("#tweetForm");
const tweetContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function(e) {
	e.preventDefault(); 

    const username = tweetForm.elements.username.value
	const tweet = tweetForm.elements.tweet.value

	const newTweet = document.createElement('li');
	const bTag = document.createElement('b');

	bTag.append(username);
	newTweet.append(bTag);
	newTweet.append(`- ${tweet}`);
    tweetContainer.append(newTweet);

})

//there is a request being made behind the scene that forces us to the next page
//we want to change the default action
//We can't just remove 'action="/dogs"' because that would just refresh the page
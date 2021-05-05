const tweetForm = document.querySelector("#tweetForm");
const tweetContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function(e) {
	e.preventDefault(); 

    const usernameInput = tweetForm.elements.username
	const tweetInput = tweetForm.elements.tweet

    if (tweetInput.value !== '' && usernameInput.value !== '') {
        addTweet(usernameInput.value, tweetInput.value);
    } else {
        alert('Fill in both inputs ya silly')
    }

    

    usernameInput.value = '';
    tweetInput.value = '';

})

const addTweet = (username, tweet) => {
	const newTweet = document.createElement('li');
	const bTag = document.createElement('b');

	bTag.append(username);
	newTweet.append(bTag);
	newTweet.append(`: ${tweet}`);
    tweetContainer.append(newTweet);
}
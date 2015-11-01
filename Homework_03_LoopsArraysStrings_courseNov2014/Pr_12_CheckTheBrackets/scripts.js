function substringCount(arr) {
    var count = 0,
        word = arr[0],
        text = arr[1];

    while (text.toLowerCase().search(word) !== -1){
        count++;
        text = text.toLowerCase().slice(text.toLowerCase().search(word) + 1);
    }
    console.log(count);
}

substringCount(['in', 'We are living in a yellow submarine. We don\'t have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.']);
substringCount(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']);
substringCount(['but', 'But you were living in another world tryin\' to get your message through.']);
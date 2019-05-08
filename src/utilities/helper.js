export function formatQuestion (question, author) {
    const { id, optionOne, optionTwo, timestamp } = question
    const { name, avatarURL } = author

    return {
      authorName: name,
      id,
      timestamp,
      avatarURL: avatarURL,
      optionOne,
      optionTwo
    }
  }

export function userScore(user){
    return Object.keys(user.answers).length + user.questions.length;
}

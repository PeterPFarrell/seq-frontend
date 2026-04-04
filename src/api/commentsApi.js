import {API_COMMENTS, API_URI_V1, VOTE_PATH} from "../constants.js";


export async function getBoardComments(boardId)
{
    const response = await fetch(API_URI_V1+API_COMMENTS+`/${boardId}`, {
        method: "GET",
    }).then(response => response.json())
    return response
}

export async function updateVotes(boardId, commentId, isUpvote) {
    const response = await fetch(API_URI_V1+API_COMMENTS+VOTE_PATH+`/${commentId}/${isUpvote}`, {
        method: "PATCH"
    })
    return response
}
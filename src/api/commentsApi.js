import {API_COMMENT_BOARDS, API_URI_V1} from "../constants.js";


export async function getBoard(boardId)
{
    const response = await fetch(API_URI_V1+API_COMMENT_BOARDS+`/${boardId}`, {
        method: "GET",
    }).then(response => response.json())
    return response
}
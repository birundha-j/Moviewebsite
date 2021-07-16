export default function (state = "", action) {
    console.log(action, "action")
    switch (action.type) {
        case "GET_MOVIE_LIST":
            return action.payload
        default:
            return state
    }
}

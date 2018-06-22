// put stuff here
let dogsAction = () => {
    //before any search happens, tell reducer we're starting search
    store.dispatch({
        type: "DOG_SEARCH_INITIATED"
    })

    $.ajax({
        method: "GET",
        url: "https://dog.ceo/api/breeds/image/random"//bringing in dog API

    }).then( (dog) => {
        if (dog.Error) {
            store.dispatch({
                type: "DOG_ERROR",
                error: dog.status
            });
        } else {
            store.dispatch({
                type: "DOG_RETURNED",
                dog: dog.message
            });
        }


    } )

}
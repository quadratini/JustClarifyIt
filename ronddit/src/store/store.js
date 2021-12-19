export let usersData = [
    {
        id: "0",
        name: "monkey",
        password: "whatsthepass"
    },
    {
        id: "1",
        name: "banana",
        password: "password??"
    },
    {
        id: "2",
        name: "yrea",
        password: "hereitcomes"
    }
]

export let postsData = [
    {
        id: "0",
        userId: "0",
        title: "look at this crazy cat!!",
        comments: [{userId: "2", message: "meow meow"}]
    },
    {
        id: "1",
        userId: "2",
        title: "You did it, man",
        comments: [{userId: "2", message: "whoisit"}, {userId: "1", message: "nah"}]
    }
]

export default {
    usersData, postsData
}

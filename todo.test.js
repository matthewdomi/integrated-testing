const { fetchData } = require("./fetchData")

describe('Testing Post', () => {
    it("should return 100 posts", async () => {
        const posts = await fetchData("posts");
        expect(posts.length).toBe(100)
    });

    it("should be contained post with ID of 1 ", async () => {
        const posts = await fetchData("posts")
        expect(posts).toContainEqual({
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        })
    })
});



// Function to generate a random ID
function generateRandomId() {
    return Math.random().toString(36).substring(2, 10);
}

// Recursive function to add IDs to nodes
function addIdsToData(data) {
    data.forEach((item) => {
        item.id = generateRandomId(); // Add a random ID to the current item
        if (item.type === "dir" && item.children) {
            addIdsToData(item.children); // Recursively add IDs to children
        }
    });
}

const data = [
    {
        type: "dir",
        name: "RootFolder", // Added top-level root folder
        children: [ // Add your existing folder structure here
            {
                type: "dir",
                name: "MyDocuments",
                children: [
                    { type: "file", name: "somenote.txt" },
                    {
                        type: "dir",
                        name: "photos",
                        children: [
                            { type: "file", name: "photo1.jpg" },
                            { type: "file", name: "photo2.jpg" },
                            { type: "file", name: "photo3.jpg" },
                        ],
                    },
                    {
                        type: "dir",
                        name: "music",
                        children: [
                            { type: "file", name: "song1.mp3" },
                            { type: "file", name: "song2.mp3" },
                        ],
                    },
                ],
            },
            {
                type: "dir",
                name: "Public",
                children: [
                    { type: "file", name: "document.pdf" },
                    {
                        type: "dir",
                        name: "videos",
                        children: [{ type: "file", name: "video1.mp4" }],
                    },
                ],
            },
        ],
    },
];

// Add IDs to the data
addIdsToData(data);

export default data;

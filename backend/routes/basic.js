const express= require("express")
const router= express.Router();



// routes
router.get("/bfhl",(req,res)=>{
    res.status(200).json({
        "operation_code": 1
    });
})

router.post('/bfhl', async (req, res) => {
    const { data } = req.body;

    // Validate input
    if (!Array.isArray(data)) {
        return res.status(400).json({ "is_success": false, "message": "Invalid input data" });
    }

    try {
        // Find the user by roll numbe
        // If the user is found, proceed with further logic here
        // For now, we return a success message with user details
        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
        const lowercaseAlphabets = alphabets.filter(char => /^[a-z]$/.test(char));

        // Determine the highest lowercase alphabet
        const highestLowercaseAlphabet = lowercaseAlphabets.length > 0
            ? [lowercaseAlphabets.sort().reverse()[0]]
            : [];


        return res.status(200).json({
            "is_success": true,
            "user_id": "john_doe_17091999",
            "email": "john@xyz.com",
            "roll_no": "ABCD123",
           "numbers": numbers,
            "alphabets": alphabets,
            "highest_lowercase_alphabet": highestLowercaseAlphabet
        });

    } catch (error) {
        // Handle errors
        console.error("Error finding user:", error);
        return res.status(500).json({ "is_success": false, "message": "Internal Server Error" });
    }
});



module.exports =router;
export const SignUpApi = (req, res) => {

    console.log(req.body);
    return res.json({
        status: "ok",
        message: "it is working"
    })
}
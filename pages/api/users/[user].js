

export default async function handler(req, res) {

    console.log(req);
    res.send(req.query.user);
}
export default function hello(req, res) {
  req.statusCode = 200;
  req.json({message: 'it works'});
}
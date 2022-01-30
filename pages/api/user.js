const user = [{
 user: "suhail",
    id:1
},
{
 user: "suhail",
    id:1
},
{
 user: "suhail",
    id:1
}
 ]
 
export default function handler(req, res) {
  if (req.method === "GET") {
      res.status(200).json(user);
  } else {
    console.log(EvalError);
  }

}

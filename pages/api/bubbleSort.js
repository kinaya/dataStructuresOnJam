/*import { NowRequest, NowResponse} from '@vercel/node'

export default(req: NowRequest, res: NowRespone) => {
  res.json(50)
}*/

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}

import { NowRequest, NowResponse} from '@vercel/node'

export default(req: NowRequest, res: NowRespone) => {
  res.json(50)
}
